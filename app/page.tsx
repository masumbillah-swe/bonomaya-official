import { ShoppingBag, Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";

export default function Home() {
  const categories = [
    { name: "লাইভ বেকারি", img: "🥐" },
    { name: "ফাস্ট ফুড", img: "🍔" },
    { name: "ডেজার্ট", img: "🍰" },
    { name: "পানীয়", img: "🥤" }
  ];

  return (
    <main className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* --- DESKTOP NAVIGATION --- */}
      <nav className="hidden md:flex justify-between items-center py-6 px-16 bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
        <div className="text-2xl font-black text-orange-600 tracking-tighter">BONOMAYA.</div>
        <div className="flex gap-10 font-bold text-sm uppercase tracking-widest text-gray-600">
          <a href="#about" className="hover:text-orange-600 transition">আমাদের গল্প</a>
          <a href="#menu" className="hover:text-orange-600 transition">মেনু</a>
          <a href="#location" className="hover:text-orange-600 transition">লোকেশন</a>
        </div>
        <button className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
          অর্ডার করুন
        </button>
      </nav>

      {/* --- MOBILE HEADER --- */}
      <header className="md:hidden sticky top-0 z-50 bg-white px-6 py-4 flex justify-between items-center border-b border-gray-100">
        <span className="text-xl font-black text-orange-600 tracking-tighter uppercase">Bonomaya</span>
        <div className="flex gap-4">
            <ShoppingBag size={20} className="text-gray-600" />
            <Phone size={20} className="text-gray-600" />
        </div>
      </header>

      {/* --- HERO SECTION (Professional & Elegant) --- */}
      <section className="relative h-[80vh] md:h-[90vh] flex items-center justify-center bg-[#fcfcfc] overflow-hidden">
        <div className="container mx-auto px-6 text-center z-10">
          <span className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-xs font-bold mb-6 tracking-[0.2em] uppercase">
            Est. 2024 | Savar, Dhaka
          </span>
          <h1 className="text-5xl md:text-8xl font-black text-gray-900 mb-8 leading-[1.1]">
            বিশুদ্ধ স্বাদ, <br/><span className="text-orange-600">আভিজাত্যের ছোঁয়া।</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-10 leading-relaxed">
            বনমায়া লাইভ বেকারি ও ফাস্ট ফুড এখন আপনার হাতের নাগালে। আমরা বিশ্বাস করি খাবারের মান আর আপনার সন্তুষ্টিতেই আমাদের সার্থকতা। সরাসরি আমাদের কিচেন থেকে আপনার টেবিলে।
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-orange-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-[0_20px_50px_rgba(234,88,12,0.3)] transition-all">
              মেনু এক্সপ্লোর করুন
            </button>
            <button className="bg-white border-2 border-gray-100 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition">
              আমাদের সম্পর্কে জানুন
            </button>
          </div>
        </div>
        {/* Background Decor */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[120px] -z-0"></div>
      </section>

      {/* --- CATEGORIES SECTION --- */}
      <section className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-black mb-12 text-center md:text-left">আমাদের সেবাসমূহ</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.name} className="group p-8 bg-gray-50 rounded-[40px] text-center hover:bg-white hover:shadow-2xl hover:shadow-orange-100 transition-all cursor-pointer border border-transparent hover:border-orange-100">
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{cat.img}</div>
              <h3 className="font-bold text-gray-800">{cat.name}</h3>
              <div className="mt-4 flex justify-center text-orange-600 opacity-0 group-hover:opacity-100 transition">
                <ArrowRight size={18} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- OFFICIAL INFO SECTION --- */}
      <section id="about" className="py-24 bg-gray-900 text-white rounded-[60px] mx-4 md:mx-10 my-10 overflow-hidden">
        <div className="container mx-auto px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">সাভারের বুকে এক টুকরো <span className="text-orange-500">পরিতৃপ্তি।</span></h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              বনমায়া শুধু একটি নাম নয়, এটি একটি বিশ্বাস। আমাদের প্রতিটি বেকারি আইটেম আর ফাস্ট ফুড তৈরি হয় সর্বোচ্চ স্বাস্থ্যবিধি মেনে। আমাদের লক্ষ্য সাভার এবং এর আশেপাশে সেরা মানের খাবার পৌঁছে দেওয়া।
            </p>
            <div className="flex gap-10">
                <div>
                    <h4 className="text-3xl font-black text-orange-500">৫০০০+</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">হ্যাপি কাস্টমার</p>
                </div>
                <div>
                    <h4 className="text-3xl font-black text-orange-500">৫০+</h4>
                    <p className="text-sm text-gray-500 uppercase tracking-widest mt-2">আইটেম</p>
                </div>
            </div>
          </div>
          <div className="bg-gray-800 h-80 rounded-3xl flex items-center justify-center border border-gray-700 text-gray-600 italic">
            [আপনার দোকানের একটি সুন্দর ভিডিও বা ছবি এখানে হবে]
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white pt-20 pb-10 border-t border-gray-100">
        <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black text-gray-900 mb-6">BONOMAYA.</h3>
            <p className="text-gray-500 max-w-sm">সাভারের অন্যতম সেরা লাইভ বেকারি ও ফাস্ট ফুড শপ। গুণগত মান আমাদের একমাত্র পরিচয়।</p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">যোগাযোগ</h4>
            <ul className="text-gray-500 space-y-4 text-sm">
              <li className="flex items-center gap-2"><MapPin size={16}/> সাভার, ঢাকা</li>
              <li className="flex items-center gap-2"><Phone size={16}/> ০১৭XXXXXXXX</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest">ফলো করুন</h4>
            <div className="flex gap-4">
              <Facebook className="text-gray-400 hover:text-orange-600 transition" />
              <Instagram className="text-gray-400 hover:text-orange-600 transition" />
            </div>
          </div>
        </div>
        <div className="text-center border-t border-gray-50 pt-10">
          <p className="text-gray-400 text-sm">© 2026 Bonomaya Official. All Rights Reserved. <br className="md:hidden"/> Designed & Developed by Masum Billah.</p>
        </div>
      </footer>
    </main>
  );
}