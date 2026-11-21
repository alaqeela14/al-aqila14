import './globals.css';
export const metadata = { title: 'مؤسسة العقيلة الثقافية الخيرية', description: 'مؤسسة ثقافية خيرية تسعى لنشر الوعي والمعرفة وخدمة المجتمع.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ar" dir="rtl"><body>{children}</body></html>; }