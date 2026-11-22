type SocialName = 'youtube' | 'telegram' | 'instagram' | 'facebook' | 'whatsapp';

const links: { label: string; url: string; name: SocialName }[] = [
  { label: 'يوتيوب', url: 'https://youtube.com/@al_aqeela14?si=sQvFerYXTSqqmO2X', name: 'youtube' },
  { label: 'تيليغرام', url: 'https://t.me/al_aqeela14', name: 'telegram' },
  { label: 'إنستغرام', url: 'https://www.instagram.com/al_aqeela14?cnvx=OWVubDFwd3M4cDM4', name: 'instagram' },
  { label: 'فيسبوك', url: 'https://www.facebook.com/share/1MEBfLqCGr/', name: 'facebook' },
  { label: 'واتساب', url: 'https://whatsapp.com/channel/0029Vb6LsdJ96H4JoqGJA833', name: 'whatsapp' },
];

function BrandIcon({ name }: { name: SocialName }) {
  const common = { viewBox: '0 0 24 24', width: 19, height: 19, 'aria-hidden': true as const };
  switch (name) {
    case 'youtube':
      return <svg {...common} viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4L15.8 12l-6.2 3.6Z"/></svg>;
    case 'telegram':
      return <svg {...common} fill="currentColor"><path d="M21.8 4.2 18.5 20c-.2 1.1-.9 1.4-1.8.9l-5-3.7-2.4 2.3c-.3.3-.5.5-1 .5l.4-5.1 9.3-8.4c.4-.4-.1-.6-.6-.2L6 13.5l-4.9-1.5c-1.1-.3-1.1-1.1.2-1.6L20.4 3c.9-.3 1.7.2 1.4 1.2Z"/></svg>;
    case 'instagram':
      return <svg {...common} fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.6" cy="6.7" r="1" fill="currentColor" stroke="none"/></svg>;
    case 'facebook':
      return <svg {...common} fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z"/></svg>;
    case 'whatsapp':
      return <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.9a8.2 8.2 0 1 1 16-3.4Z"/><path d="M8.2 7.8c.2-.5.5-.5.8-.5h.5c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.9 1.3 1.6 2.2 2.1.3.2.5.2.7-.1l.8-.9c.2-.2.4-.3.7-.2l1.7.8c.3.1.4.3.4.5 0 .3-.2 1.2-.8 1.6-.5.4-1.2.6-2 .4-1-.2-2.3-.8-3.7-2-1.2-1.1-2-2.4-2.2-3.4-.2-.9.1-1.8.5-2.6Z"/></svg>;
  }
}

export default function SocialLinks() {
  return (
    <div className="socialLinks" aria-label="حسابات المؤسسة">
      {links.map((item) => (
        <a key={item.name} href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.label} title={item.label}>
          <BrandIcon name={item.name} />
        </a>
      ))}
    </div>
  );
}
