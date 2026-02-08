import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PembelajaranDetail1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Kenali Gejala Kecanduan - DiaWeb</title>
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
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1200"
              alt="Gaming Addiction"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full mb-3">
                Tahap 1
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                Kenali Gejala Kecanduan
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Self-Checklist Gejala
            </h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Skor Kesadaran Diri: Waspada dan tetap kontrol diri kamu. Gejalanya meliputi merasa gelisah saat tidak main game, mengabaikan tugas sekolah, hingga pola tidur yang berantakan.
            </p>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="text-3xl mr-3">🧠</span>
                Apa yang Terjadi pada Otak?
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Saat bermain game secara berlebihan, otak melepaskan dopamin yang memicu rasa senang instan. Namun, paparan terus-menerus membuat reseptor otak tumpul, sehingga kamu butuh waktu bermain lebih lama hanya untuk merasa "normal".
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tips Cepat Memutus Siklus:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              {[
                "Gunakan alarm fisik saat mulai bermain.",
                "Jangan bermain di dalam kamar tidur.",
                "Cari aktivitas fisik minimal 15 menit/hari.",
                "Hapus shortcut game dari desktop utama."
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <span className="text-green-500 font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700 font-medium">{tip}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white mt-12">
              <p className="text-lg font-bold mb-6">Sudah paham gejalanya? Uji pemahamanmu sekarang!</p>
              <Link href="/PembelajaranDetail2">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg">
                  Lanjut ke Tahap 2 →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
