import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function ManajemenWaktuDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Manajemen Waktu: Eisenhower Matrix | The Self Learning Hub</title>
      </Head>

      {/* Hero Header */}
      <div className="bg-blue-50 border-b border-blue-100 py-16">
        <div className="max-w-4xl mx-auto px-4">
          {/* Perbaikan Tailwind: hover:-translate-x-1.25 */}
          <Link href="/pembelajaran" className="text-blue-600 font-bold flex items-center mb-6 hover:-translate-x-1.25 transition-transform">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Daftar Materi
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Manajemen Waktu: <br />
            <span className="text-blue-600">Eisenhower Matrix</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative w-full h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1200"
            alt="Eisenhower Matrix"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-xl font-medium leading-relaxed mb-8">
            Eisenhower Matrix adalah alat manajemen tugas yang membantu Anda mengatur prioritas berdasarkan urgensi dan kepentingan. Teknik ini dipopulerkan oleh Dwight D. Eisenhower, Presiden AS ke-34.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 uppercase tracking-wider">4 Kuadran Prioritas</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
            <div className="p-8 rounded-2xl bg-red-50 border-l-8 border-red-500">
              <h4 className="font-bold text-red-700 text-lg mb-2">1. Mendesak & Penting</h4>
              <p className="text-sm">Tugas yang harus diselesaikan segera (Krisis, Tenggat waktu, Masalah mendesak).</p>
              <p className="mt-4 font-bold text-red-600 underline">TINDAKAN: LAKUKAN SEKARANG</p>
            </div>

            <div className="p-8 rounded-2xl bg-green-50 border-l-8 border-green-500">
              <h4 className="font-bold text-green-700 text-lg mb-2">2. Tidak Mendesak & Penting</h4>
              <p className="text-sm">Aktivitas jangka panjang (Perencanaan, Pengembangan diri, Membangun relasi).</p>
              <p className="mt-4 font-bold text-green-600 underline">TINDAKAN: JADWALKAN</p>
            </div>

            <div className="p-8 rounded-2xl bg-orange-50 border-l-8 border-orange-500">
              <h4 className="font-bold text-orange-700 text-lg mb-2">3. Mendesak & Tidak Penting</h4>
              <p className="text-sm">Interupsi yang mengalihkan fokus (Beberapa email, telepon, atau rapat mendadak).</p>
              <p className="mt-4 font-bold text-orange-600 underline">TINDAKAN: DELEGASIKAN</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-100 border-l-8 border-slate-400">
              <h4 className="font-bold text-slate-700 text-lg mb-2">4. Tidak Mendesak & Tidak Penting</h4>
              <p className="text-sm">Aktivitas pembuang waktu (Media sosial berlebih, hiburan tanpa tujuan).</p>
              <p className="mt-4 font-bold text-slate-600 underline">TINDAKAN: ELIMINASI</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Cara Menerapkan Dalam Belajar</h2>
          <p className="mb-6">
            Sebagai seorang pembelajar mandiri, seringkali kita terjebak di Kuadran 3 (distraksi) atau Kuadran 4. Kunci dari self-management yang sukses adalah memperbanyak waktu di <strong>Kuadran 2</strong>.
          </p>

          <div className="bg-slate-900 text-white p-8 rounded-3xl my-10">
            {/* Perbaikan ESLint: Menggunakan &quot; untuk tanda kutip */}
            <h3 className="text-xl font-bold mb-4 text-blue-400 italic">
              &quot;What is important is seldom urgent and what is urgent is seldom important.&quot;
            </h3>
            <p className="text-slate-400">— Dwight D. Eisenhower</p>
          </div>
        </div>
      </article>

      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-linear-to-r from-blue-600 to-indigo-700 p-10 rounded-3xl text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Sudah Memahami Teknik Ini?</h3>
          <p className="mb-8 opacity-90">Lanjutkan ke materi berikutnya untuk memperkuat sistem manajemen diri Anda.</p>
          <Link href="/pembelajaran/deep-work" className="bg-white text-blue-600 px-8 py-3 rounded-full font-black hover:bg-slate-100 transition-all inline-block shadow-lg">
            Materi Selanjutnya →
          </Link>
        </div>
      </div>
    </div>
  );
}