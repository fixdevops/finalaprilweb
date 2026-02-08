import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function RegulasiEmosiDetail() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <Head>
        <title>Regulasi Psikologi & Emosi | SelfHub</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/pembelajaran" className="group inline-flex items-center text-slate-500 hover:text-rose-600 font-bold transition-colors">
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
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest uppercase bg-rose-600 text-white rounded-full">
              Pilar Ketiga
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              Regulasi Psikologi <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-orange-600">& Emosi.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Bangun resiliensi mental untuk menjaga konsistensi belajar di tengah tantangan dan kegagalan.
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
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
              alt="Emotional Regulation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 relative z-10">
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-2xl font-bold text-slate-900 leading-relaxed mb-12">
                Kecerdasan emosional adalah fondasi utama dari manajemen diri. Tanpa regulasi yang baik, performa kognitif Anda akan terhambat oleh stres dan kecemasan.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Membangun Kekuatan Mental.</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
                {[
                  { title: "Kesadaran Diri", icon: "🧘", desc: "Mengenali pemicu emosi saat muncul dan mengamatinya tanpa menghakimi diri sendiri." },
                  { title: "Resiliensi Kognitif", icon: "🛡️", desc: "Membingkai ulang kegagalan sebagai data berharga untuk perbaikan sistem belajar." }
                ].map((item, i) => (
                  <div key={i} className="bg-rose-50/50 rounded-3xl p-8 border border-rose-100/50 hover:shadow-xl transition-all group">
                    <div className="text-4xl mb-6">{item.icon}</div>
                    <h4 className="font-black text-slate-900 text-xl mb-3 tracking-tight">{item.title}</h4>
                    <p className="text-sm font-medium opacity-70 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-black text-slate-900 mb-6">Teknik Berhenti Sejenak (The Pause)</h3>
              <p className="mb-8">
                Saat beban kognitif terasa terlalu berat, gunakan teknik &quot;The Pause&quot;. Berhenti selama 5 menit, kendalikan pernapasan, dan visualisasikan kembali misi jangka panjang Anda.
              </p>

              <blockquote className="bg-rose-950 rounded-[2.5rem] p-12 my-16 text-center shadow-2xl relative overflow-hidden text-white border-none">
                <div className="absolute top-0 right-0 w-40 h-40 bg-orange-600/10 blur-[60px] rounded-full" />
                <p className="text-2xl font-black italic mb-6 relative z-10 leading-relaxed">
                  &quot;Bukan beban yang menjatuhkanmu, melainkan caramu membawanya.&quot;
                </p>
                <cite className="text-rose-400 font-bold not-italic uppercase tracking-widest text-xs">— Lou Holtz</cite>
              </blockquote>
            </div>
          </div>
        </motion.article>

        {/* Next Step */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-rose-600 to-orange-600 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-rose-500/20"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black mb-4 tracking-tight">Audit Performa.</h3>
            <p className="text-rose-100 font-medium opacity-80">Langkah terakhir: Pelajari cara memantau pertumbuhan Anda secara mandiri.</p>
          </div>
          <Link href="/pembelajaran/refleksi-diri" className="bg-white text-rose-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-all shadow-xl active:scale-95">
            Materi Selanjutnya →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
