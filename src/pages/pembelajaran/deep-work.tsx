import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function DeepWorkDetail() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-mesh py-32 px-6">
      <Head>
        <title>Protokol Deep Work | SelfHub</title>
      </Head>

      <div className="max-w-4xl mx-auto">
        {/* Navigation */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link href="/pembelajaran" className="group inline-flex items-center text-slate-500 hover:text-indigo-600 font-bold transition-colors">
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
            <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-black tracking-widest uppercase bg-indigo-600 text-white rounded-full">
              Pilar Kedua
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8 tracking-tighter">
              Protokol <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Deep Work.</span>
            </h1>
            <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl">
              Kuasai kemampuan kognitif tingkat tinggi untuk memecahkan masalah kompleks tanpa distraksi.
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
              src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
              alt="Deep Work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
          </div>

          <div className="p-8 md:p-16 relative z-10">
            <div className="prose prose-slate prose-lg max-w-none text-slate-600">
              <p className="text-2xl font-bold text-slate-900 leading-relaxed mb-12">
                Deep Work adalah aktivitas profesional yang dilakukan dalam keadaan konsentrasi penuh yang mendorong kemampuan kognitif Anda hingga batas maksimal.
              </p>

              <h2 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Strategi Utama Focus.</h2>
              <div className="space-y-8 my-12">
                {[
                  { title: "Filosofi Kerja", desc: "Pilih antara Monastic (isolasi total), Bimodal (blok mingguan), atau Rhythmic (jadwal harian tetap)." },
                  { title: "Ritual Lingkungan", desc: "Singkirkan semua notifikasi digital dan ciptakan lingkungan fisik yang menginduksi fokus instan." },
                  { title: "Shutdown Ritual", desc: "Tutup hari kerja Anda dengan prosedur tetap untuk mematikan beban kognitif saat istirahat." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 p-8 bg-slate-50 rounded-3xl border border-slate-100 hover:border-indigo-200 transition-all group">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-black shrink-0 shadow-lg shadow-indigo-200">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-sm font-medium opacity-70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <blockquote className="bg-indigo-900 rounded-[2.5rem] p-12 my-16 text-center shadow-2xl relative overflow-hidden">
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-600/20 blur-[60px] rounded-full" />
                <p className="text-2xl font-black text-white italic mb-6 relative z-10">
                  &quot;Deep work is at the core of what it means to be successful in the 21st century.&quot;
                </p>
                <cite className="text-indigo-400 font-bold not-italic uppercase tracking-widest text-xs">— Cal Newport</cite>
              </blockquote>

              <h3 className="text-2xl font-black text-slate-900 mb-6">Lawan Utama: Shallow Work</h3>
              <p>
                Pekerjaan dangkal seperti membalas email instan atau rapat tanpa agenda jelas menguras energi kognitif tanpa menghasilkan nilai yang signifikan. Fokuslah pada kedalaman untuk hasil luar biasa.
              </p>
            </div>
          </div>
        </motion.article>

        {/* Next Step */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-24 p-12 md:p-16 rounded-[3rem] bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-indigo-500/20"
        >
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black mb-4 tracking-tight">Keseimbangan Emosi.</h3>
            <p className="text-indigo-100 font-medium opacity-80">Pelajari cara mengelola resiliensi mental untuk konsistensi jangka panjang.</p>
          </div>
          <Link href="/pembelajaran/regulasi-emosi" className="bg-white text-indigo-600 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:translate-x-2 transition-all shadow-xl active:scale-95">
            Materi Selanjutnya →
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
