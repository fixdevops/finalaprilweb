import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function DeepWorkDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Deep Work: Teknik Fokus Maksimal | The Self Learning Hub</title>
      </Head>

      {/* Hero Header */}
      <div className="bg-indigo-50 border-b border-indigo-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/pembelajaran" className="text-indigo-600 font-bold flex items-center mb-6 hover:-translate-x-1.25 transition-transform">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Daftar Materi
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Teknik <span className="text-indigo-600">Deep Work</span> & Fokus
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative w-full h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
            alt="Deep Work Focus"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-xl font-medium leading-relaxed mb-8">
            Deep Work adalah kemampuan untuk fokus tanpa gangguan pada tugas yang menuntut secara kognitif. Istilah ini dipopulerkan oleh Cal Newport untuk mendefinisikan cara kerja yang menghasilkan nilai tinggi dan sulit ditiru.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 uppercase tracking-wider">Strategi Menuju Fokus Mendalam</h2>
          
          <div className="space-y-6 my-10">
            {/* Langkah 1 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-indigo-100 shadow-sm flex items-start">
              <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex shrink-0 items-center justify-center font-bold mr-4">1</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Pilih Filosofi Deep Work</h4>
                <p className="text-slate-600">Apakah Anda akan mengisolasi diri selama seminggu penuh (Monastic) atau menjadwalkan blok waktu tertentu setiap hari (Bimodal/Rhythmic)?</p>
              </div>
            </div>

            {/* Langkah 2 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-indigo-100 shadow-sm flex items-start">
              <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex shrink-0 items-center justify-center font-bold mr-4">2</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Ritualkan Lingkungan Anda</h4>
                <p className="text-slate-600">Matikan notifikasi, bersihkan meja kerja, dan gunakan alat bantu seperti musik lo-fi atau noise-cancelling untuk menandai dimulainya sesi fokus.</p>
              </div>
            </div>

            {/* Langkah 3 */}
            <div className="p-6 rounded-2xl bg-white border-2 border-indigo-100 shadow-sm flex items-start">
              <div className="bg-indigo-600 text-white w-10 h-10 rounded-full flex shrink-0 items-center justify-center font-bold mr-4">3</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg mb-1">Berhenti di Waktu yang Tepat</h4>
                <p className="text-slate-600">Kesehatan otak memerlukan waktu istirahat total. Lakukan &quot;Shutdown Ritual&quot; di sore hari agar pikiran tidak terbebani pekerjaan saat istirahat.</p>
              </div>
            </div>
          </div>

          <div className="bg-indigo-900 text-white p-8 rounded-3xl my-10">
            <h3 className="text-xl font-bold mb-4 text-indigo-300 italic">
              &quot;Deep work is at the core of what it means to be successful in the 21st century.&quot;
            </h3>
            <p className="text-indigo-400">— Cal Newport</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Musuh Utama: Shallow Work</h2>
          <p className="mb-6">
            Pekerjaan dangkal (Shallow Work) seperti membalas pesan instan atau browsing tanpa tujuan adalah musuh terbesar. Deep work melatih sirkuit otak Anda untuk bekerja pada kapasitas maksimal, yang merupakan kunci dalam belajar mandiri.
          </p>
        </div>
      </article>

      {/* Footer CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-linear-to-r from-indigo-600 to-purple-700 p-10 rounded-3xl text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Ingin Melatih Fokus Anda?</h3>
          <p className="mb-8 opacity-90">Kuasai emosi dan resiliensi untuk menjaga konsistensi belajar Anda.</p>
          <Link href="/pembelajaran/regulasi-emosi" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-black hover:bg-slate-100 transition-all inline-block shadow-lg">
            Materi Selanjutnya: Regulasi Emosi →
          </Link>
        </div>
      </div>
    </div>
  );
}