import React, { useRef, useState } from 'react';
import Head from 'next/head';

// Import dynamic only, do not import static

export default function LearningContract() {
  const contractRef = useRef<HTMLDivElement>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // States for user input (to ensure reactivity and clear value binding for html2canvas)
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
      // Dynamically import libraries to avoid SSR issues and handle missing deps gracefully
      const html2canvas = (await import('html2canvas')).default;
      const { jsPDF } = await import('jspdf');

      const element = contractRef.current;
      
      // html2canvas returns a promise
      // Scale 4 for high quality (clean text)
      const canvas = await html2canvas(element, { 
        scale: 4, 
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        windowWidth: element.scrollWidth,
        windowHeight: element.scrollHeight
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0); // 1.0 quality
      
      // A4 Landscape: 297mm x 210mm
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const pageWidth = 297;
      const pageHeight = 210;
      
      const canvasRatio = canvas.width / canvas.height;
      const pageRatio = pageWidth / pageHeight;
      
      let finalWidth = pageWidth;
      let finalHeight = pageHeight;
      let x = 0;
      let y = 0;

      // Logic to fit image within the page while maintaining aspect ratio
      if (canvasRatio > pageRatio) {
        // Image is wider than page (relative to aspect ratio) -> Fit to Width
        finalWidth = pageWidth;
        finalHeight = pageWidth / canvasRatio;
        y = (pageHeight - finalHeight) / 2; // Center vertically
      } else {
        // Image is taller than page -> Fit to Height
        finalHeight = pageHeight;
        finalWidth = pageHeight * canvasRatio;
        x = (pageWidth - finalWidth) / 2; // Center horizontally
      }
      
      pdf.addImage(imgData, 'PNG', x, y, finalWidth, finalHeight);
      pdf.save(`kontrak-belajar-${new Date().toISOString().split('T')[0]}.pdf`);
      
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Gagal mengunduh PDF. Pastikan koneksi internet stabil jika memuat library eksternal, atau coba refresh halaman.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-indigo-50/30 p-8 font-sans">
      <Head>
        <title>Kontrak Belajar - Self Management</title>
      </Head>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-sm">
            Yuk, Mulai Atur Diri Sendiri (Self-Management)!
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Belajar itu butuh strategi! Dengan menguasai <strong>Self-Management</strong>, kamu bisa mencapai tujuan belajarmu lebih efektif. 
            Ada 3 fase penting: <span className="text-blue-600 font-bold">Perencanaan</span>, <span className="text-green-600 font-bold">Pelaksanaan</span>, dan <span className="text-yellow-600 font-bold">Evaluasi</span>. 
            Mari kita coba!
          </p>
        </div>

        {/* Contract Area to be Captured */}
        <div className="flex justify-center mb-12">
          {/* We must use explicit colors to avoid html2canvas issues with Tailwind 4 modern color syntax (oklch/lab) */}
          <div 
            ref={contractRef} 
            className="p-12 rounded-[3rem] shadow-2xl w-full max-w-5xl relative overflow-hidden"
            style={{ backgroundColor: '#ffffff', borderColor: '#f3f4f6', borderWidth: '1px' }}
          >
             {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-2" style={{ background: 'linear-gradient(to right, #60a5fa, #4ade80, #facc15)' }}></div>
            
            <h2 
              className="text-3xl font-black text-center mb-10 py-4 px-8 rounded-full inline-block relative left-1/2 transform -translate-x-1/2 shadow-sm border"
              style={{ backgroundColor: '#eff6ff', color: '#1e3a8a', borderColor: '#dbeafe' }}
            >
              📝 Kontrak Belajar Pribadiku Hari Ini!
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Planning Card */}
              <div 
                className="rounded-3xl p-6 border-2 shadow-lg flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: '#eff6ff', borderColor: '#bfdbfe' }}
              >
                <div 
                  className="py-3 px-6 rounded-2xl mb-6 text-center shadow-md"
                  style={{ backgroundColor: '#3b82f6', color: '#ffffff' }}
                >
                  <h3 className="font-bold text-lg uppercase tracking-wider">1. RENCANAKAN AKSI!</h3>
                  <p className="text-sm font-medium" style={{ color: '#dbeafe' }}>(Planning Phase)</p>
                </div>
                
                <div className="space-y-4 flex-grow">
                  <div>
                    <label className="block font-bold mb-2 ml-1" style={{ color: '#1e40af' }}>Targetku Hari Ini:</label>
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Contoh: Selesaiin Bab 3 Fisika" 
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        className="w-full p-4 rounded-xl border-2 focus:ring-4 outline-none transition-all font-medium"
                        style={{ 
                          backgroundColor: '#ffffff', 
                          color: '#374151', 
                          borderColor: '#bfdbfe',
                          // placeholder color trick isn't easily inlineable, but text color is dark gray
                        }}
                      />
                      {target && <span className="absolute right-4 top-4 text-xl font-bold" style={{ color: '#3b82f6' }}>✓</span>}
                    </div>
                  </div>
                  <p className="text-sm italic font-medium text-center mt-2" style={{ color: '#2563eb' }}>
                    ✨ Tulis 1 hal paling penting!
                  </p>
                </div>
              </div>

              {/* Monitoring Card */}
              <div 
                className="rounded-3xl p-6 border-2 shadow-lg flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: '#f0fdf4', borderColor: '#bbf7d0' }}
              >
                 <div 
                   className="py-3 px-6 rounded-2xl mb-6 text-center shadow-md"
                   style={{ backgroundColor: '#22c55e', color: '#ffffff' }}
                 >
                  <h3 className="font-bold text-lg uppercase tracking-wider">2. FOKUS & JALANKAN!</h3>
                  <p className="text-sm font-medium" style={{ color: '#dcfce7' }}>(Monitoring Phase)</p>
                </div>

                <div className="space-y-5 flex-grow px-2">
                  <label 
                    className="flex items-center space-x-4 cursor-pointer group p-3 rounded-xl border transition-colors"
                    style={{ backgroundColor: '#ffffff', borderColor: '#dcfce7' }}
                  >
                    <input 
                      type="checkbox" 
                      checked={checks.hp}
                      onChange={(e) => setChecks({...checks, hp: e.target.checked})}
                      className="w-6 h-6 rounded-lg border-2 focus:ring-offset-0"
                      style={{ color: '#22c55e', borderColor: '#86efac' }}
                    />
                    <span className="font-bold transition-colors" style={{ color: '#374151' }}>📵 Jauhkan HP</span>
                  </label>
                  
                  <label 
                    className="flex items-center space-x-4 cursor-pointer group p-3 rounded-xl border transition-colors"
                    style={{ backgroundColor: '#ffffff', borderColor: '#dcfce7' }}
                  >
                    <input 
                      type="checkbox" 
                      checked={checks.pomodoro}
                      onChange={(e) => setChecks({...checks, pomodoro: e.target.checked})}
                      className="w-6 h-6 rounded-lg border-2 focus:ring-offset-0"
                      style={{ color: '#22c55e', borderColor: '#86efac' }}
                    />
                    <span className="font-bold transition-colors" style={{ color: '#374151' }}>⏱️ Teknik Pomodoro (25:5)</span>
                  </label>

                  <label 
                    className="flex items-center space-x-4 cursor-pointer group p-3 rounded-xl border transition-colors"
                    style={{ backgroundColor: '#ffffff', borderColor: '#dcfce7' }}
                  >
                    <input 
                      type="checkbox" 
                      checked={checks.mood}
                      onChange={(e) => setChecks({...checks, mood: e.target.checked})}
                      className="w-6 h-6 rounded-lg border-2 focus:ring-offset-0"
                      style={{ color: '#22c55e', borderColor: '#86efac' }}
                    />
                    <span className="font-bold transition-colors" style={{ color: '#374151' }}>Check Mood & Energi 😊</span>
                  </label>
                </div>
              </div>

              {/* Evaluation Card */}
              <div 
                className="rounded-3xl p-6 border-2 shadow-lg flex flex-col h-full transform transition hover:-translate-y-1 hover:shadow-xl"
                style={{ backgroundColor: '#fffbeb', borderColor: '#fde68a' }}
              >
                 <div 
                   className="py-3 px-6 rounded-2xl mb-6 text-center shadow-md"
                   style={{ backgroundColor: '#fbbf24', color: '#ffffff' }}
                 >
                  <h3 className="font-bold text-lg uppercase tracking-wider">3. CEK & RAYAKAN!</h3>
                  <p className="text-sm font-medium" style={{ color: '#fef3c7' }}>(Evaluation Phase)</p>
                </div>

                <div className="space-y-4 flex-grow">
                  <div>
                    <label className="block font-bold mb-2 ml-1" style={{ color: '#92400e' }}>Hasil & Hadiah:</label>
                    <textarea 
                      placeholder="Contoh: Target tercapai! Nonton 1 eps anime!" 
                      rows={2}
                      value={result}
                      onChange={(e) => setResult(e.target.value)}
                      className="w-full p-3 rounded-xl border-2 outline-none transition-all resize-none font-medium"
                      style={{ backgroundColor: '#ffffff', color: '#374151', borderColor: '#fde68a' }}
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-2 ml-1" style={{ color: '#92400e' }}>Self-Rewardku: 🎁</label>
                    <textarea 
                      placeholder="Kalau beres, kasih hadiah ke diri sendiri!" 
                      rows={2}
                      value={reward}
                      onChange={(e) => setReward(e.target.value)}
                      className="w-full p-3 rounded-xl border-2 outline-none transition-all resize-none font-medium"
                      style={{ backgroundColor: '#ffffff', color: '#374151', borderColor: '#fde68a' }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center text-sm font-medium" style={{ color: '#9ca3af' }}>
              © 2026 Theselflearninghub. Keep Growing!
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pb-12">
          <button 
            onClick={handleDownload}
            disabled={isGenerating}
            className={`
              px-10 py-5 rounded-full font-black text-lg shadow-xl transform transition-all 
              text-white hover:scale-105 active:scale-95
              flex items-center justify-center gap-3 mx-auto
              ${isGenerating ? 'opacity-75 cursor-wait' : ''}
            `}
            style={{ 
              background: 'linear-gradient(to right, #facc15, #f59e0b)',
            }}
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                MEMPROSES PDF...
              </>
            ) : (
              <>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                SIMPAN & UNDUH JURNAL BELAJAR
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
