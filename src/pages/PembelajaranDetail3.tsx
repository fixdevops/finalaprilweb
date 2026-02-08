import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function PembelajaranDetail3() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Metode Pembatasan Fisik - DiaWeb</title>
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
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200"
              alt="Environment"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="inline-block px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full mb-3">
                Tahap 3
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
                Pembatasan Fisik
              </h1>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ciptakan Jarak Fisik
            </h2>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed">
              Membangun lingkungan yang mendukung fokus dengan cara menjauhkan gangguan secara nyata dari jangkauan mata. Menaruh ponsel di ruangan berbeda adalah cara efektif membangun 'hambatan' psikologis yang membuatmu berpikir dua kali sebelum bermain.
            </p>

            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-green-800 mb-4">💡 Strategi Hambatan:</h3>
              <p className="text-gray-700 leading-relaxed italic text-lg">
                "Semakin jauh dan sulit akses fisiknya, semakin rendah keinginan otak untuk melakukannya secara impulsif."
              </p>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-6">Penerapan Nyata:</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { icon: "🛌", title: "Kamar Bebas Gadget", desc: "Jangan pernah bawa HP atau konsol ke tempat tidur." },
                { icon: "📱", title: "Storage Box", desc: "Taruh HP di laci atau kotak selama waktu belajar." },
                { icon: "🔌", title: "Cabut Colokan", desc: "Cabut kabel power PC/Konsol saat tidak jam bermain." },
                { icon: "🔕", title: "Notification Kill", desc: "Matikan semua notifikasi game di smartphone." }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gray-50 rounded-2xl border border-gray-200">
                  <span className="text-4xl mb-3 block">{item.icon}</span>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-10 text-center text-white mt-12">
              <h3 className="text-3xl font-black mb-4">🎉 Selamat!</h3>
              <p className="text-xl mb-8">Kamu Telah Menyelesaikan Materi.</p>
              <p className="text-lg mb-8 opacity-90">Saatnya membuktikan kendali dirimu melalui kuis akhir.</p>
              <Link href="/quiz">
                <button className="bg-white text-green-600 px-10 py-4 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-lg">
                  Mulai Kuis Akhir Sekarang
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
