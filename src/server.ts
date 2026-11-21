import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import {
  PlanRequestSchema,
  handleInterviewPlan,
  TurnRequestSchema,
  handleInterviewTurn,
  EvaluateRequestSchema,
  handleInterviewEvaluate,
  TranscribeRequestSchema,
  handleSpeechTranscribe,
  SynthesizeRequestSchema,
  handleSpeechSynthesize,
} from "./server/api";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

async function handleApiRequest(pathname: string, request: Request): Promise<Response | null> {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    switch (pathname) {
      case "/api/interview/plan": {
        const parsed = PlanRequestSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: parsed.error.format() }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        const result = await handleInterviewPlan(parsed.data);
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      case "/api/interview/turn": {
        const parsed = TurnRequestSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: parsed.error.format() }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        const result = await handleInterviewTurn(parsed.data);
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      case "/api/interview/evaluate": {
        const parsed = EvaluateRequestSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: parsed.error.format() }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        const result = await handleInterviewEvaluate(parsed.data);
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      case "/api/speech/transcribe": {
        const parsed = TranscribeRequestSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: parsed.error.format() }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        const result = await handleSpeechTranscribe(parsed.data);
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      case "/api/speech/synthesize": {
        const parsed = SynthesizeRequestSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(JSON.stringify({ error: parsed.error.format() }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }
        const result = await handleSpeechSynthesize(parsed.data);
        return new Response(JSON.stringify(result), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        });
      }
      default:
        return null;
    }
  } catch (err) {
    console.error(`Error handling ${pathname}:`, err);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname.startsWith("/api/interview/") || url.pathname.startsWith("/api/speech/")) {
        const apiResponse = await handleApiRequest(url.pathname, request);
        if (apiResponse) return apiResponse;
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
