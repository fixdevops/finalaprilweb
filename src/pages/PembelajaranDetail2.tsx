import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PembelajaranDetail2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Motivasi Belajar - DiaWeb</title>
      </Head>

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <Link href="/pelajaran" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium mb-8">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Kembali ke Kurikulum
        </Link>

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="relative h-64 md:h-80">
            <Image 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
              alt="Motivation"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full mb-3">
                Aspek 2
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                Motivasi Belajar
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🔥 Menggerakkan Diri untuk Belajar
            </h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-orange-600 mb-2">Pengertian</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Motivasi adalah dorongan dalam diri siswa yang membuatnya mau belajar dan bertahan meskipun mengalami kesulitan.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-blue-50 border-2 border-blue-100">
                <h4 className="text-blue-600 font-bold mb-3 uppercase text-xs tracking-wider">💡 Motivasi Intrinsik</h4>
                <ul className="text-gray-800 space-y-2 text-sm">
                  <li>• Belajar karena ingin tahu</li>
                  <li>• Belajar karena merasa tertantang</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-purple-50 border-2 border-purple-100">
                <h4 className="text-purple-600 font-bold mb-3 uppercase text-xs tracking-wider">🏆 Motivasi Ekstrinsik</h4>
                <ul className="text-gray-800 space-y-2 text-sm">
                  <li>• Nilai atau Ranking</li>
                  <li>• Pujian & Harapan Orang Tua</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-10">
              <p className="text-gray-700 italic">
                "Keduanya penting, tapi motivasi intrinsik membuat belajar lebih tahan lama."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Komponen Motivasi dalam SRL:</h3>
            <div className="space-y-4 mb-10">
              {[
                { step: "Tujuan", desc: "Memiliki tujuan belajar yang jelas." },
                { step: "Efikasi Diri", desc: "Kepercayaan diri (self-efficacy) bahwa kamu bisa melakukannya." },
                { step: "Resiliensi", desc: "Ketahanan dalam menghadapi kesulitan belajar." }
              ].map((s, i) => (
                <div key={i} className="flex gap-4 items-start p-5 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i+1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{s.step}</h4>
                    <p className="text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-10 p-6 bg-gray-900 rounded-2xl text-white">
               <h4 className="text-orange-400 font-bold mb-2">Contoh Sikap Siswa Bermotivasi Tinggi:</h4>
               <p className="text-lg italic">“Walaupun nilainya jelek kemarin, saya tetap mau belajar supaya bisa lebih baik.”</p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tips Meningkatkan Motivasi:</h3>
            <div className="grid md:grid-cols-1 gap-3 mb-10">
              {[
                "Tentukan tujuan kecil yang realistis setiap hari.",
                "Ingat alasan pribadi mengapa belajar itu penting bagi masa depanmu.",
                "Beri penghargaan (reward) pada diri sendiri setelah selesai belajar."
              ].map((tip, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                  <span className="text-orange-500 font-bold text-xl">★</span>
                  <p className="text-gray-700 font-medium">{tip}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl p-8 text-center text-white mt-12">
              <p className="text-lg font-bold mb-6">Sudah punya dorongan untuk belajar? Mari lanjut ke aspek terakhir!</p>
              <Link href="/PembelajaranDetail3">
                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg">
                  Lanjut ke Tahap 3 →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}