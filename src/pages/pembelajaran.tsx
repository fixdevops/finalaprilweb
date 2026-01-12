import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const Pembelajaran = () => {
  const materiList = [
    {
      id: 1,
      title: "Manajemen Waktu (Eisenhower Matrix)",
      desc: "Kuasai seni memprioritaskan tugas. Pisahkan antara hal yang mendesak dan hal yang benar-benar penting untuk mencapai produktivitas maksimal tanpa kelelahan.",
      image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      textColor: "text-blue-700",
      link: "/pembelajaran/manajemen-waktu"
    },
    {
      id: 2,
      title: "Teknik Deep Work & Fokus",
      desc: "Belajar membangun lingkungan yang minim distraksi. Tingkatkan kemampuan otak untuk fokus mendalam pada satu tugas sulit dalam waktu yang lama.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      textColor: "text-indigo-700",
      link: "/pembelajaran/deep-work"
    },
    {
      id: 3,
      title: "Regulasi Emosi & Resiliensi",
      desc: "Manajemen diri dimulai dari pikiran. Pahami cara mengelola stres dan kegagalan agar Anda tetap konsisten di jalur pembelajaran mandiri Anda.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
      textColor: "text-teal-700",
      link: "/pembelajaran/regulasi-emosi"
    },
        {
    id: 4,
    title: "Evaluasi & Refleksi Kendiri",
    desc: "Tanpa evaluasi, tidak ada kemajuan. Pelajari teknik audit diri mingguan untuk mengukur sejauh mana target pembelajaran Anda telah tercapai.",
    // Saya ganti ke URL gambar yang lebih stabil tentang evaluasi/kerja
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&q=80&w=800",
    bgColor: "bg-slate-50",
    borderColor: "border-slate-200",
    textColor: "text-slate-700",
    link: "/pembelajaran/refleksi-diri"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Self Management | The Self Learning Hub</title>
      </Head>

      {/* Header Section */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">The Self Learning Hub</span>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mt-3">
            Kuasai Manajemen Diri
          </h2>
          <p className="text-gray-600 mt-4 text-lg">
            Seni mengelola diri adalah fondasi utama bagi setiap pembelajar mandiri yang sukses.
          </p>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 max-w-4xl mx-auto px-4">
        <div className="space-y-16">
          {materiList.map((materi) => (
            <div 
              key={materi.id}
              className={`p-8 md:p-12 rounded-[2.5rem] border-2 shadow-sm ${materi.borderColor} ${materi.bgColor} transition-all hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center">
                {/* Poster Image */}
                <div className="mb-8 rounded-3xl overflow-hidden border-4 border-white shadow-2xl relative w-full max-w-lg h-75">
                  <Image 
                    src={materi.image}
                    alt={materi.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-3xl font-bold mb-4 text-gray-900">
                  {materi.title}
                </h3>
                <p className="text-xl leading-relaxed text-gray-700 mb-8 max-w-2xl">
                  {materi.desc}
                </p>

                {/* Button */}
                <Link href={materi.link}>
                  <button className="bg-linear-to-r from-blue-600 to-indigo-700 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 hover:shadow-blue-200 transition-all duration-300">
                    Pelajari Teknik Ini
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Banner */}
      <section className="py-20 bg-gray-900 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Siap Menguji Fokus Anda?</h3>
        <p className="text-gray-400 mb-8 max-w-md mx-auto px-4">Setelah mempelajari teknik di atas, coba uji tingkat disiplin Anda melalui Quiz interaktif kami.</p>
        <Link href="/quiz">
          <button className="border-2 border-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all">
            Mulai Quiz Disiplin
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Pembelajaran;