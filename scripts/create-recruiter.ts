/**
 * Admin CLI script to create recruiter accounts.
 *
 * Usage:
 *   npx tsx scripts/create-recruiter.ts <username> <password> <fullName> <companyName> [email]
 *
 * Example:
 *   npx tsx scripts/create-recruiter.ts acme_recruiter "SecretP@ss123" "Alice Recruiter" "Acme Corp"
 */

import { createClient } from "@supabase/supabase-js";
import fs from "node:fs";
import path from "node:path";

// Auto-load .env file if present
try {
  if (typeof process.loadEnvFile === "function") {
    process.loadEnvFile();
  } else {
    const envPath = path.resolve(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, "utf-8");
      for (const line of content.split("\n")) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith("#") && trimmed.includes("=")) {
          const [k, ...v] = trimmed.split("=");
          if (k && !process.env[k.trim()]) {
            process.env[k.trim()] = v.join("=").trim().replace(/^["']|["']$/g, "");
          }
        }
      }
    }
  }
} catch {
  // Ignore env loading errors
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length < 4) {
    console.error(
      "Usage: npx tsx scripts/create-recruiter.ts <username> <password> <fullName> <companyName> [email]",
    );
    process.exit(1);
  }

  const [username, password, fullName, companyName, customEmail] = args;
  const email = customEmail || `${username?.toLowerCase()}@recruiters.eigenhire.online`;

  let supabaseUrl =
    process.env.SUPABASE_URL ||
    process.env.VITE_SUPABASE_URL ||
    "https://vglqudbftkybegdrqdec.supabase.co";
  
  // Strip trailing /rest/v1 or trailing slashes if user pasted REST endpoint
  supabaseUrl = supabaseUrl.replace(/\/rest\/v1\/?$/, "").replace(/\/+$/, "");

  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!serviceRoleKey) {
    console.error("Error: SUPABASE_SERVICE_ROLE_KEY environment variable is required.");
    process.exit(1);
  }

  const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  console.log(`Creating recruiter account for "${username}" (${email})...`);

  const { data, error } = await supabaseAdmin.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    app_metadata: {
      role: "recruiter",
    },
    user_metadata: {
      username,
      full_name: fullName,
      company_name: companyName,
    },
  });

  if (error) {
    console.error("Failed to create recruiter user:", error.message);
    process.exit(1);
  }

  // Explicitly ensure profile has role = 'recruiter' and avatar_step_done = true
  const { error: profileErr } = await supabaseAdmin
    .from("profiles")
    .update({
      role: "recruiter",
      full_name: fullName,
      company_name: companyName,
      avatar_step_done: true,
    })
    .eq("id", data.user.id);

  if (profileErr) {
    console.warn("Warning: Could not set recruiter profile role:", profileErr.message);
  }

  console.log("Recruiter user created successfully!");
  console.log("User ID:", data.user.id);
  console.log("Email:", data.user.email);
  console.log("Role:", data.user.app_metadata.role);
}

main().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
