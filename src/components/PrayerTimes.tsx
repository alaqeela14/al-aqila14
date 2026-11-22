'use client';
const times=[['الفجر','00:00'],['الشروق','00:00'],['الظهر','00:00'],['العصر','00:00'],['المغرب','00:00'],['العشاء','00:00']];
export default function PrayerTimes(){return <section className="prayerSection"><div className="wrap"><div className="sectionHead"><div className="eyebrow dark">مواقيت الصلاة</div><h2>مواقيت الصلاة اليومية</h2><p>سيتم تحديث المواقيت بعد استكمال إعداد الموقع.</p></div><div className="prayerGrid">{times.map(([n,t])=><div className="prayerCard" key={n}><strong>{n}</strong><span>{t}</span></div>)}</div></div></section>}
