import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ManajemenWaktuDetail() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <Head>
        <title>Strategi Manajemen Waktu | SelfHub</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/pembelajaran" className="group inline-flex items-center text-slate-500 hover:text-blue-600 font-bold transition-colors">
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
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest uppercase bg-blue-600 text-white rounded-full">
              Pilar Pertama
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              Manajemen Waktu <br />
              <span className="text-gradient">Strategis.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Ubah cara Anda memandang produktivitas dengan menguasai seni prioritas melalui Eisenhower Matrix.
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
              src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200"
              alt="Eisenhower Matrix"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 relative z-10">
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-2xl font-bold text-slate-900 leading-relaxed mb-12">
                Eisenhower Matrix adalah metode pengorganisasian tugas yang membagi prioritas berdasarkan dua sumbu: <span className="text-blue-600">Urgensi</span> dan <span className="text-blue-600">Kepentingan</span>.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-16">
                {[
                  { title: "1. Mendesak & Penting", desc: "Tugas krisis yang harus diselesaikan segera.", action: "DO IT NOW", color: "from-rose-500 to-rose-600" },
                  { title: "2. Tidak Mendesak & Penting", desc: "Perencanaan dan pembangunan masa depan.", action: "SCHEDULE IT", color: "from-emerald-500 to-emerald-600" },
                  { title: "3. Mendesak & Tidak Penting", desc: "Interupsi yang mengalihkan fokus utama.", action: "DELEGATE IT", color: "from-amber-500 to-amber-600" },
                  { title: "4. Tidak Mendesak/Penting", desc: "Aktivitas pembuang energi dan waktu.", action: "ELIMINATE IT", color: "from-slate-400 to-slate-500" }
                ].map((item, i) => (
                  <div key={i} className="bg-slate-50 rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition-all group">
                    <h4 className="font-black text-slate-900 text-lg mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-sm font-medium mb-6 opacity-60">{item.desc}</p>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${item.color} text-white text-[10px] font-black rounded-xl tracking-widest`}>
                      {item.action}
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">Kunci Sukses Pembelajar.</h2>
              <p className="mb-8">
                Rahasia dari performa puncak bukan terletak pada seberapa banyak Anda bekerja, melainkan seberapa sering Anda berada di <strong>Kuadran 2</strong>. Ini adalah area di mana pertumbuhan sejati terjadi.
              </p>

              <blockquote className="bg-slate-900 rounded-[2.5rem] p-12 my-16 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-[60px] rounded-full" />
                <p className="text-2xl font-black text-white italic mb-6 relative z-10">
                  &quot;What is important is seldom urgent and what is urgent is seldom important.&quot;
                </p>
                <cite className="text-blue-400 font-bold not-italic uppercase tracking-widest text-xs">— Dwight D. Eisenhower</cite>
              </blockquote>
            </div>
          </div>
        </motion.article>

        {/* Next Step */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-blue-500/20"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black mb-4 tracking-tight">Kuasai Fokus Anda.</h3>
            <p className="text-blue-100 font-medium opacity-80">Lanjutkan ke teknik Deep Work untuk implementasi nyata.</p>
          </div>
          <Link href="/pembelajaran/deep-work" className="bg-white text-blue-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-all shadow-xl active:scale-95">
            Materi Selanjutnya →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
