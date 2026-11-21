-- مخطط قاعدة بيانات مؤسسة العقيلة (نفّذ في محرر SQL في Supabase)
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
 link_url text,
 published boolean not null default false,
 created_at timestamptz not null default now(),
 updated_at timestamptz not null default now()
);
alter table public.site_content add column if not exists link_url text;
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

-- إنشاء مساحة الملفات العامة (يتم تنفيذ هذا القسم إذا لم تكن مساحة site-media موجودة)
insert into storage.buckets(id,name,public) values ('site-media','site-media',true)
on conflict (id) do update set public=true;
drop policy if exists "Public can read site media" on storage.objects;
create policy "Public can read site media" on storage.objects for select using (bucket_id='site-media');
drop policy if exists "Admins upload site media" on storage.objects;
create policy "Admins upload site media" on storage.objects for insert to authenticated
with check (bucket_id='site-media' and exists(select 1 from public.admin_users where user_id=auth.uid()));
drop policy if exists "Admins update site media" on storage.objects;
create policy "Admins update site media" on storage.objects for update to authenticated
using (bucket_id='site-media' and exists(select 1 from public.admin_users where user_id=auth.uid()))
with check (bucket_id='site-media' and exists(select 1 from public.admin_users where user_id=auth.uid()));
drop policy if exists "Admins delete site media" on storage.objects;
create policy "Admins delete site media" on storage.objects for delete to authenticated
using (bucket_id='site-media' and exists(select 1 from public.admin_users where user_id=auth.uid()));

-- الخطوات المتبقية بعد تنفيذ هذا الملف:
-- 1) أنشئ حساب المدير في Authentication (المصادقة).
-- 2) انسخ معرف UUID للمستخدم وأضفه في جدول public.admin_users.
-- مثال (استبدل المعرف أدناه بالمعرف الحقيقي):
-- insert into public.admin_users(user_id) values ('00000000-0000-0000-0000-000000000000');
