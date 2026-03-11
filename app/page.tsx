import { ArrowRight, Instagram, Facebook, Twitter, Phone, MapPin, Clock } from "lucide-react";

export default function Home() {
  const features = [
    { title: "Live Baking", desc: "সরাসরি ওভেন থেকে আপনার হাতে", icon: "🥐" },
    { title: "Premium Quality", desc: "সেরা মানের উপাদানের নিশ্চয়তা", icon: "✨" },
    { title: "Fast Delivery", desc: "সাভারের যেকোনো প্রান্তে দ্রুত ডেলিভারি", icon: "🛵" },
  ];

  return (
    <main className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans selection:bg-orange-100 selection:text-orange-900">
      
      {/* --- TOP ANNOUNCEMENT BAR --- */}
      <div className="bg-orange-600 text-white py-2 text-center text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
        Experience the Art of Live Baking in Savar
      </div>

      {/* --- ELEGANT NAVIGATION --- */}
      <nav className="flex justify-between items-center py-8 px-6 md:px-16 sticky top-0 bg-white/70 backdrop-blur-xl z-50 border-b border-gray-50">
        <div className="text-2xl font-black tracking-tighter">
          BONOMAYA<span className="text-orange-600">.</span>
        </div>
        <div className="hidden md:flex gap-12 text-[11px] font-black uppercase tracking-[0.2em] text-gray-500">
          <a href="#story" className="hover:text-orange-600 transition-colors">Our Story</a>
          <a href="#menu" className="hover:text-orange-600 transition-colors">The Menu</a>
          <a href="#location" className="hover:text-orange-600 transition-colors">Location</a>
        </div>
        <button className="text-sm font-black uppercase tracking-widest border-b-2 border-orange-600 pb-1 hover:text-orange-600 transition-all">
          Order Online
        </button>
      </nav>

      {/* --- LUXURY HERO SECTION --- */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-block mb-8 animate-bounce">
             <span className="text-orange-600 text-4xl">🥖</span>
          </div>
          <h1 className="text-6xl md:text-[110px] font-black leading-[0.9] tracking-tighter mb-10">
            CRAFTING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-orange-400">MEMORIES.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            সাভারের বুকে বনমায়া মানেই আভিজাত্য আর বিশুদ্ধতার মেলবন্ধন। আমরা শুধু খাবার তৈরি করি না, আমরা তৈরি করি প্রতিটি মুহূর্তের তৃপ্তি। 
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="bg-black text-white px-12 py-6 rounded-full font-black text-sm uppercase tracking-widest hover:bg-orange-600 transition-all shadow-2xl">
              Explore Menu
            </button>
            <button className="group flex items-center gap-3 font-black text-sm uppercase tracking-widest">
              Watch Our Story <ArrowRight className="group-hover:translate-x-2 transition-transform" size={18} />
            </button>
          </div>
        </div>
        
        {/* Subtle Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-50 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* --- BRAND PHILOSOPHY (The Features) --- */}
      <section className="py-24 bg-white border-y border-gray-50">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-16">
          {features.map((f, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-500">{f.icon}</div>
              <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE SIGNATURE EXPERIENCE --- */}
      <section id="story" className="py-32 container mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        <div className="relative h-[500px] bg-gray-100 rounded-[40px] overflow-hidden shadow-inner group">
            {/* Placeholder for High-Res Image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold uppercase tracking-widest italic opacity-30 group-hover:opacity-100 transition-opacity">
               Authentic Bakery Visual
            </div>
        </div>
        <div>
          <span className="text-orange-600 font-black text-xs uppercase tracking-[0.4em] mb-6 block">Since 2024</span>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter italic">সাভারের প্রথম <br />সম্পূর্ণ লাইভ কিচেন।</h2>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed font-medium">
            বনমায়া লাইভ বেকারি একটি বিপ্লব। আমাদের লক্ষ্য প্রতিটি মানুষের কাছে স্বাস্থ্যসম্মত এবং তাজা খাবার পৌঁছে দেওয়া। আমাদের সিগনেচার বিরিয়ানি থেকে শুরু করে প্রিমিয়াম পিজ্জা—সবই তৈরি হয় আন্তর্জাতিক মানদণ্ড মেনে।
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 font-bold italic text-xl">১</div>
              <p className="font-bold text-gray-700">সর্বোচ্চ হাইজিন মেইনটেইন করা হয়</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 font-bold italic text-xl">২</div>
              <p className="font-bold text-gray-700">কোনো প্রিজারভেটিভ ব্যবহার করা হয় না</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODERN CONTACT FOOTER --- */}
      <footer className="bg-[#1A1A1A] text-white py-24 rounded-t-[60px]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-4xl font-black mb-8 tracking-tighter italic">BONOMAYA<span className="text-orange-600">.</span></h2>
              <p className="text-gray-400 max-w-sm font-medium leading-relaxed">
                তাজা খাবারের স্বাদ নিতে আজই ভিজিট করুন আমাদের আউটলেটে অথবা ঘরে বসেই অর্ডার করুন।
              </p>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">Visit Us</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li className="flex items-center gap-3"><MapPin size={16} className="text-orange-600"/> সাভার, ঢাকা</li>
                <li className="flex items-center gap-3"><Phone size={16} className="text-orange-600"/> ০১৭XXXXXXXX</li>
                <li className="flex items-center gap-3"><Clock size={16} className="text-orange-600"/> সকাল ১০টা - রাত ১০টা</li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-gray-500 mb-8">Follow Us</h4>
              <div className="flex gap-6">
                <Facebook className="hover:text-orange-600 transition-colors cursor-pointer" size={20} />
                <Instagram className="hover:text-orange-600 transition-colors cursor-pointer" size={20} />
                <Twitter className="hover:text-orange-600 transition-colors cursor-pointer" size={20} />
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-gray-800 flex flex-col md:row justify-between items-center text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 gap-4">
            <p>© 2026 Bonomaya Official. All Rights Reserved.</p>
            <p>Designed by Masum Billah (SWE)</p>
          </div>
        </div>
      </footer>
    </main>
  );
}