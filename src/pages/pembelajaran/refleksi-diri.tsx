import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function RefleksiDiriDetail() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <Head>
        <title>Audit & Refleksi Strategis | SelfHub</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/pembelajaran" className="group inline-flex items-center text-slate-500 hover:text-emerald-600 font-bold transition-colors">
            <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center mr-3 group-hover:-translate-x-1 transition-transform">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            Kembali ke Kurikulum
          </Link>
        </motion.div>

        {/* Hero Section */}
        <header className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest uppercase bg-emerald-600 text-white rounded-full">
              Pilar Terakhir
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              Audit & <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">Refleksi Strategis.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Gunakan data performa untuk mengoptimalkan sistem belajar dan mempercepat kurva pertumbuhan Anda.
            </p>
          </motion.div>
        </header>

        {/* Content */}
        <motion.article 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-[3rem] overflow-hidden shadow-2xl relative"
        >
          <div className="relative w-full h-[450px]">
            <Image 
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=1200"
              alt="Self Reflection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 relative z-10">
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-2xl font-bold text-slate-900 leading-relaxed mb-12">
                Tanpa audit berkala, Anda berisiko mengulangi kesalahan yang sama. Refleksi adalah proses sistematis untuk mengubah pengalaman menjadi pengetahuan.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Langkah Audit Mingguan.</h2>
              <div className="space-y-6 my-10">
                {[
                  { title: "Tinjau Pencapaian", desc: "Rayakan keberhasilan kecil dan analisis faktor kunci di baliknya." },
                  { title: "Identifikasi Hambatan", desc: "Analisis distorsi fokus atau kesulitan teknis yang muncul saat belajar." },
                  { title: "Iterasi Sistem", desc: "Buat penyesuaian spesifik pada jadwal atau teknik untuk minggu depan." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-slate-50/50 rounded-3xl border border-slate-100 hover:border-emerald-200 transition-all group">
                    <div className="w-12 h-12 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center font-black shrink-0 text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm font-medium opacity-70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="bg-slate-900 rounded-[2.5rem] p-12 my-16 text-center shadow-2xl relative overflow-hidden text-white border-none">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-600/10 blur-[60px] rounded-full" />
                <p className="text-2xl font-black italic mb-6 relative z-10 leading-relaxed">
                  &quot;Pelajaran yang paling berharga bukan berasal dari pengalaman, melainkan dari refleksi atas pengalaman tersebut.&quot;
                </p>
                <cite className="text-emerald-400 font-bold not-italic uppercase tracking-widest text-xs">— John Dewey</cite>
              </blockquote>

              <h3 className="text-2xl font-black text-slate-900 mb-6 font-display uppercase tracking-tighter">Kesimpulan Akhir.</h3>
              <p>
                Self-learning adalah sebuah maraton yang membutuhkan sistem manajemen diri yang kokoh. Dengan menguasai waktu, fokus, emosi, dan refleksi, Anda telah membangun mesin pertumbuhan yang tak terhentikan.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Final CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 md:p-24 rounded-[4rem] bg-slate-900 text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/20 blur-[120px] rounded-full" />
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-emerald-600/20 blur-[120px] rounded-full" />
          
          <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tight relative z-10">Selamat! Kurikulum Selesai.</h3>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto relative z-10 text-lg font-medium">
            Anda telah menyelesaikan seluruh pilar manajemen diri. Sekarang, saatnya melakukan verifikasi atas apa yang telah Anda pelajari.
          </p>
          <Link href="/quiz">
            <button className="bg-white text-slate-900 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-emerald-600 hover:text-white transition-all hover:scale-105 active:scale-95 relative z-10">
              Mulai Final Assessment
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
