'use client';
import {useEffect,useState} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {supabase} from '../../lib/supabase';
type Item={id:string,title:string,summary:string,body:string,image_url:string|null,created_at:string};
export default function NewsPage(){const [items,setItems]=useState<Item[]>([]);const [loading,setLoading]=useState(true);useEffect(()=>{supabase.from('site_content').select('*').eq('section','news').eq('published',true).order('created_at',{ascending:false}).then(({data})=>{if(data)setItems(data as Item[]);setLoading(false);});},[]);return <><Header/><main><section className="pagehero"><div className="wrap"><h1>أخبار المؤسسة</h1></div></section><section className="section"><div className="wrap">{loading?<p>جارٍ تحميل الأخبار...</p>:items.length===0?<p>لا توجد أخبار منشورة حالياً.</p>:<div className="grid">{items.map(item=><article className="card" key={item.id}>{item.image_url&&<img src={item.image_url} alt="" style={{width:'100%',borderRadius:8}}/>}<h3>{item.title}</h3>{item.summary&&<p>{item.summary}</p>}<small>{new Date(item.created_at).toLocaleDateString('ar')}</small>{item.body&&<p>{item.body}</p>}</article>)}</div>}</div></section></main><Footer/></>}
