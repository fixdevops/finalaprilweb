import React, { useRef, useState } from 'react';
import Head from 'next/head';

export default function LearningContract() {
  const contractRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const [target, setTarget] = useState('');
  const [result, setResult] = useState('');
  const [reward, setReward] = useState('');
  const [checks, setChecks] = useState({
    hp: false,
    pomodoro: false,
    mood: false
  });

  const handleDownload = async () => {
    if (!contractRef.current) return;
    setIsGenerating(true);

    try {
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const element = contractRef.current;
      
      const canvas = await html2canvas(element, { 
        scale: 3, // Skala 3 cukup untuk HP agar tidak crash/terlalu berat
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const pageWidth = 297;
      const pageHeight = 210;
      const canvasRatio = canvas.width / canvas.height;
      
      let finalWidth = pageWidth;
      let finalHeight = pageWidth / canvasRatio;
      let x = 0;
      let y = (pageHeight - finalHeight) / 2;

      pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
      pdf.save(`kontrak-belajar-${new Date().toISOString().split('T')[0]}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Gagal mengunduh PDF.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50/30 p-4 md:p-8 font-sans">
      <Head>
        <title>Kontrak Belajar - Self Management</title>
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-2xl md:text-5xl font-extrabold text-blue-900 mb-4 md:mb-6 leading-tight">
            Yuk, Mulai Atur Diri Sendiri!
          </h1>
          <p className="text-sm md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed px-2">
            Belajar itu butuh strategi! Dengan menguasai <strong>Self-Management</strong>, kamu bisa mencapai tujuan belajarmu lebih efektif. 
          </p>
        </div>

        {/* Contract Area */}
        <div className="flex justify-center mb-8 md:mb-12 overflow-x-hidden">
          <div 
            ref={contractRef} 
            className="p-6 md:p-12 rounded-[1.5rem] md:rounded-[3rem] shadow-2xl w-full max-w-5xl relative overflow-hidden"
            style={{ backgroundColor: '#ffffff', borderColor: '#f3f4f6', borderWidth: '1px' }}
          >
            {/* Gradient Top Line */}
            <div className="absolute top-0 left-0 w-full h-2" style={{ background: 'linear-gradient(to right, #60a5fa, #4ade80, #facc15)' }}></div>
            
            <h2 
              className="text-lg md:text-3xl font-black text-center mb-8 py-3 px-6 rounded-full block md:inline-block md:relative md:left-1/2 md:transform md:-translate-x-1/2 shadow-sm border"
              style={{ backgroundColor: '#eff6ff', color: '#1e3a8a', borderColor: '#dbeafe' }}
            >
              📝 Kontrak Belajar Hari Ini!
            </h2>

            {/* Grid yang Responsif: 1 kolom di HP, 3 kolom di Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              
              {/* Card 1: Planning */}
              <div className="rounded-2xl md:rounded-3xl p-5 md:p-6 border-2 shadow-lg flex flex-col" style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }}>
                <div className="py-2 md:py-3 px-4 rounded-xl mb-4 text-center shadow-md" style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}>
                  <h3 className="font-bold text-sm md:text-lg uppercase">1. RENCANAKAN!</h3>
                </div>
                <div className="space-y-4">
                  <label className="block text-sm font-bold" style={{ color: '#1e40af' }}>Targetku:</label>
                  <input 
                    type="text" 
                    placeholder="Contoh: Bab 3 Fisika" 
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                    className="w-full p-3 rounded-lg border-2 outline-none text-sm md:text-base"
                    style={{ borderColor: '#bfdbfe' }}
                  />
                </div>
              </div>

              {/* Card 2: Monitoring */}
              <div className="rounded-2xl md:rounded-3xl p-5 md:p-6 border-2 shadow-lg flex flex-col" style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}>
                <div className="py-2 md:py-3 px-4 rounded-xl mb-4 text-center shadow-md" style={{ backgroundColor: '#22c55e', color: '#ffffff' }}>
                  <h3 className="font-bold text-sm md:text-lg uppercase">2. FOKUS!</h3>
                </div>
                <div className="space-y-3">
                  {['hp', 'pomodoro', 'mood'].map((key) => (
                    <label key={key} className="flex items-center space-x-3 p-2 rounded-lg bg-white border border-green-100 cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={checks[key as keyof typeof checks]}
                        onChange={(e) => setChecks({...checks, [key]: e.target.checked})}
                        className="w-5 h-5 rounded"
                      />
                      <span className="text-xs md:text-sm font-bold text-gray-700 capitalize">
                        {key === 'hp' ? '📵 Jauhkan HP' : key === 'pomodoro' ? '⏱️ Pomodoro' : '😊 Check Mood'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Card 3: Evaluation */}
              <div className="rounded-2xl md:rounded-3xl p-5 md:p-6 border-2 shadow-lg flex flex-col" style={{ backgroundColor: '#fffbeb', borderColor: '#fde68a' }}>
                <div className="py-2 md:py-3 px-4 rounded-xl mb-4 text-center shadow-md" style={{ backgroundColor: '#fbbf24', color: '#ffffff' }}>
                  <h3 className="font-bold text-sm md:text-lg uppercase">3. CEK & RAYAKAN!</h3>
                </div>
                <div className="space-y-3">
                  <textarea 
                    placeholder="Hasil..." 
                    rows={2}
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    className="w-full p-2 rounded-lg border-2 text-xs md:text-sm resize-none"
                    style={{ borderColor: '#fde68a' }}
                  />
                  <textarea 
                    placeholder="Hadiah..." 
                    rows={2}
                    value={reward}
                    onChange={(e) => setReward(e.target.value)}
                    className="w-full p-2 rounded-lg border-2 text-xs md:text-sm resize-none"
                    style={{ borderColor: '#fde68a' }}
                  />
                </div>
              </div>

            </div>

            <div className="mt-8 text-center text-[10px] md:text-sm font-medium text-gray-400">
              © 2026 Theselflearninghub. Keep Growing!
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pb-12 px-4">
          <button 
            onClick={handleDownload}
            disabled={isGenerating}
            className="w-full md:w-auto px-8 py-4 rounded-full font-black text-sm md:text-lg shadow-xl text-white flex items-center justify-center gap-3 mx-auto transition-transform active:scale-95"
            style={{ background: 'linear-gradient(to right, #facc15, #f59e0b)' }}
          >
            {isGenerating ? 'MEMPROSES...' : 'SIMPAN & UNDUH PDF'}
          </button>
        </div>
      </div>
    </div>
  );
}