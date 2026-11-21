-- مخطط قاعدة بيانات مؤسسة العقيلة
create table if not exists public.admin_users (
 user_id uuid primary key references auth.users(id) on delete cascade,
 created_at timestamptz not null default now()
);
create table if not exists public.site_content (
 id uuid primary key default gen_random_uuid(),
 section text not null check (section in ('news','lectures','library','projects')),
 title text not null,
 summary text default '',
 body text default '',
 image_url text,
 published boolean not null default false,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
alter table public.admin_users enable row level security;
alter table public.site_content enable row level security;
drop policy if exists "admin_users_read_own" on public.admin_users;
create policy "admin_users_read_own" on public.admin_users for select to authenticated using (user_id = auth.uid());
drop policy if exists "public_read_published" on public.site_content;
create policy "public_read_published" on public.site_content for select to anon, authenticated using (published = true);
drop policy if exists "admins_manage_content" on public.site_content;
create policy "admins_manage_content" on public.site_content for all to authenticated
using (exists(select 1 from public.admin_users where user_id=auth.uid()))
with check (exists(select 1 from public.admin_users where user_id=auth.uid()));
-- بعد إنشاء حساب المدير في Authentication، أضف معرفه (UUID) هنا:
-- insert into public.admin_users(user_id) values ('ضع-معرف-حساب-المدير-هنا');
