import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PembelajaranDetail3() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Perilaku Belajar - DiaWeb</title>
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
              src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80&w=1200"
              alt="Action and Behavior"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-3">
                Aspek 3
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                Perilaku Belajar
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🏃‍♀️ Tindakan Nyata dalam Belajar
            </h2>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold text-green-600 mb-2">Pengertian</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Aspek perilaku adalah bagaimana siswa mengatur tindakan nyata selama proses belajar untuk mencapai hasil yang maksimal.
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bentuk Perilaku Belajar dalam SRL:</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-2xl mb-3">⏰</div>
                <h4 className="font-bold text-green-800 mb-2">Manajemen Waktu</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mengatur jadwal belajar</li>
                  <li>• Tidak menunda tugas</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-2xl mb-3">🏠</div>
                <h4 className="font-bold text-green-800 mb-2">Lingkungan</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Tempat kondusif</li>
                  <li>• Kurangi gangguan (HP/TV)</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-green-50 border border-green-100">
                <div className="text-2xl mb-3">📝</div>
                <h4 className="font-bold text-green-800 mb-2">Strategi</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Mencatat poin penting</li>
                  <li>• Bertanya & mengulang</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 border-2 border-dashed border-gray-200 rounded-2xl p-8 mb-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                Contoh Perilaku SRL:
              </h3>
              <p className="text-gray-700 text-lg italic leading-relaxed">
                “Saya belajar di tempat yang tenang dan mematikan notifikasi HP agar lebih fokus.”
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-600 to-teal-600 rounded-2xl p-8 text-center text-white mt-12 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Luar Biasa! 🎉</h3>
              <p className="text-lg mb-8 opacity-90">
                Kamu telah mempelajari tiga aspek utama Self-Regulated Learning (SRL): Metakognisi, Motivasi, dan Perilaku.
              </p>
              <Link href="/pelajaran">
                <button className="bg-white text-green-700 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-md">
                  Selesaikan Pembelajaran
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}