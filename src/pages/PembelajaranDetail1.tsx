import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PembelajaranDetail1() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Metakognisi: Mengatur Pikiran - DiaWeb</title>
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
              src="/1234567890.jpeg"
              alt="Metacognition Learning"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-3">
                Aspek 1
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                Metakognisi
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              🧠 Mengatur Pikiran Saat Belajar
            </h2>
            <div className="mb-10">
              <h3 className="text-xl font-bold text-blue-600 mb-2">Pengertian</h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Metakognisi adalah kesadaran dan kemampuan siswa untuk mengatur cara berpikirnya sendiri saat belajar. 
                Sederhananya: <strong>"Siswa tahu apa yang ia ketahui dan apa yang belum ia pahami."</strong>
              </p>
            </div>

            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-8 mb-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                Komponen Metakognisi
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-700">1. Perencanaan Belajar</h4>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Menentukan tujuan belajar (menyiapkan buku/sumber materi).</li>
                    <li>Menyiapkan materi yang akan dipelajari.</li>
                    <li>Menyiapkan waktu dan strategi belajar.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700">2. Pemantauan (Monitoring)</h4>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Menyadari apakah materi sudah dipahami atau belum.</li>
                    <li>Mengecek fokus saat belajar.</li>
                    <li>Menyadari kesalahan saat mengerjakan tugas.</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-blue-700">3. Evaluasi</h4>
                  <ul className="list-disc ml-5 text-gray-700">
                    <li>Menilai hasil belajar sendiri.</li>
                    <li>Merefleksikan strategi yang efektif atau tidak.</li>
                    <li>Memperbaiki cara belajar ke depan.</li>
                  </ul>
                </div>
              </div>
            </div>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 mb-10">
              “Saya tahu materi ini sulit, jadi saya perlu belajar lebih awal dan pakai video pembelajaran.”
            </blockquote>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Tips Metakognitif untuk Siswa:</h3>
            <div className="grid md:grid-cols-1 gap-4 mb-10">
              {[
                "Biasakan bertanya pada diri sendiri: 'Aku sudah paham belum?'",
                "Buat daftar materi sebelum mulai sesi belajar.",
                "Setelah ulangan, lakukan refleksi: bagian mana yang masih lemah?"
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-200">
                  <span className="text-blue-500 font-bold text-xl flex-shrink-0">✓</span>
                  <p className="text-gray-700 font-medium">{tip}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white mt-12">
              <p className="text-lg font-bold mb-6">Sudah paham cara mengatur pikiran? Lanjut ke materi berikutnya!</p>
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