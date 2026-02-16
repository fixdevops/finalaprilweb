import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Emojis for better visuals
const MOODS = [
  { label: 'Sangat Senang', emoji: '🤩', color: 'bg-yellow-400' },
  { label: 'Senang', emoji: '😊', color: 'bg-green-400' },
  { label: 'Biasa Saja', emoji: '😐', color: 'bg-blue-400' },
  { label: 'Sedih', emoji: '😔', color: 'bg-purple-400' },
  { label: 'Marah/Kesal', emoji: '😡', color: 'bg-red-400' },
];

const ENERGIES = [
  { label: 'Full Power', emoji: '⚡', color: 'bg-yellow-500' },
  { label: 'Cukup', emoji: '🔋', color: 'bg-green-500' },
  { label: 'Mulai Lelah', emoji: '🪫', color: 'bg-orange-500' },
  { label: 'Butuh Tidur', emoji: '😴', color: 'bg-red-500' },
];

export default function KontrakBelajar() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Form Data
  const [formData, setFormData] = useState({
    nama: '',
    kelas: '',
    target: '',
    jauhkanHP: false,
    pomodoro: false,
    mood: '',
    energi: '',
    hasil: '',
    hadiah: '',
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const selectMood = (mood: string) => setFormData((prev) => ({ ...prev, mood }));
  const selectEnergy = (energy: string) => setFormData((prev) => ({ ...prev, energi: energy }));

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const { jsPDF } = await import('jspdf');
      const doc = new jsPDF();

      // Konfigurasi Warna
      const COLORS = {
        primary: [245, 158, 11] as [number, number, number], // amber-500
        textDark: [15, 23, 42] as [number, number, number], // slate-900
        textLight: [100, 116, 139] as [number, number, number], // slate-500
        white: [255, 255, 255] as [number, number, number],
        bgRow: [248, 250, 252] as [number, number, number], // slate-50
      };

      // Header Laporan
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(22);
      doc.setTextColor(...COLORS.textDark);
      doc.text('KONTRAK BELAJAR HARIAN', 105, 25, { align: 'center' });
      
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(...COLORS.textLight);
      doc.text(`Digital Accountability System • ${new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}`, 105, 32, { align: 'center' });

      // Garis Pemisah
      doc.setDrawColor(226, 232, 240);
      doc.line(14, 40, 196, 40);

      // Rendering Tabel Manual
      let startY = 50;
      const margin = 14;
      const tableWidth = 182;
      const col1Width = 50;
      const col2Width = tableWidth - col1Width;
      const rowHeight = 12;

      const items = [
        { label: 'Nama Lengkap', value: formData.nama },
        { label: 'Kelas', value: formData.kelas },
        { label: 'Rencana Aksi', value: formData.target },
        { label: 'Fokus: HP', value: formData.jauhkanHP ? 'SUDAH DIJAUHKAN' : 'Belum' },
        { label: 'Fokus: Pomodoro', value: formData.pomodoro ? 'DILAKUKAN' : 'Tidak' },
        { label: 'Kondisi Mood', value: formData.mood },
        { label: 'Kondisi Energi', value: formData.energi },
        { label: 'Hasil Evaluasi', value: formData.hasil },
        { label: 'Self Reward', value: formData.hadiah },
      ];

      // Header Tabel
      doc.setFillColor(...COLORS.primary);
      doc.rect(margin, startY, tableWidth, rowHeight, 'F');
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.setTextColor(...COLORS.white);
      doc.text('ASPEK KONTRAK', margin + 5, startY + 8);
      doc.text('DETAIL & REKAPAN', margin + col1Width + 5, startY + 8);

      let currentY = startY + rowHeight;

      items.forEach((item, index) => {
        // Striped background
        if (index % 2 === 1) {
          doc.setFillColor(...COLORS.bgRow);
          doc.rect(margin, currentY, tableWidth, rowHeight, 'F');
        }

        // Border baris
        doc.setDrawColor(203, 213, 225);
        doc.rect(margin, currentY, tableWidth, rowHeight, 'S');
        doc.line(margin + col1Width, currentY, margin + col1Width, currentY + rowHeight);

        // Teks Label
        doc.setFont('helvetica', 'bold');
        doc.setFontSize(10);
        doc.setTextColor(...COLORS.textDark);
        doc.text(item.label, margin + 5, currentY + 8);

        // Teks Value (Wrap if needed)
        doc.setFont('helvetica', 'normal');
        const splitText = doc.splitTextToSize(item.value || '-', col2Width - 10);
        doc.text(splitText, margin + col1Width + 5, currentY + 8);

        currentY += rowHeight;
      });

      // Footer Komitmen
      currentY += 15;
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.setTextColor(...COLORS.textDark);
      doc.text('KOMITMEN SAYA:', margin, currentY);

      currentY += 8;
      doc.setFont('helvetica', 'italic');
      doc.setFontSize(11);
      doc.setTextColor(71, 85, 105);
      const komitmen = '"Saya bertanggung jawab atas pertumbuhan saya sendiri. Setiap kemenangan kecil adalah langkah menuju perubahan besar."';
      const splitKomitmen = doc.splitTextToSize(komitmen, tableWidth);
      doc.text(splitKomitmen, margin, currentY);

      // Watermark / Branding
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(...COLORS.textLight);
      doc.text('Dicetak otomatis oleh Theselflearninghub App', 105, 285, { align: 'center' });

      doc.save(`Kontrak-Belajar-${formData.nama || 'User'}.pdf`);
    } catch (error) {
      console.error(error);
      alert('Terjadi kesalahan saat membuat PDF.');
    } finally {
      setIsGenerating(false);
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 font-sans selection:bg-amber-500/30">
      <Head>
        <title>Kontrak Belajar | Theselflearninghub</title>
      </Head>

      {/* Navigation */}
      <nav className="p-6">
        <Link href="/">
          <button className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
            <span className="text-xl">←</span> Kembali ke Beranda
          </button>
        </Link>
      </nav>

      <div className="max-w-xl mx-auto px-6 py-12">
        <header className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold tracking-widest uppercase mb-4"
          >
            Digital Accountability
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
          >
            Kontrak <span className="text-amber-500">Belajar</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg"
          >
            Tulis rencanamu, jaga fokusmu, dan raih kemenangan kecil setiap hari.
          </motion.p>
        </header>

        {/* Progress Bar */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                step >= i ? 'bg-amber-500' : 'bg-slate-800'
              }`}
            />
          ))}
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl">
                  <h2 className="text-xl font-bold text-white mb-6">Siapa namamu?</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Nama Lengkap</label>
                      <input
                        type="text"
                        name="nama"
                        value={formData.nama}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium"
                        placeholder="Ketik namamu di sini..."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-400 mb-2">Kelas</label>
                      <input
                        type="text"
                        name="kelas"
                        value={formData.kelas}
                        onChange={handleChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium"
                        placeholder="Contoh: 12 IPA 1"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onClick={nextStep}
                  disabled={!formData.nama || !formData.kelas}
                  className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 disabled:hover:bg-amber-500 text-slate-950 font-black py-5 rounded-2xl transition-all shadow-lg shadow-amber-500/20 active:scale-95"
                >
                  LANJUT KE RENCANA →
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl">
                  <h2 className="text-xl font-bold text-white mb-6">Apa targetmu hari ini?</h2>
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Rencana Aksi</label>
                    <textarea
                      name="target"
                      value={formData.target}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium resize-none"
                      placeholder="Apa yang ingin kamu selesaikan hari ini?"
                    />
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 bg-slate-800 text-white font-bold py-5 rounded-2xl hover:bg-slate-700 transition-all"
                  >
                    KEMBALI
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.target}
                    className="flex-[2] bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-black py-5 rounded-2xl transition-all"
                  >
                    SIAP JALANKAN →
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-4 italic">Fokus Phase</h2>
                    <div className="space-y-4">
                      <label className="flex items-center gap-4 p-5 bg-slate-900 rounded-2xl border border-slate-700 cursor-pointer group transition-all hover:border-amber-500/50">
                        <input
                          type="checkbox"
                          name="jauhkanHP"
                          checked={formData.jauhkanHP}
                          onChange={handleChange}
                          className="w-6 h-6 rounded accent-amber-500"
                        />
                        <div className="flex-1">
                          <p className="font-bold text-white group-hover:text-amber-500 transition-colors">Jauhkan Smartphone</p>
                          <p className="text-xs text-slate-500">Letakkan di ruangan lain untuk fokus maksimal.</p>
                        </div>
                        <span className="text-2xl">📱</span>
                      </label>

                      <label className="flex items-center gap-4 p-5 bg-slate-900 rounded-2xl border border-slate-700 cursor-pointer group transition-all hover:border-amber-500/50">
                        <input
                          type="checkbox"
                          name="pomodoro"
                          checked={formData.pomodoro}
                          onChange={handleChange}
                          className="w-6 h-6 rounded accent-amber-500"
                        />
                        <div className="flex-1">
                          <p className="font-bold text-white group-hover:text-amber-500 transition-colors">Teknik Pomodoro</p>
                          <p className="text-xs text-slate-500">25 Menit Belajar / 5 Menit Istirahat.</p>
                        </div>
                        <span className="text-2xl">⏳</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-white mb-4 italic">Inner Check</h2>
                    <div className="space-y-6">
                      <div>
                        <p className="text-sm font-medium text-slate-400 mb-3 text-center">Bagaimana Mood Kamu?</p>
                        <div className="flex justify-between gap-2">
                          {MOODS.map((m) => (
                            <button
                              key={m.label}
                              onClick={() => selectMood(m.label)}
                              className={`flex flex-col items-center flex-1 p-2 rounded-xl transition-all ${
                                formData.mood === m.label
                                  ? `${m.color} text-slate-950 scale-110 shadow-lg`
                                  : 'bg-slate-900 text-slate-500 hover:bg-slate-800'
                              }`}
                            >
                              <span className="text-xl mb-1">{m.emoji}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm font-medium text-slate-400 mb-3 text-center">Level Energi?</p>
                        <div className="grid grid-cols-2 gap-3">
                          {ENERGIES.map((e) => (
                            <button
                              key={e.label}
                              onClick={() => selectEnergy(e.label)}
                              className={`flex items-center gap-3 p-4 rounded-xl transition-all border ${
                                formData.energi === e.label
                                  ? `${e.color} border-white text-white`
                                  : 'bg-slate-900 border-slate-700 text-slate-500 hover:border-slate-500'
                              }`}
                            >
                              <span className="text-xl">{e.emoji}</span>
                              <span className="text-xs font-bold uppercase tracking-tighter">{e.label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 bg-slate-800 text-white font-bold py-5 rounded-2xl hover:bg-slate-700"
                  >
                    KEMBALI
                  </button>
                  <button
                    onClick={nextStep}
                    disabled={!formData.mood || !formData.energi}
                    className="flex-[2] bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-black py-5 rounded-2xl"
                  >
                    EVALUASI AKHIR →
                  </button>
                </div>
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 p-8 rounded-3xl space-y-6">
                  <h2 className="text-xl font-bold text-white mb-2 italic">Evaluation Phase</h2>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Hasil yang Dicapai</label>
                    <textarea
                      name="hasil"
                      value={formData.hasil}
                      onChange={handleChange}
                      rows={3}
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium resize-none"
                      placeholder="Apa saja yang berhasil kamu kerjakan?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-400 mb-2">Self Reward (Hadiahmu)</label>
                    <input
                      type="text"
                      name="hadiah"
                      value={formData.hadiah}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all font-medium"
                      placeholder="Sebutkan hadiah kecil untuk dirimu..."
                    />
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 bg-slate-800 text-white font-bold py-5 rounded-2xl hover:bg-slate-700"
                  >
                    KEMBALI
                  </button>
                  <button
                    onClick={handleDownloadPDF}
                    disabled={isGenerating || !formData.hasil || !formData.hadiah}
                    className="flex-[2] bg-green-500 hover:bg-green-400 disabled:opacity-50 text-slate-950 font-black py-5 rounded-2xl shadow-lg shadow-green-500/20 flex items-center justify-center gap-3"
                  >
                    {isGenerating ? (
                      'MENYIAPKAN PDF...'
                    ) : (
                      <>
                        <span>📥 DOWNLOAD HASIL PDF</span>
                      </>
                    )}
                  </button>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="w-full text-slate-500 hover:text-white text-sm font-bold transition-colors mt-4"
                >
                  ULANGI DARI AWAL
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <footer className="mt-20 text-center">
          <p className="text-slate-500 text-xs tracking-widest uppercase">
            © 2026 Theselflearninghub • Discipline is Freedom
          </p>
        </footer>
      </div>
    </div>
  );
}