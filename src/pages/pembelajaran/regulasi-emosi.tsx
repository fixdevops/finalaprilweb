import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function RegulasiEmosiDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Regulasi Emosi & Resiliensi | The Self Learning Hub</title>
      </Head>

      {/* Hero Header */}
      <div className="bg-teal-50 border-b border-teal-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/pembelajaran" className="text-teal-600 font-bold flex items-center mb-6 hover:-translate-x-1.25 transition-transform">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Daftar Materi
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Regulasi <span className="text-teal-600">Emosi</span> & Resiliensi
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative w-full h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200"
            alt="Emotional Regulation"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-xl font-medium leading-relaxed mb-8">
            Kecerdasan emosional adalah fondasi dari manajemen diri. Tanpa kemampuan untuk meregulasi emosi, rencana belajar yang paling sempurna sekalipun bisa hancur karena stres atau kegagalan kecil.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 uppercase tracking-wider">Membangun Kekuatan Mental</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
            {/* Strategi 1 */}
            <div className="p-8 rounded-3xl bg-teal-50/50 border border-teal-100">
              <div className="text-3xl mb-4">🧘</div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Kesadaran Diri (Mindfulness)</h4>
              <p className="text-sm leading-relaxed text-slate-600">
                Belajarlah untuk mengenali emosi saat mereka muncul. Jangan ditekan, tapi diamati tanpa menghakimi diri sendiri.
              </p>
            </div>

            {/* Strategi 2 */}
            <div className="p-8 rounded-3xl bg-teal-50/50 border border-teal-100">
              <div className="text-3xl mb-4">🛡️</div>
              <h4 className="font-bold text-slate-900 text-lg mb-2">Resiliensi Kognitif</h4>
              <p className="text-sm leading-relaxed text-slate-600">
                Ubah cara Anda melihat kegagalan. Alih-alih melihatnya sebagai akhir, lihatlah sebagai data dan umpan balik untuk perbaikan.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Teknik Berhenti Sejenak (The Pause)</h2>
          <p className="mb-6">
            Saat Anda merasa kewalahan dengan materi yang sulit, gunakan teknik &quot;The Pause&quot;. Berhenti belajar selama 5 menit, tarik napas dalam, dan ingatkan diri Anda pada tujuan besar (Big Why) Anda belajar.
          </p>

          <div className="bg-teal-900 text-white p-8 rounded-3xl my-10">
            <h3 className="text-xl font-bold mb-4 text-teal-300 italic">
              &quot;Bukan beban yang menjatuhkanmu, melainkan caramu membawanya.&quot;
            </h3>
            <p className="text-teal-400">— Lou Holtz</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Menjaga Konsistensi</h2>
          <p className="mb-6">
            Resiliensi bukan tentang tidak pernah jatuh, melainkan tentang seberapa cepat Anda bangkit kembali. Manajemen emosi yang baik memastikan energi Anda tetap stabil sepanjang perjalanan belajar mandiri.
          </p>
        </div>
      </article>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-linear-to-r from-teal-600 to-emerald-700 p-10 rounded-3xl text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Hampir Selesai!</h3>
          <p className="mb-8 opacity-90">Satu langkah terakhir: Pelajari cara mengevaluasi progres belajar Anda secara mandiri.</p>
          <Link href="/pembelajaran/refleksi-diri" className="bg-white text-teal-700 px-8 py-3 rounded-full font-black hover:bg-slate-100 transition-all inline-block shadow-lg">
            Materi Terakhir: Refleksi Diri →
          </Link>
        </div>
      </div>
    </div>
  );
}