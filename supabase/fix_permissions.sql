-- Fix permissions and ensure public schema access for Supabase roles
GRANT USAGE ON SCHEMA public TO anon, authenticated, service_role;

GRANT ALL ON ALL TABLES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO anon, authenticated, service_role;
GRANT ALL ON ALL ROUTINES IN SCHEMA public TO anon, authenticated, service_role;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO anon, authenticated, service_role;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON ROUTINES TO anon, authenticated, service_role;

-- Ensure all auth users have corresponding profiles populated
INSERT INTO public.profiles (id, role, full_name, username, email, avatar_step_done, company_name)
SELECT 
  u.id,
  COALESCE((u.raw_app_meta_data->>'role')::public.user_role, 'recruiter'::public.user_role),
  COALESCE(u.raw_user_meta_data->>'full_name', 'Recruiter'),
  COALESCE(u.raw_user_meta_data->>'username', split_part(u.email, '@', 1)),
  u.email,
  true,
  COALESCE(u.raw_user_meta_data->>'company_name', 'ResumeX')
FROM auth.users u
LEFT JOIN public.profiles p ON p.id = u.id
WHERE p.id IS NULL
ON CONFLICT (id) DO NOTHING;
