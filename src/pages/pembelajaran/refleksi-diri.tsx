import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function RefleksiDiriDetail() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Evaluasi & Refleksi Kendiri | The Self Learning Hub</title>
      </Head>

      {/* Hero Header */}
      <div className="bg-slate-100 border-b border-slate-200 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/pembelajaran" className="text-slate-600 font-bold flex items-center mb-6 hover:-translate-x-1.25 transition-transform">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Kembali ke Daftar Materi
          </Link>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">
            Evaluasi & <span className="text-blue-600">Refleksi Kendiri</span>
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 py-16">
        <div className="relative w-full h-96 rounded-3xl overflow-hidden mb-12 shadow-2xl">
          <Image 
            src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=1200"
            alt="Self Reflection and Evaluation"
            fill
            className="object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-700">
          <p className="text-xl font-medium leading-relaxed mb-8">
            Refleksi kendiri adalah proses melihat kembali tindakan, pemikiran, dan hasil belajar Anda untuk meningkatkan kualitas diri di masa depan. Tanpa audit berkala, Anda berisiko mengulangi kesalahan yang sama tanpa ada kemajuan nyata.
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6 uppercase tracking-wider">Langkah Audit Mingguan</h2>
          
          <div className="space-y-4 my-10">
            <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-black text-slate-300 text-4xl">01</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Tinjau Pencapaian</h4>
                <p className="text-slate-600">Apa saja target pembelajaran yang berhasil diselesaikan minggu ini? Berikan apresiasi pada diri sendiri atas kemenangan kecil tersebut.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-black text-slate-300 text-4xl">02</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Identifikasi Hambatan</h4>
                <p className="text-slate-600">Apa yang membuat Anda terhambat? Apakah itu gangguan media sosial, kurangnya motivasi, atau materi yang terlalu sulit?</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="font-black text-slate-300 text-4xl">03</div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Rencana Perbaikan</h4>
                <p className="text-slate-600">Strategi apa yang akan Anda ubah untuk minggu depan? Tuliskan langkah spesifik untuk menghindari hambatan yang sama.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-3xl my-10">
            <h3 className="text-xl font-bold mb-4 text-slate-300 italic">
              &quot;Pelajaran yang paling berharga bukan berasal dari pengalaman, melainkan dari refleksi atas pengalaman tersebut.&quot;
            </h3>
            <p className="text-slate-400">— John Dewey</p>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Mengapa Ini Penting?</h2>
          <p className="mb-6">
            Self-learning adalah maraton, bukan sprint. Refleksi membantu Anda menjaga ritme tetap stabil dan memastikan setiap langkah yang Anda ambil benar-benar menuju ke arah tujuan besar Anda.
          </p>
        </div>
      </article>

      {/* Final Footer CTA */}
      <div className="max-w-4xl mx-auto px-4 pb-20">
        <div className="bg-slate-900 p-12 rounded-[3rem] text-center text-white shadow-2xl relative overflow-hidden">
          {/* Efek Cahaya Dekoratif */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 blur-[100px] opacity-20"></div>
          
          <h3 className="text-3xl font-black mb-4">Selamat! Anda Telah Menyelesaikan Seri Materi.</h3>
          <p className="mb-10 text-slate-400 max-w-xl mx-auto">
            Anda sekarang memiliki landasan teori yang kuat untuk mengelola diri. Saatnya menguji pemahaman Anda melalui kuis interaktif.
          </p>
          <Link href="/quiz">
            <button className="bg-blue-600 text-white px-12 py-4 rounded-full font-black hover:bg-blue-700 transition-all transform hover:scale-105 shadow-xl uppercase tracking-widest text-sm">
              Ambil Kuis Sekarang
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}