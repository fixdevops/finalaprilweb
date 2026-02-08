import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const games = [
  {
    title: "Minecraft",
    desc: "Melatih perencanaan, manajemen sumber daya, dan kreativitas tanpa batas. Membangun dunia sendiri membutuhkan kesabaran dan fokus.",
    image: "https://images.unsplash.com/photo-1627389955609-bc02188ff453?auto=format&fit=crop&q=80&w=800",
    url: "https://www.minecraft.net/"
  },
  {
    title: "Factorio",
    desc: "Game membangun pabrik yang sangat kompleks. Memerlukan perencanaan jangka panjang, pemecahan masalah, dan kontrol terhadap efisiensi.",
    image: "https://images.unsplash.com/photo-1580234811497-9df7fd2f357e?auto=format&fit=crop&q=80&w=800",
    url: "https://factorio.com/"
  },
  {
    title: "Stardew Valley",
    desc: "Mengatur pertanian, berinteraksi sosial, dan mengelola waktu. Memerlukan kesabaran dan manajemen prioritas harian.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    url: "https://www.stardewvalley.net/"
  },
  {
    title: "Kerbal Space Program",
    desc: "Merancang, meluncurkan, dan mengoperasikan pesawat ruang angkasa. Membutuhkan pemahaman fisika, kesabaran ekstrem, dan penyelesaian masalah.",
    image: "https://images.unsplash.com/photo-1614728263952-84ea206f99b6?auto=format&fit=crop&q=80&w=800",
    url: "https://www.kerbalspaceprogram.com/"
  }
];

export default function VideoGame() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen text-white pt-32 pb-20 px-6">
      <Head>
        <title>Game Edukatif - DiaWeb</title>
      </Head>

      <div className="max-w-7xl mx-auto">
        <header className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter">Game Online yang Membangun</h1>
            <p className="text-xl text-slate-400 font-medium max-w-3xl mx-auto">
              Temukan game yang tidak hanya seru, tapi juga melatih fokus, kreativitas, dan Self-Control Anda!
            </p>
          </motion.div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {games.map((game, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark rounded-[3rem] overflow-hidden border border-white/5 flex flex-col md:flex-row flex-1"
            >
              <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                <Image src={game.image} alt={game.title} fill className="object-cover" />
              </div>
              <div className="md:w-1/2 p-10 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">{game.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                  {game.desc}
                </p>
                <a href={game.url} target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-accent transition-all self-start">
                  Kunjungi Situs Game
                </a>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Schedule/Tips Section */}
        <section className="glass-dark rounded-[4rem] p-12 md:p-24 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
          
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4">Jadwal Gamer Produktif</h2>
            <p className="text-slate-400 font-medium">Seimbangkan dunia maya dan nyata dengan template jadwal ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                <h4 className="text-primary font-black uppercase tracking-widest text-xs mb-4">Tips Utama</h4>
                <div className="flex gap-4">
                  <div className="text-2xl">⏰</div>
                  <p className="text-slate-300 font-medium">Pasang Alarm Gaming! Jangan sampai kebablasan, setel pengingat waktu berhenti main.</p>
                </div>
              </div>
              <div className="p-8 bg-white/5 rounded-3xl border border-white/5">
                <h4 className="text-accent font-black uppercase tracking-widest text-xs mb-4">Kesehatan Mata</h4>
                <div className="flex gap-4">
                  <div className="text-2xl">👀</div>
                  <p className="text-slate-300 font-medium font-bold">Prinsip 20-20-20</p>
                </div>
                <p className="text-sm text-slate-400 mt-2 font-medium">Setiap 20 menit bermain, lihat objek sejauh 20 kaki (6 meter) selama 20 detik.</p>
              </div>
            </div>

            <div className="bg-white/5 p-10 rounded-[2.5rem] border border-white/5">
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Template Harian
              </h3>
              <div className="space-y-4">
                {[
                  "Bangun, Ibadah & Persiapan",
                  "Sekolah & Ekskul",
                  "Istirahat & Makan Siang",
                  "Gaming Sesi 1 (Refresh Otak)",
                  "Belajar & Mengerjakan PR",
                  "Tidur (Wajib 8 Jam)"
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-black/20 rounded-2xl border border-white/5">
                    <span className="text-sm font-medium text-slate-300">{item}</span>
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Planned</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-32 text-center">
           <h2 className="text-4xl md:text-5xl font-serif italic text-slate-400 mb-10">
            "Bermain dengan Bijak, Tumbuh dengan Hebat"
          </h2>
          <Link href="/quiz">
            <button className="px-12 py-5 bg-white text-black font-black rounded-2xl uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20">
              Cek Level Self-Control Kamu
            </button>
          </Link>
        </section>
      </div>
    </div>
  );
}
