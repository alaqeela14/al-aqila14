'use client';

import { useState } from 'react';
import SocialLinks from './SocialLinks';

const navItems = [
  ['الرئيسية', '/'],
  ['عن المؤسسة', '/about'],
  ['المشاريع', '/projects'],
  ['المحاضرات', '/lectures'],
  ['المكتبة', '/library'],
  ['الأخبار والنشاطات', '/news'],
  ['اتصل بنا', '/contact'],
  ['مواقيت الصلاة والبث المباشر', '/prayer-live'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="header-main">
          <div className="container header-grid">
            <div className="brand-block brand-image-block">
              <img className="brand-logo-image" src="https://raw.githubusercontent.com/alaqeela14/Al-Aqila/main/assets/al-aqila-logo.jpg" alt="شعار مؤسسة العقيلة" />
              <img className="brand-name-image" src="https://raw.githubusercontent.com/alaqeela14/Al-Aqila/main/assets/al-aqila-name.png" alt="مؤسسة العقيلة الثقافية الخيرية" />
            </div>

            <div className="header-center">
              <div className="bismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
              <div className="header-center-note">علم، ثقافة، خدمة، وبناء إنساني</div>
            </div>

            <div className="header-actions header-actions-social">
              <button type="button" className="icon-btn menu-toggle" aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'} aria-expanded={open} onClick={() => setOpen(!open)}>
                <span aria-hidden="true">☰</span>
              </button>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="nav-wrap">
          <div className="container">
            <nav className={open ? 'main-nav open' : 'main-nav'} aria-label="القائمة الرئيسية">
              {navItems.map(([label, href]) => (
                <a className="nav-link" key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="marquee" aria-label="دعاء">
        <div className="marquee-track">
          اللهم صل على محمد وآل محمد، وعجل فرجهم — اللهم كن لوليك الحجة بن الحسن صلواتك عليه وعلى آبائه في هذه الساعة وفي كل ساعة ولياً وحافظاً وقائداً وناصراً ودليلاً وعيناً حتى تسكنه أرضك طوعاً وتمتعه فيها طويلاً
          &nbsp;&nbsp;&nbsp; — &nbsp;&nbsp;&nbsp;
          اللهم صل على محمد وآل محمد، وعجل فرجهم — اللهم كن لوليك الحجة بن الحسن صلواتك عليه وعلى آبائه في هذه الساعة وفي كل ساعة ولياً وحافظاً وقائداً وناصراً ودليلاً وعيناً حتى تسكنه أرضك طوعاً وتمتعه فيها طويلاً
        </div>
      </div>
    </>
  );
}
