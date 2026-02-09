import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const materi = [
    {
      title: "Metakognisi",
      subtitle: "Mengatur Pikiran Saat Belajar",
      desc: "Kesadaran dan kemampuan untuk mengatur cara berpikir sendiri secara strategis.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=400&h=250",
      link: "/PembelajaranDetail1",
      color: "border-rose-200 bg-rose-50 text-rose-700",
      btnColor: "bg-rose-600 hover:bg-rose-700"
    },
    {
      title: "Motivasi",
      subtitle: "Menggerakkan Diri untuk Belajar",
      desc: "Dorongan internal yang membuat Anda tetap bertahan meski menghadapi kesulitan.",
      image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=400&h=250",
      link: "/PembelajaranDetail2",
      color: "border-sky-200 bg-sky-50 text-sky-700",
      btnColor: "bg-sky-600 hover:bg-sky-700"
    },
    {
      title: "Perilaku",
      subtitle: "Tindakan Nyata dalam Belajar",
      desc: "Bagaimana mengatur tindakan konkret dan kebiasaan selama proses pembelajaran.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400&h=250",
      link: "/PembelajaranDetail3",
      color: "border-emerald-200 bg-emerald-50 text-emerald-700",
      btnColor: "bg-emerald-600 hover:bg-emerald-700"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Head>
        <title>Self Learning Hub | Kendali Diri & Edukasi</title>
        <meta name="description" content="Edukasi pengendalian diri terhadap kecanduan game" />
      </Head>

      <main>
        {/* Header Section */}
        <section className="relative py-20 overflow-hidden bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
          
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mb-6">
              Materi <span className="text-blue-600">Pembelajaran</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Pahami langkah-langkah strategis untuk kendali diri yang lebih baik dan transformasi kebiasaan belajar Anda.
            </p>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto mt-8 rounded-full"></div>
          </div>
        </section>

        {/* Content Cards */}
        <section className="pb-24 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {materi.map((item, index) => (
              <div 
                key={index} 
                className={`group flex flex-col rounded-3xl border-2 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${item.color}`}
              >
                <div className="p-2">
                  <div className="relative h-52 w-full rounded-2xl overflow-hidden shadow-inner">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow text-center">
                  <span className="text-xs uppercase tracking-widest font-bold mb-2 opacity-70">{item.subtitle}</span>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-8 flex-grow">
                    {item.desc}
                  </p>
                  
                  <Link href={item.link}>
                    <span className={`inline-block w-full py-4 rounded-xl text-white font-bold transition-colors shadow-md ${item.btnColor}`}>
                      Pelajari Lebih Lanjut
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-bold text-slate-800 tracking-tight">Theselflearinghub</p>
          <p className="text-sm text-slate-500">© 2026 DiaWeb Edukasi. Bangga Mengontrol Diri.</p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full bg-slate-100 italic flex items-center justify-center font-serif text-slate-400">f</div>
            <div className="w-8 h-8 rounded-full bg-slate-100 italic flex items-center justify-center font-serif text-slate-400">t</div>
          </div>
        </div>
      </footer>
    </div>
  );
}