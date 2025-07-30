-- Critical Security Fixes Migration

-- 1. Enable RLS on tables that are missing it
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hosting_accounts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_reminders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.role_permissions ENABLE ROW LEVEL SECURITY;

-- 2. Create RLS policies for users table
CREATE POLICY "Users can view their own record" ON public.users
FOR SELECT
USING (auth.uid()::text = id::text);

CREATE POLICY "Admins can view all users" ON public.users
FOR SELECT
USING (is_admin());

CREATE POLICY "Users can update their own record" ON public.users
FOR UPDATE
USING (auth.uid()::text = id::text);

CREATE POLICY "Admins can manage all users" ON public.users
FOR ALL
USING (is_admin());

-- 3. Create RLS policies for payments table
CREATE POLICY "Users can view their own payments" ON public.payments
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all payments" ON public.payments
FOR ALL
USING (is_admin());

CREATE POLICY "Users can create their own payments" ON public.payments
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- 4. Create RLS policies for hosting_accounts table
CREATE POLICY "Users can view their own hosting accounts" ON public.hosting_accounts
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can view all hosting accounts" ON public.hosting_accounts
FOR ALL
USING (is_admin());

CREATE POLICY "Users can create their own hosting accounts" ON public.hosting_accounts
FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- 5. Create RLS policies for email_reminders table
CREATE POLICY "Users can view their own email reminders" ON public.email_reminders
FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all email reminders" ON public.email_reminders
FOR ALL
USING (is_admin());

CREATE POLICY "System can create email reminders" ON public.email_reminders
FOR INSERT
WITH CHECK (true);

-- 6. Create RLS policies for role_permissions table
CREATE POLICY "Admins can view role permissions" ON public.role_permissions
FOR SELECT
USING (is_admin());

CREATE POLICY "Admins can manage role permissions" ON public.role_permissions
FOR ALL
USING (is_admin());

-- 7. Fix database function security issues by updating search_path
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
SECURITY DEFINER
SET search_path = ''
AS $function$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles 
    WHERE user_roles.user_id = auth.uid() 
    AND user_roles.role_id = (SELECT id FROM public.roles WHERE name = 'admin' LIMIT 1)
  );
$function$;

CREATE OR REPLACE FUNCTION public.is_server_admin(server_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.server_members
    WHERE server_members.server_id = $1
    AND server_members.user_id = auth.uid()
    AND server_members.is_admin = true
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.player_has_company(player_id uuid)
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  RETURN EXISTS (
    SELECT 1 FROM public.companies 
    WHERE owner_id = player_id
  );
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_server_status(server_id uuid, is_online boolean)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = ''
AS $function$
BEGIN
  INSERT INTO public.server_status (server_id, is_online, last_heartbeat)
  VALUES (server_id, is_online, now())
  ON CONFLICT (server_id) 
  DO UPDATE SET 
    is_online = EXCLUDED.is_online,
    last_heartbeat = EXCLUDED.last_heartbeat;
END;
$function$;

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SET search_path = ''
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$;