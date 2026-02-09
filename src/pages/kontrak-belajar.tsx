import React, { useState, useRef, useEffect } from 'react';
import Head from 'next/head';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const questions = [
  { id: 1, q: "Saya lebih mudah mengingat sesuatu jika…", options: [{ t: "A", text: "Ada gambar atau diagram", v: "visual" }, { t: "B", text: "Dijelaskan dengan suara", v: "auditori" }, { t: "C", text: "Dicoba langsung", v: "kinestetik" }] },
  { id: 2, q: "Saat belajar, saya suka…", options: [{ t: "A", text: "Membaca catatan atau buku", v: "visual" }, { t: "B", text: "Mendengar penjelasan orang", v: "auditori" }, { t: "C", text: "Praktek langsung", v: "kinestetik" }] },
  { id: 3, q: "Saya cepat paham jika…", options: [{ t: "A", text: "Ada ilustrasi atau contoh visual", v: "visual" }, { t: "B", text: "Dijelaskan panjang lebar", v: "auditori" }, { t: "C", text: "Dicoba sendiri", v: "kinestetik" }] },
  // Tambahkan soal lainnya di sini
];

export default function QuizLearningStyle() {
  const resultRef = useRef<HTMLDivElement>(null);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Mencegah error Hydration Next.js
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSelect = (qId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [qId]: value }));
  };

  const calculateResult = () => {
    const counts = { visual: 0, auditori: 0, kinestetik: 0 };
    Object.values(answers).forEach((v) => {
      if (v === 'visual') counts.visual++;
      if (v === 'auditori') counts.auditori++;
      if (v === 'kinestetik') counts.kinestetik++;
    });
    return [
      { name: 'Visual', value: counts.visual, color: '#3b82f6' },
      { name: 'Auditori', value: counts.auditori, color: '#10b981' },
      { name: 'Kinestetik', value: counts.kinestetik, color: '#f59e0b' },
    ];
  };

  const dataResult = calculateResult();
  const dominant = dataResult.reduce((prev, current) => (prev.value > current.value ? prev : current));

  const handleDownload = async () => {
    if (!resultRef.current) return;
    setIsGenerating(true);
    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const canvas = await html2canvas(resultRef.current, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Hasil-Gaya-Belajar.pdf`);
    } catch (error) {
      console.error(error);
      alert("Gagal mengunduh PDF. Pastikan library terinstall.");
    } finally {
      setIsGenerating(false);
    }
  };

  // Jika belum mounted, jangan render chart dulu untuk hindari error
  if (!mounted) return <div className="p-8 text-center">Memuat...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8 font-sans">
      <Head>
        <title>Tes Gaya Belajar</title>
      </Head>

      <div className="max-w-3xl mx-auto">
        {!showResult ? (
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl border border-gray-100">
            <h1 className="text-2xl md:text-3xl font-black text-center text-blue-900 mb-8">🎯 Cek Gaya Belajarmu</h1>
            
            {questions.map((item) => (
              <div key={item.id} className="mb-8 border-b border-gray-50 pb-6">
                <p className="font-bold text-black mb-4">{item.id}. {item.q}</p>
                <div className="grid gap-3">
                  {item.options.map((opt) => (
                    <label key={opt.t} className="flex items-center space-x-3 p-4 rounded-xl border-2 border-gray-100 hover:border-blue-400 cursor-pointer transition-all bg-white">
                      <input 
                        type="radio" 
                        name={`q-${item.id}`} 
                        checked={answers[item.id] === opt.v}
                        onChange={() => handleSelect(item.id, opt.v)}
                        className="w-5 h-5 text-blue-600"
                      />
                      <span className="font-medium text-black">{opt.text}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button 
              onClick={() => setShowResult(true)}
              disabled={Object.keys(answers).length < questions.length}
              className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg shadow-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              LIHAT HASIL & DOWNLOAD
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Area PDF */}
            <div ref={resultRef} className="bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 text-black">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-black text-blue-900">LAPORAN GAYA BELAJAR</h2>
                <div className="h-1 w-20 bg-blue-500 mx-auto mt-2"></div>
              </div>

              <div className="h-64 w-full mb-8" style={{ minHeight: '250px' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={dataResult} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                      {dataResult.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="bg-blue-50 p-6 rounded-2xl border-2 border-blue-100 mb-6 text-center text-black">
                <p className="text-lg font-bold">Gaya Belajar Dominan Anda:</p>
                <h3 className="text-4xl font-black text-blue-600 uppercase mt-2">{dominant.name}</h3>
              </div>

              <div className="grid grid-cols-1 gap-4">
                 <h4 className="font-black text-lg border-b pb-2">Rincian Skor:</h4>
                 {dataResult.map(res => (
                   <div key={res.name} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg border">
                     <span className="font-bold">{res.name}</span>
                     <span className="text-blue-600 font-black">{res.value} Poin</span>
                   </div>
                 ))}
              </div>
              
              <p className="mt-8 text-[10px] text-center text-gray-400">Dicetak otomatis oleh Theselflearninghub pada {new Date().toLocaleDateString()}</p>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={handleDownload}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-emerald-500 to-green-600 text-white py-4 rounded-2xl font-black text-lg shadow-xl flex items-center justify-center gap-3 active:scale-95 transition-transform"
              >
                {isGenerating ? 'MENYIAPKAN PDF...' : '📥 UNDUH HASIL PDF'}
              </button>
              <button onClick={() => setShowResult(false)} className="text-blue-600 font-bold underline text-center">Ulangi Tes</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}