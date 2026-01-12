import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const materiList = [
  {
    id: 1,
    title: "Manajemen Waktu Strategis",
    desc: "Implementasi metode Eisenhower untuk efisiensi kerja profesional di era digital.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
    link: "/pembelajaran/manajemen-waktu"
  },
  {
    id: 2,
    title: "Protokol Deep Work",
    desc: "Meningkatkan kapasitas kognitif melalui teknik fokus mendalam tanpa distraksi.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
    link: "/pembelajaran/deep-work"
  },
  {
    id: 3,
    title: "Regulasi Psikologi & Emosi",
    desc: "Pendekatan berbasis sains untuk mengelola stres dan menjaga resiliensi profesional.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
    link: "/pembelajaran/regulasi-emosi"
  },
  {
    id: 4,
    title: "Audit & Evaluasi Performa",
    desc: "Sistem refleksi diri terstruktur untuk memantau kemajuan sasaran jangka panjang.",
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800",
    link: "/pembelajaran/refleksi-diri"
  }
];

const videos = [
  { 
    id: 1, 
    title: "Prioritas & Manajemen Waktu", 
    youtubeId: "ObBlyPOYau0", 
    label: "Manajemen Strategis"
  },
  { 
    id: 2, 
    title: "Deep Work: Seni Fokus Mendalam", 
    youtubeId: "hgijbttmXT4", 
    label: "Optimasi Kognitif"
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function HomeFinal() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Solusi ESLint: Delay kecil menggunakan setTimeout untuk memisahkan siklus render
    const timer = setTimeout(() => setMounted(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Jangan merender apapun sebelum mounted untuk menghindari mismatch hydration
  if (!mounted) return <div className="min-h-screen bg-white" />;

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans overflow-x-hidden">


      {/* --- HERO SECTION --- */}
      <section className="bg-slate-50 border-b border-slate-200 relative pt-20">
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-48 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-8 tracking-tight">
              Platform Pengembangan <br />
              <span className="text-blue-700">Kapasitas Diri.</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-12">
              Kurikulum eksklusif untuk membangun disiplin dan fokus di standar lingkungan kerja global.
            </p>
            <div className="flex flex-wrap gap-5 justify-center md:justify-start">
              <Link href="#kurikulum" className="px-10 py-4 bg-blue-700 text-white font-bold rounded-sm shadow-xl hover:bg-blue-800 transition-all hover:scale-105 active:scale-95">
                MULAI KURIKULUM
              </Link>
              <Link href="#video" className="px-10 py-4 bg-white text-slate-700 border border-slate-300 font-bold rounded-sm transition-all hover:bg-slate-50">
                MATERI VISUAL
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- KURIKULUM SECTION --- */}
      <section id="kurikulum" className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20 border-l-8 border-blue-700 pl-8"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-2 uppercase tracking-tighter">Modul Pembelajaran</h2>
            <p className="text-slate-500 text-lg font-medium">Sistem kurikulum peningkatan kapasitas diri terstruktur.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {materiList.map((materi) => (
              <motion.div 
                key={materi.id} 
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="flex flex-col bg-white border border-slate-100 rounded-sm hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              >
                <div className="relative h-56 w-full bg-slate-50 overflow-hidden">
                  <Image src={materi.image} alt={materi.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8 flex flex-col grow">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-700 transition-colors tracking-tight">
                    {materi.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-8 grow text-sm font-medium">
                    {materi.desc}
                  </p>
                  <Link href={materi.link} className="text-xs font-black text-blue-700 uppercase tracking-[0.2em] flex items-center group-hover:gap-3 transition-all">
                    Akses Modul <span className="ml-2">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- VIDEO SECTION --- */}
      <section id="video" className="py-32 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6"
          >
            <div className="max-w-xl text-left">
              <h2 className="text-4xl font-bold text-slate-900 tracking-tight uppercase mb-4">Pusat Visual</h2>
              <p className="text-slate-500 font-medium italic border-l-4 border-blue-600 pl-4">
                Visualisasi konsep strategis dalam Bahasa Indonesia.
              </p>
            </div>
            <div className="hidden md:block h-px flex-1 bg-slate-100 mb-2 mx-12"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {videos.map((vid, index) => (
              <motion.div 
                key={vid.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative aspect-video bg-white rounded-sm overflow-hidden p-2 border border-slate-200 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:border-blue-200">
                  <div className="w-full h-full bg-black rounded-sm overflow-hidden relative z-10 shadow-inner">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${vid.youtubeId}?rel=0&modestbranding=1`}
                      title={vid.title}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>

                <div className="mt-10 px-2 text-left">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.3em]">{vid.label}</span>
                    <div className="h-px w-10 bg-slate-200 group-hover:w-20 transition-all duration-500"></div>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors duration-300">
                    {vid.title}
                  </h4>
                  <p className="text-slate-400 text-[10px] mt-4 font-bold uppercase tracking-[0.2em]">
                    Materi Terverifikasi // 2026
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- ASSESSMENT SECTION --- */}
      <footer className="bg-slate-50 py-40 px-6 text-center border-t border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tighter">Sertifikasi</h2>
          <p className="text-slate-600 mb-14 text-xl leading-relaxed max-w-2xl mx-auto font-medium">
            Evaluasi hasil pembelajaran Anda melalui penilaian formal untuk mengukur tingkat penguasaan materi.
          </p>
          <Link href="/quiz" className="px-16 py-5 bg-blue-700 text-white font-black rounded-sm uppercase tracking-widest text-sm shadow-xl hover:bg-blue-800 inline-block transition-all hover:scale-105 active:scale-95">
            Mulai Penilaian
          </Link>
        </div>

        <div className="max-w-7xl mx-auto mt-40 pt-10 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center opacity-50 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
          <p>THE SELF LEARNING HUB // SYSTEMS 2026</p>
          <div className="flex gap-10 mt-6 md:mt-0">
            <span className="hover:text-blue-700 cursor-pointer">Privacy</span>
            <span className="hover:text-blue-700 cursor-pointer">Terms</span>
          </div>
        </div>
      </footer>
    </div>
  );
}