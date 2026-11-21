-- انسخ هذا النص إلى محرر SQL في Supabase ثم نفّذه.
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
alter table public.site_content enable row level security;
-- القراءة العامة للمحتوى المنشور
create policy "Public can read published content" on public.site_content
for select using (published = true);
-- الإدارة الموثقة فقط: صلاحية إدارة أولية لجميع المستخدمين المسجلين.
-- يُنصح بتقييدها لاحقاً بجدول عضوية admin خاص.
create policy "Authenticated can manage content" on public.site_content
for all to authenticated using (true) with check (true);
