import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';

// Definisi Tipe Soal
type Question = {
  id: number;
  question: string;
  options: {
    label: string;
    text: string;
    type: 'visual' | 'auditory' | 'kinesthetic';
  }[];
};

const questions: Question[] = [
  // 1-6: A=V, B=A, C=K
  {
    id: 1,
    question: "Saya lebih mudah mengingat sesuatu jika…",
    options: [
      { label: "A", text: "Ada gambar atau diagram", type: "visual" },
      { label: "B", text: "Dijelaskan dengan suara", type: "auditory" },
      { label: "C", text: "Dicoba langsung", type: "kinesthetic" }
    ]
  },
  {
    id: 2,
    question: "Saat belajar, saya suka…",
    options: [
      { label: "A", text: "Membaca catatan atau buku", type: "visual" },
      { label: "B", text: "Mendengar penjelasan orang", type: "auditory" },
      { label: "C", text: "Praktek langsung", type: "kinesthetic" }
    ]
  },
  {
    id: 3,
    question: "Saya cepat paham jika…",
    options: [
      { label: "A", text: "Ada ilustrasi atau contoh visual", type: "visual" },
      { label: "B", text: "Dijelaskan panjang lebar", type: "auditory" },
      { label: "C", text: "Dicoba sendiri", type: "kinesthetic" }
    ]
  },
  {
    id: 4,
    question: "Cara belajar yang paling nyaman bagi saya…",
    options: [
      { label: "A", text: "Mengikuti petunjuk gambar atau diagram", type: "visual" },
      { label: "B", text: "Mendengar instruksi lisan", type: "auditory" },
      { label: "C", text: "Melakukan langsung", type: "kinesthetic" }
    ]
  },
  {
    id: 5,
    question: "Saya suka kegiatan belajar yang…",
    options: [
      { label: "A", text: "melihat contoh", type: "visual" },
      { label: "B", text: "Diskusi/cerita", type: "auditory" },
      { label: "C", text: "Mempraktekkan sendiri", type: "kinesthetic" }
    ]
  },
  {
    id: 6,
    question: "Saya lebih fokus ketika belajar…",
    options: [
      { label: "A", text: "Ada hal-hal visual yang bisa dilihat", type: "visual" },
      { label: "B", text: "Mendengar orang menjelaskan", type: "auditory" },
      { label: "C", text: "Bisa langsung melakukan", type: "kinesthetic" }
    ]
  },
  // 7-12: A=A, B=V, C=K (Note question 7 order: A=Suara, B=Gambar, C=Dicoba)
  {
    id: 7,
    question: "Saya mudah mengingat sesuatu jika…",
    options: [
      { label: "A", text: "Ada yang menjelaskan dengan suara", type: "auditory" },
      { label: "B", text: "Ada gambar/diagram", type: "visual" },
      { label: "C", text: "Dicoba sendiri", type: "kinesthetic" }
    ]
  },
  {
    id: 8,
    question: "Cara belajar saya yang paling nyaman…",
    options: [
      { label: "A", text: "Mendengar penjelasan panjang lebar", type: "auditory" },
      { label: "B", text: "Membaca catatan sendiri", type: "visual" },
      { label: "C", text: "Praktek langsung", type: "kinesthetic" }
    ]
  },
  {
    id: 9,
    question: "Saya suka belajar…",
    options: [
      { label: "A", text: "Mendengarkan cerita atau diskusi", type: "auditory" },
      { label: "B", text: "Melihat ilustrasi atau contoh", type: "visual" },
      { label: "C", text: "Melakukan langsung", type: "kinesthetic" }
    ]
  },
  {
    id: 10,
    question: "Saat menjawab pertanyaan, saya biasanya…",
    options: [
      { label: "A", text: "Menjawab panjang lebar dengan kata-kata", type: "auditory" },
      { label: "B", text: "Menunjukkan dengan gambar/diagram", type: "visual" },
      { label: "C", text: "Menunjukkan dengan gerakan/praktek", type: "kinesthetic" }
    ]
  },
  {
    id: 11,
    question: "Cara saya berkomunikasi belajar paling mudah…",
    options: [
      { label: "A", text: "Lewat telepon atau mendengar penjelasan", type: "auditory" },
      { label: "B", text: "Melihat ekspresi/gesture", type: "visual" },
      { label: "C", text: "Melakukan/praktek", type: "kinesthetic" }
    ]
  },
  {
    id: 12,
    question: "Saya lebih fokus jika…",
    options: [
      { label: "A", text: "Ada suara atau orang menjelaskan", type: "auditory" },
      { label: "B", text: "Ada gambar yang bisa dilihat", type: "visual" },
      { label: "C", text: "Bisa langsung mempraktekkan", type: "kinesthetic" }
    ]
  },
  // 13-18: A=K, B=V, C=A
  {
    id: 13,
    question: "Cara belajar yang paling saya sukai…",
    options: [
      { label: "A", text: "Melakukan/praktek langsung", type: "kinesthetic" },
      { label: "B", text: "Membaca atau melihat contoh", type: "visual" },
      { label: "C", text: "Mendengar orang menjelaskan", type: "auditory" }
    ]
  },
  {
    id: 14,
    question: "Saya mudah mengingat informasi jika…",
    options: [
      { label: "A", text: "Menulis berkali-kali", type: "kinesthetic" },
      { label: "B", text: "Melihat ilustrasi/gambar", type: "visual" },
      { label: "C", text: "Mendengar penjelasan", type: "auditory" }
    ]
  },
  {
    id: 15,
    question: "Saat belajar, saya tidak suka…",
    options: [
      { label: "A", text: "Duduk diam terlalu lama", type: "kinesthetic" }, 
      { label: "B", text: "Mendengar penjelasan panjang", type: "visual" }, 
      { label: "C", text: "Hanya melihat diagram/gambar", type: "auditory" }
    ]
  },
  {
    id: 16,
    question: "Saya paling cepat mengerti jika…",
    options: [
      { label: "A", text: "Bisa mempraktikkan langsung", type: "kinesthetic" },
      { label: "B", text: "Ada contoh visual", type: "visual" },
      { label: "C", text: "Mendengar orang menjelaskan", type: "auditory" }
    ]
  },
  {
    id: 17,
    question: "Saat menjawab pertanyaan, saya biasanya…",
    options: [
      { label: "A", text: "Menggunakan gerakan tubuh atau praktik", type: "kinesthetic" },
      { label: "B", text: "Menulis atau menunjuk diagram", type: "visual" },
      { label: "C", text: "Menjawab dengan kata-kata panjang", type: "auditory" }
    ]
  },
  {
    id: 18,
    question: "Saya paling senang belajar dengan…",
    options: [
      { label: "A", text: "Aktivitas praktik atau simulasi", type: "kinesthetic" },
      { label: "B", text: "Melihat contoh/ilustrasi", type: "visual" },
      { label: "C", text: "Mendengar penjelasan", type: "auditory" }
    ]
  }
];

