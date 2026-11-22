'use client';

import { useState } from 'react';
import SocialLinks from './SocialLinks';

const navItems = [
  ['الرئيسية', '/'],
  ['الأخبار والنشاطات', '/news'],
  ['عن المؤسسة', '/about'],
  ['المشاريع', '/projects'],
  ['المحاضرات', '/lectures'],
  ['المكتبة', '/library'],
  ['اتصل بنا', '/contact'],
  ['مواقيت الصلاة والبث المباشر', '/prayer-live'],
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="legacyHeader">
        <div className="legacyHeaderMain">
          <div className="wrap legacyHeaderGrid">
            <a className="legacyBrand" href="/" aria-label="الصفحة الرئيسية">
              <img
                className="legacyBrandLogo"
                src="https://raw.githubusercontent.com/alaqeela14/Al-Aqila/main/assets/al-aqila-logo.jpg"
                alt="شعار مؤسسة العقيلة"
              />
              <img
                className="legacyBrandName"
                src="https://raw.githubusercontent.com/alaqeela14/Al-Aqila/main/assets/al-aqila-name.png"
                alt="مؤسسة العقيلة الثقافية الخيرية"
              />
            </a>

            <div className="legacyHeaderCenter">
              <div className="legacyBismillah">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</div>
              <div className="legacyHeaderNote">علم، ثقافة، خدمة، وبناء إنساني</div>
            </div>

            <div className="legacyHeaderSide">
              <button
                type="button"
                className="legacyMenuButton"
                aria-label={open ? 'إغلاق القائمة' : 'فتح القائمة'}
                aria-expanded={open}
                onClick={() => setOpen(!open)}
              >
                <span aria-hidden="true">☰</span>
                <span>القائمة</span>
              </button>
              <SocialLinks />
            </div>
          </div>
        </div>

        <div className="legacyNavWrap">
          <nav className={open ? 'legacyNav open' : 'legacyNav'} aria-label="القائمة الرئيسية">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </nav>
        </div>
      </header>

      <div className="legacyMarquee" aria-label="دعاء">
        <div className="legacyMarqueeTrack">
          اللهم صل على محمد وآل محمد، وعجل فرجهم — اللهم كن لوليك الحجة بن الحسن صلواتك عليه وعلى آبائه في هذه الساعة وفي كل ساعة ولياً وحافظاً وقائداً وناصراً ودليلاً وعيناً حتى تسكنه أرضك طوعاً وتمتعه فيها طويلاً
        </div>
      </div>
    </>
  );
}
