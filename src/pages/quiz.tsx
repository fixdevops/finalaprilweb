import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "Dalam Eisenhower Matrix, tugas 'Penting tetapi Tidak Mendesak' masuk ke dalam Kuadran 2. Apa tindakan yang harus dilakukan?",
    options: ["Lakukan Sekarang", "Jadwalkan Waktunya", "Delegasikan ke Orang Lain", "Hapus dari Daftar"],
    answer: 1
  },
  {
    id: 2,
    question: "Apa yang menjadi musuh utama dari 'Deep Work' yang sering menipu kita seolah-olah sedang produktif?",
    options: ["Hard Work", "Shallow Work", "Team Work", "Smart Work"],
    answer: 1
  },
  {
    id: 3,
    question: "Teknik 'The Pause' dalam regulasi emosi bertujuan untuk...",
    options: ["Berhenti belajar selamanya", "Menghindari materi yang sulit", "Menenangkan saraf dan mengingat 'Big Why'", "Mencari hiburan di media sosial"],
    answer: 2
  },
  {
    id: 4,
    question: "Apa langkah terakhir dalam siklus Refleksi Kendiri yang efektif?",
    options: ["Menyalahkan diri sendiri", "Menyusun rencana perbaikan spesifik", "Melupakan kegagalan", "Berhenti berevaluasi"],
    answer: 1
  },
  {
    id: 5,
    question: "Cal Newport menyarankan 'Shutdown Ritual' di sore hari. Apa kegunaan utamanya?",
    options: ["Menambah jam kerja", "Membersihkan kantor", "Memberi sinyal otak untuk istirahat total", "Menyiapkan kopi untuk besok"],
    answer: 2
  },
  {
    id: 6,
    question: "Kuadran 3 dalam manajemen waktu seringkali berisi interupsi. Apa tindakan yang tepat?",
    options: ["Prioritaskan", "Delegasikan", "Jadwalkan", "Abaikan Selamanya"],
    answer: 1
  },
  {
    id: 7,
    question: "Resiliensi Kognitif mengajarkan kita untuk melihat kegagalan sebagai...",
    options: ["Tanda tidak berbakat", "Data dan umpan balik untuk perbaikan", "Nasib buruk", "Alasan untuk menyerah"],
    answer: 1
  },
  {
    id: 8,
    question: "Manakah filosofi Deep Work yang menjadwalkan blok waktu fokus tertentu setiap hari?",
    options: ["Monastic", "Bimodal", "Rhythmic", "Journalistic"],
    answer: 2
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [animatedScore, setAnimatedScore] = useState(0);

  // Efek animasi angka skor di akhir
  useEffect(() => {
    if (showResult && animatedScore < (score / questions.length) * 100) {
      const timer = setTimeout(() => setAnimatedScore(prev => prev + 1), 20);
      return () => clearTimeout(timer);
    }
  }, [showResult, animatedScore, score]);

  const handleAnswerClick = (index: number) => {
    setSelectedAnswer(index);
    if (index === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setSelectedAnswer(null);
      } else {
        setShowResult(true);
      }
    }, 500);
  };

  const getPerformanceMessage = () => {
    const finalScore = (score / questions.length) * 100;
    if (finalScore === 100) return { title: "LEGENDARY!", msg: "Anda adalah Master of Self-Management.", icon: "💎" };
    if (finalScore >= 75) return { title: "EXCELLENT!", msg: "Pemahaman Anda sangat mendalam.", icon: "🌟" };
    if (finalScore >= 50) return { title: "GOOD JOB!", msg: "Anda berada di jalur yang benar.", icon: "📈" };
    return { title: "KEEP LEARNING!", msg: "Mari tinjau kembali materinya.", icon: "📚" };
  };

  const performance = getPerformanceMessage();

  return (
    <div className="min-h-screen bg-slate-50 py-12 md:py-20 font-sans">
      <Head>
        <title>Quiz Mastery | The Self Learning Hub</title>
      </Head>

      <div className="max-w-2xl mx-auto px-4">
        {!showResult ? (
          <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-200 overflow-hidden transition-all">
            <div className="h-3 w-full bg-slate-100">
              <div 
                className="h-full bg-linear-to-r from-blue-500 to-indigo-600 transition-all duration-700 ease-out" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <div className="p-8 md:p-14">
              <div className="flex justify-between items-center mb-8">
                <span className="text-blue-600 font-black tracking-tighter text-lg uppercase">
                   Q.0{currentQuestion + 1}
                </span>
                <span className="text-slate-400 font-medium text-sm">
                  Mastery Progress: {Math.round(((currentQuestion) / questions.length) * 100)}%
                </span>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 leading-tight">
                {questions[currentQuestion].question}
              </h2>

              <div className="space-y-4">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-300 font-semibold text-lg
                      ${selectedAnswer === index 
                        ? 'border-blue-600 bg-blue-50 text-blue-700 scale-[1.02] shadow-lg' 
                        : 'border-slate-100 bg-slate-50 text-slate-600 hover:border-blue-200 hover:bg-white hover:shadow-md'}
                    `}
                  >
                    <div className="flex items-center">
                      <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center mr-4 text-sm shadow-sm">
                        {String.fromCharCode(65 + index)}
                      </span>
                      {option}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* HASIL AKHIR YANG MENARIK */
          <div className="bg-white rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] p-10 md:p-16 text-center border border-slate-100 animate-in fade-in zoom-in duration-700">
            <div className="text-6xl mb-6">{performance.icon}</div>
            <h2 className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">{performance.title}</h2>
            <p className="text-slate-500 text-xl mb-10">{performance.msg}</p>
            
            <div className="relative inline-block mb-12">
               <svg className="w-48 h-48 transform -rotate-90">
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-100" />
                  <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="12" fill="transparent" 
                    strokeDasharray={552.92}
                    strokeDashoffset={552.92 - (552.92 * animatedScore) / 100}
                    className="text-blue-600 transition-all duration-1000 ease-out" 
                    strokeLinecap="round"
                  />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black text-slate-900">{animatedScore}%</span>
                  <span className="text-slate-400 font-bold text-xs uppercase tracking-widest">Score</span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
               <div className="bg-green-50 p-4 rounded-3xl border border-green-100">
                  <p className="text-green-700 font-black text-2xl">{score}</p>
                  <p className="text-green-600 text-xs font-bold uppercase">Benar</p>
               </div>
               <div className="bg-red-50 p-4 rounded-3xl border border-red-100">
                  <p className="text-red-700 font-black text-2xl">{questions.length - score}</p>
                  <p className="text-red-600 text-xs font-bold uppercase">Salah</p>
               </div>
            </div>

            <div className="flex flex-col gap-4">
              <button 
                onClick={() => { setAnimatedScore(0); setSelectedAnswer(null); setShowResult(false); setCurrentQuestion(0); setScore(0); }}
                className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black hover:bg-blue-700 transition-all shadow-[0_10px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1"
              >
                COBA LAGI
              </button>
              <Link href="/pembelajaran" className="w-full py-5 bg-slate-100 text-slate-600 rounded-2xl font-black hover:bg-slate-200 transition-all">
                KEMBALI KE MATERI
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}