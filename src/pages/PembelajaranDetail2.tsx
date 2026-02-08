import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PembelajaranDetail2() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Teknik Cognitive Reframing - DiaWeb</title>
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
              src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200"
              alt="Mindset"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full mb-3">
                Tahap 2
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                Cognitive Reframing
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ubah Pola Pikir Anda
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Belajar mengubah pola pikir otomatis. Ubah kalimat 'Aku harus main sekarang' menjadi kesadaran akan tanggung jawab masa depan. Teknik ini disebut reframing, di mana kita membingkai ulang keinginan impulsif menjadi keputusan logis.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="p-6 rounded-2xl bg-red-50 border-2 border-red-200">
                <h4 className="text-red-600 font-bold mb-3 uppercase text-xs tracking-wider">❌ Pola Pikir Lama</h4>
                <p className="text-gray-800 font-semibold italic">"Main 5 menit lagi pasti nggak apa-apa."</p>
              </div>
              <div className="p-6 rounded-2xl bg-green-50 border-2 border-green-200">
                <h4 className="text-green-600 font-bold mb-3 uppercase text-xs tracking-wider">✓ Reframed Mindset</h4>
                <p className="text-gray-900 font-semibold">"Tugas ini jauh lebih penting untuk masa depanku daripada 5 menit kesenangan semu."</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Langkah Praktis:</h3>
            <div className="space-y-4 mb-10">
              {[
                { step: "Sadar", desc: "Kenali saat pikiran impulsif untuk main game muncul." },
                { step: "Berhenti", desc: "Tarik napas dalam dan jangan langsung bertindak." },
                { step: "Tanya", desc: "Tanyakan pada diri sendiri: 'Apa manfaatnya buat aku 2 jam lagi?'" },
                { step: "Pilih", desc: "Putuskan untuk melakukan tugas produktif terlebih dahulu." }
              ].map((s, i) => (
                <div key={i} className="flex gap-4 items-start p-6 bg-gray-50 rounded-xl border border-gray-200">
                  <span className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i+1}
                  </span>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-1">{s.step}</h4>
                    <p className="text-gray-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-center text-white mt-12">
              <p className="text-lg font-bold mb-6">Siap menuju tahap akhir pengendalian diri?</p>
              <Link href="/PembelajaranDetail3">
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-lg">
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
