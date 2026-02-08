import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

const questions = [
  {
    id: 1,
    question: "Saat memiliki tugas sekolah dan ingin bermain game, saya biasanya …",
    options: [
      "Bermain game terlebih dahulu sebagai pemanasan.",
      "Mengerjakan tugas sampai selesai baru bermain sebagai reward.",
      "Mengerjakan setengah tugas, lalu bermain sebentar.",
      "Mengabaikan tugas dan fokus mengejar rank."
    ],
    answer: 1
  },
  {
    id: 2,
    question: "Apa yang paling menggambarkan perasaanmu saat tidak bisa bermain game seharian?",
    options: [
      "Merasa sangat gelisah, marah, dan tidak bisa fokus pada hal lain.",
      "Merasa bosan sebentar tapi bisa mencari aktivitas lain.",
      "Biasa saja dan menikmati waktu istirahat atau hobi lain.",
      "Merasa dunia kiamat dan terus memikirkan game."
    ],
    answer: 2
  },
  {
    id: 3,
    question: "Pernahkah kamu berbohong kepada orang tua atau teman terkait durasi bermain gamemu?",
    options: [
      "Tidak pernah, saya jujur dengan waktu yang saya gunakan.",
      "Pernah, beberapa kali agar tidak dimarahi.",
      "Sering, agar bisa terus bermain tanpa gangguan.",
      "Selalu, karena mereka tidak akan mengerti."
    ],
    answer: 0
  },
  {
    id: 4,
    question: "Manakah prinsip 'Self-Control' yang paling efektif menurutmu?",
    options: [
      "Bermain sampai puas baru belajar.",
      "Menaruh gadget di ruangan lain saat sedang belajar.",
      "Main game sambil zoom meeting sekolah.",
      "Menunggu sampai ngantuk berat baru tidur."
    ],
    answer: 1
  },
  {
    id: 5,
    question: "Apa tindakanmu saat orang tua mengingatkan untuk berhenti karena sudah larut malam?",
    options: [
      "Marah-marah dan tetap melanjutkan game.",
      "Berhenti segera dan bersiap untuk istirahat.",
      "Bilang '5 menit lagi' berkali-kali sampai berjam-jam.",
      "Sembunyi di balik selimut untuk tetap main."
    ],
    answer: 1
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
    }, 800);
  };

  const getPerformanceMessage = () => {
    const finalScore = (score / questions.length) * 100;
    if (finalScore === 100) return { 
      title: "SEMPURNA!", 
      msg: "Kamu memiliki kendali diri yang luar biasa! 🏆", 
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    };
    if (finalScore >= 75) return { 
      title: "SANGAT BAIK!", 
      msg: "Kamu sangat sadar akan batasan dirimu. Pertahankan! 🔥", 
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    };
    if (finalScore >= 50) return { 
      title: "CUKUP BAIK!", 
      msg: "Kamu sudah di jalur yang benar, tetaplah konsisten. ⚖️", 
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    };
    return { 
      title: "PERLU PERBAIKAN", 
      msg: "Hati-hati, kontrol dirimu mulai melemah. Yuk belajar lagi! ⚠️", 
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    };
  };

  if (!mounted) return null;

  const performance = getPerformanceMessage();
  const percentage = Math.round((score / questions.length) * 100);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <Head>
        <title>Kuis BK: Self-Control - DiaWeb</title>
      </Head>

      <div className="max-w-3xl mx-auto">
        {!showResult ? (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100">
              <div 
                className="h-full bg-blue-600 transition-all duration-500"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>

            <div className="p-8 md:p-12">
              {/* Question Counter */}
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center font-bold">
                    {currentQuestion + 1}
                  </span>
                  <span className="text-gray-500 font-medium text-sm">
                    dari {questions.length} pertanyaan
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                  {Math.round(((currentQuestion) / questions.length) * 100)}% Selesai
                </span>
              </div>

              {/* Question */}
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10 leading-tight">
                {questions[currentQuestion].question}
              </h2>

              {/* Options */}
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerClick(index)}
                    disabled={selectedAnswer !== null}
                    className={`w-full text-left p-5 rounded-2xl border-2 transition-all duration-300 flex items-center gap-4 group
                      ${selectedAnswer === index 
                        ? index === questions[currentQuestion].answer
                          ? 'border-green-500 bg-green-50 text-green-900'
                          : 'border-red-500 bg-red-50 text-red-900'
                        : 'border-gray-200 bg-white text-gray-700 hover:border-blue-300 hover:bg-blue-50'}
                      ${selectedAnswer !== null && index === questions[currentQuestion].answer
                        ? 'border-green-500 bg-green-50'
                        : ''}
                    `}
                  >
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors
                      ${selectedAnswer === index 
                        ? index === questions[currentQuestion].answer
                          ? 'bg-green-500 text-white'
                          : 'bg-red-500 text-white'
                        : 'bg-gray-100 text-gray-500 group-hover:bg-blue-100 group-hover:text-blue-600'}
                      ${selectedAnswer !== null && index === questions[currentQuestion].answer
                        ? 'bg-green-500 text-white'
                        : ''}
                    `}>
                      {String.fromCharCode(65 + index)}
                    </div>
                    <span className="font-medium flex-1">{option}</span>
                    {selectedAnswer !== null && index === questions[currentQuestion].answer && (
                      <span className="text-green-500 font-bold">✓</span>
                    )}
                    {selectedAnswer === index && index !== questions[currentQuestion].answer && (
                      <span className="text-red-500 font-bold">✗</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 text-center">
            <div className={`inline-block px-4 py-2 rounded-full ${performance.bgColor} ${performance.borderColor} border-2 mb-6`}>
              <span className={`font-bold text-sm ${performance.color}`}>HASIL KUIS</span>
            </div>

            <h2 className={`text-4xl md:text-5xl font-black mb-4 ${performance.color}`}>
              {performance.title}
            </h2>
            <p className="text-xl text-gray-600 mb-10">{performance.msg}</p>
            
            {/* Score Circle */}
            <div className="relative inline-block mb-10">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle 
                  cx="96" cy="96" r="88" 
                  stroke="currentColor" 
                  strokeWidth="12" 
                  fill="transparent" 
                  className="text-gray-100" 
                />
                <circle 
                  cx="96" cy="96" r="88" 
                  stroke="currentColor" 
                  strokeWidth="12" 
                  fill="transparent" 
                  strokeDasharray={552.92}
                  strokeDashoffset={552.92 - (552.92 * percentage) / 100}
                  className={percentage >= 75 ? 'text-green-500' : percentage >= 50 ? 'text-blue-500' : 'text-red-500'}
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-gray-900">{percentage}%</span>
                <span className="text-gray-500 font-bold text-xs uppercase">Skor Anda</span>
              </div>
            </div>

            {/* Score Details */}
            <div className="grid grid-cols-2 gap-4 mb-10 max-w-sm mx-auto">
              <div className="bg-green-50 border-2 border-green-200 p-4 rounded-2xl">
                <p className="text-green-600 font-black text-3xl">{score}</p>
                <p className="text-green-600 text-xs font-bold uppercase">Benar</p>
              </div>
              <div className="bg-red-50 border-2 border-red-200 p-4 rounded-2xl">
                <p className="text-red-600 font-black text-3xl">{questions.length - score}</p>
                <p className="text-red-600 text-xs font-bold uppercase">Salah</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => { 
                  setSelectedAnswer(null); 
                  setShowResult(false); 
                  setCurrentQuestion(0); 
                  setScore(0); 
                }}
                className="flex-1 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg"
              >
                Ulangi Kuis
              </button>
              <Link href="/" className="flex-1 py-4 bg-gray-100 text-gray-700 rounded-2xl font-bold hover:bg-gray-200 transition-all text-center">
                Kembali ke Beranda
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
