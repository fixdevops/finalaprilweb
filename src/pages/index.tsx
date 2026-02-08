import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Theselflearinghub</title>
        <meta name="description" content="Edukasi pengendalian diri terhadap kecanduan game" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Platform <br /> Pengembangan Diri
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10">
            Kurikulum eksekutif untuk membangun disiplin dan fokus di standar lingkungan
          </p>
          <Link href="/PembelajaranDetail1">
          <button className="bg-white text-blue-600 font-bold py-4 px-10 rounded-full hover:bg-blue-50 transition-all shadow-xl active:scale-95">
            Mulai Belajar Sekarang
            </button>
            </Link>
        </div>
      </section>

      {/* 3 Cards Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto justify-center">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Jadwal Terstruktur</h3>
            <p className="text-gray-600 leading-relaxed">
              Gunakan aturan 'Kerja Dulu, Main Kemudian'. Jadikan bermain game sebagai reward tugas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">🚫</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Lingkungan Terkendali</h3>
            <p className="text-gray-600 leading-relaxed">
              Jauhkan perangkat game dari tempat tidur agar tidak tergoda secara konstan.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
            <div className="text-4xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Kontrak Belajar</h3>
            <p className="text-gray-600 leading-relaxed">
              Buat komitmen harian dengan diri sendiri. Rencanakan, jalankan, dan evaluasi.
            </p>
          </div>
        </div>
      </section>

      {/* Kontrak Belajar CTA */}
      <section className="py-20 bg-indigo-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-yellow-400">
            Siap Mengatur Dirimu Sendiri?
          </h2>
          <p className="text-xl md:text-2xl text-indigo-100 mb-10 max-w-2xl mx-auto">
            Gunakan <strong>Self-Management Contract</strong> harian untuk memantau kemajuan, fokus, dan merayakan keberhasilanmu!
          </p>
          <Link href="/kontrak-belajar">
            <button className="bg-yellow-400 text-indigo-900 font-black py-4 px-12 rounded-full hover:bg-yellow-300 transition-all shadow-[0_0_40px_rgba(250,204,21,0.5)] transform hover:-translate-y-1 active:scale-95 text-lg cursor-pointer">
              BUAT KONTRAK BELAJAR SEKARANG 📝
            </button>
          </Link>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-white py-20 px-4 border-y border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Mengapa Harus Mengontrol Diri?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 font-bold">✔</span>
                <p className="text-gray-700">Meningkatkan fokus akademik</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 font-bold">✔</span>
                <p className="text-gray-700">Memperbaiki pola tidur</p>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 font-bold">✔</span>
                <p className="text-gray-700">Hubungan sosial yang sehat</p>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 bg-blue-50 p-8 rounded-3xl border-2 border-dashed border-blue-200">
            <p className="italic text-blue-800 text-lg text-center">
              "Kemenangan terbesar adalah kemenangan atas diri sendiri."
              <span className="font-bold mt-2 block">— Plato</span>
            </p>
          </div>
        </div>
      </section>

      {/* Materi Pembelajaran */}
      <section id="pembelajaran" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">Materi Pembelajaran</h2>
            <p className="text-gray-600 mt-4">Pahami langkah-langkah ini untuk kendali diri yang lebih baik.</p>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="space-y-10">
            {/* Card 1 */}
            <div className="p-10 rounded-3xl border-2 shadow-sm border-red-200 bg-red-50 text-red-700">
              <div className="flex flex-col items-center">
                <div className="mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=250"
                    alt="Manajemen Waktu Strategis"
                    width={400}
                    height={250}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Metakognisi (Mengatur Pikiran Saat Belajar)</h3>
                <p className="text-lg leading-relaxed text-gray-700 text-center mb-6">
                  Metakognisi adalah kesadaran dan kemampuan siswa untuk mengatur cara berpikirnya sendiri saat belajar.
                </p>
                <Link href="/PembelajaranDetail1">
                  <span className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all inline-block">
                    Pelajari Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-10 rounded-3xl border-2 shadow-sm border-blue-200 bg-blue-50 text-blue-700">
              <div className="flex flex-col items-center">
                <div className="mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400&h=250"
                    alt="Teknik Cognitive Reframing"
                    width={400}
                    height={250}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">Motivasi (Menggerakkan Diri untuk Belajar)</h3>
                <p className="text-lg leading-relaxed text-gray-700 text-center mb-6">
                  Motivasi adalah dorongan dalam diri siswa yang membuatnya mau belajar dan bertahan meskipun mengalami kesulitan.
                </p>
                <Link href="/PembelajaranDetail2">
                  <span className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all inline-block">
                    Pelajari Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-10 rounded-3xl border-2 shadow-sm border-green-200 bg-green-50 text-green-700">
              <div className="flex flex-col items-center">
                <div className="mb-6 rounded-2xl overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=250"
                    alt="Metode Pembatasan Fisik"
                    width={400}
                    height={250}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900"> Perilaku (Tindakan Nyata dalam Belajar)
</h3>
                <p className="text-lg leading-relaxed text-gray-700 text-center mb-6">
                  Aspek perilaku adalah bagaimana siswa mengatur tindakan nyata selama proses belajar.
                </p>
                <Link href="/PembelajaranDetail3">
                  <span className="cursor-pointer bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:from-blue-600 hover:to-indigo-700 transition-all inline-block">
                    Pelajari Lebih Lanjut
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-3xl font-black text-gray-900">Tonton Video Edukasi</h2>
            <p className="text-gray-500 mt-2">Belajar lebih mudah dengan penjelasan visual yang menarik.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-black aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/HM5m1oAaY3k"
                title="Dampak Kecanduan Game pada Otak"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="group relative rounded-3xl overflow-hidden shadow-xl bg-black aspect-video">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/9jvDBFpQGqE"
                title="Teknik Deep Work & Kontrol Diri"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center text-gray-400 border-t bg-white">
        <p>© 2026 DiaWeb Edukasi. Bangga Mengontrol Diri.</p>
      </footer>
    </div>
  );
}