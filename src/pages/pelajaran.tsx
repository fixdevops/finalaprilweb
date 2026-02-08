import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

const materiList = [
  {
    id: 1,
    title: "Kenali Gejala Kecanduan",
    desc: "Seringkali kita tidak sadar. Gejalanya meliputi merasa gelisah saat tidak main game, mengabaikan tugas sekolah, hingga pola tidur yang berantakan.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800",
    badge: "Tahap 1",
    badgeColor: "bg-red-500",
    borderColor: "border-red-200",
    bgColor: "bg-red-50",
    link: "/PembelajaranDetail1"
  },
  {
    id: 2,
    title: "Teknik Cognitive Reframing",
    desc: "Belajar mengubah pola pikir otomatis. Ubah kalimat 'Aku harus main sekarang' menjadi kesadaran akan tanggung jawab masa depan.",
    image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800",
    badge: "Tahap 2",
    badgeColor: "bg-blue-500",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    link: "/PembelajaranDetail2"
  },
  {
    id: 3,
    title: "Metode Pembatasan Fisik",
    desc: "Ciptakan jarak antara dirimu dan perangkat game. Menaruh ponsel di ruangan berbeda adalah cara efektif membangun 'hambatan' psikologis.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800",
    badge: "Tahap 3",
    badgeColor: "bg-green-500",
    borderColor: "border-green-200",
    bgColor: "bg-green-50",
    link: "/PembelajaranDetail3"
  }
];

export default function Pelajaran() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Materi Pembelajaran - DiaWeb</title>
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            Kurikulum Self-Control
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Selesaikan setiap tahapan untuk membangun ketahanan mental yang kuat dan kendali diri yang optimal.
          </p>
          <div className="w-24 h-1.5 bg-white mx-auto mt-8 rounded-full"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {materiList.map((materi) => (
            <div 
              key={materi.id} 
              className={`bg-white rounded-3xl shadow-sm border-2 ${materi.borderColor} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image 
                  src={materi.image}
                  alt={materi.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className={`absolute top-4 left-4 ${materi.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {materi.badge}
                </span>
              </div>

              {/* Content */}
              <div className={`p-8 ${materi.bgColor}`}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {materi.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                  {materi.desc}
                </p>
                <Link href={materi.link}>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-full font-bold hover:from-blue-600 hover:to-indigo-700 transition-all shadow-lg">
                    Pelajari Lebih Lanjut →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
              Siap Menguji Kontrol Dirimu?
            </h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
              Setelah mempelajari semua materi, saatnya untuk verifikasi sejauh mana kamu bisa menguasai dirimu.
            </p>
            <Link href="/quiz">
              <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-xl active:scale-95">
                Mulai Kuis Sekarang
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