export default function QuizApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scores, setScores] = useState<{ visual: number, auditory: number, kinesthetic: number }>({ 
    visual: 0, 
    auditory: 0, 
    kinesthetic: 0 
  });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (type: 'visual' | 'auditory' | 'kinesthetic') => {
    const newScores = { ...scores, [type]: scores[type] + 1 };
    setScores(newScores);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setScores({ visual: 0, auditory: 0, kinesthetic: 0 });
    setCurrentIndex(0);
    setShowResult(false);
  };

  const getDominantStyle = () => {
    // Sort descending by score
    const sorted = Object.entries(scores).sort(([,a], [,b]) => b - a);
    return sorted[0]; // [style, score]
  };

  const totalQuestions = questions.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;
  const [dominantStyle, dominantScore] = getDominantStyle();

  const colors = {
    visual: 'bg-blue-500',
    auditory: 'bg-emerald-500',
    kinesthetic: 'bg-orange-500'
  };
  
  const textColors = {
    visual: 'text-blue-600',
    auditory: 'text-emerald-600',
    kinesthetic: 'text-orange-600'
  };

  const borderColors = {
    visual: 'border-blue-200',
    auditory: 'border-emerald-200',
    kinesthetic: 'border-orange-200'
  };
  
  const bgColors = {
     visual: 'bg-blue-50',
     auditory: 'bg-emerald-50',
     kinesthetic: 'bg-orange-50'
  };

  const descriptions: Record<string, string> = {
    visual: "Kamu adalah tipe Visual! Kamu memproses informasi paling baik melalui penglihatan. Gambar, diagram, grafik, dan membaca buku adalah cara terbaikmu untuk belajar. Kamu mungkin lebih suka melihat instruksi tertulis daripada mendengarnya.",
    auditory: "Kamu adalah tipe Auditory! Kamu belajar paling efektif dengan mendengar. Diskusi kelompok, mendengarkan ceramah, atau membaca dengan suara keras sangat membantumu. Kamu peka terhadap nada suara dan ritme bicara.",
    kinesthetic: "Kamu adalah tipe Kinestetik! Kamu belajar melalui pengalaman dan aktivitas fisik. Kamu perlu bergerak, menyentuh, atau mempraktikkan langsung apa yang sedang dipelajari. Duduk diam terlalu lama mungkin sulit bagimu."
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans pattern-grid-lg">
      <Head>
        <title>Kuis Gaya Belajar</title>
      </Head>

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 flex flex-col relative z-10">
        {!showResult ? (
          <div className="p-8 md:p-12">
            {/* Progress Bar */}
            <div className="mb-10">
              <div className="flex justify-between items-end mb-3">
                <span className="text-gray-500 font-medium tracking-wide text-sm">PERTANYAAN {currentIndex + 1}/{totalQuestions}</span>
                <span className="text-indigo-600 font-bold text-sm">{Math.round(progress)}% SELESAI</span>
              </div>
              <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full shadow-lg"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Question Card */}
            <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="min-h-[300px] flex flex-col justify-center"
            >
              <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-8 leading-tight">
                {questions[currentIndex].question}
              </h2>

              <div className="space-y-4">
                {questions[currentIndex].options.map((option, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.02, backgroundColor: "#F8FAFC" }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.type)}
                    className="w-full text-left p-5 rounded-2xl border-2 border-slate-100 hover:border-indigo-500 hover:shadow-md transition-all duration-200 group flex items-center gap-5 bg-white"
                  >
                    <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 font-bold text-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                      {option.label}
                    </span>
                    <span className="text-gray-700 font-medium text-lg group-hover:text-gray-900">
                      {option.text}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          <div className="p-8 md:p-12 text-center bg-white">
             <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, type: "spring" }}
            >
              <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full font-bold text-sm mb-6 uppercase tracking-wider">
                Hasil Analisis
              </div>
              
              <h2 className="text-4xl font-extrabold text-gray-900 mb-2">Gaya Belajarmu Dominan</h2>
              
              <div className={`mt-8 mb-8 p-8 ${bgColors[dominantStyle as keyof typeof bgColors]} rounded-3xl border-2 ${borderColors[dominantStyle as keyof typeof borderColors]} shadow-inner`}>
                <h3 className={`text-5xl font-black mb-4 capitalize tracking-tight ${textColors[dominantStyle as keyof typeof textColors]}`}>
                  {dominantStyle}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto">
                  {descriptions[dominantStyle]}
                </p>
              </div>

              {/* Chart */}
              <div className="max-w-xl mx-auto space-y-6 mb-12">
                <h4 className="text-left font-bold text-gray-900 text-lg mb-4">Detail Skor</h4>
                {['visual', 'auditory', 'kinesthetic'].map((type, i) => {
                  const score = scores[type as keyof typeof scores];
                  // Calculate absolute percentage of total questions (18) max
                  // Or relative to the sum of scores (which is also 18)
                  const barWidth = (score / 18) * 100;
                  
                  return (
                    <motion.div 
                      key={type} 
                      className="bg-slate-50 rounded-2xl p-5 border border-slate-100"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <div className="flex justify-between mb-3 items-center">
                        <span className="font-bold text-gray-700 capitalize flex items-center gap-3 text-lg">
                           <span className={`w-4 h-4 rounded-full shadow-sm ${colors[type as keyof typeof colors]}`}></span>
                           {type}
                        </span>
                        <span className="font-bold text-gray-900 bg-white px-3 py-1 rounded-lg shadow-sm border border-gray-100">{score} Poin</span>
                      </div>
                      <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden shadow-inner">
                        <motion.div 
                          className={`h-full ${colors[type as keyof typeof colors]}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${barWidth}%` }}
                          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex gap-4 justify-center">
                <button 
                  onClick={resetQuiz}
                  className="px-8 py-4 bg-white text-gray-700 font-bold rounded-2xl border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all"
                >
                  Ulangi Kuis
                </button>
                <a 
                  href="/pembelajaran"
                  className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl shadow-xl hover:bg-indigo-700 hover:shadow-2xl hover:-translate-y-1 transition-all"
                >
                  Kembali ke Materi
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}