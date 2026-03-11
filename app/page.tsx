"use client";

import { useState } from "react";
import { 
  ShoppingBag, Home, Search, User, MapPin, 
  Star, ArrowRight, Phone, Zap, ChevronRight, Facebook, 
  Instagram, Twitter, Mail, Sparkles, X 
} from "lucide-react";

export default function BonomayaOfficialYellowApp() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const categories = [
    { name: "লাইভ বেকারি", icon: "🥐", count: "১৫+ আইটেম", color: "bg-[#DFC8A8]/30" },
    { name: "সিগনেচার বিরিয়ানি", icon: "🍛", count: "১০+ আইটেম", color: "bg-[#FFB237]/10" },
    { name: "পিজ্জা ও বারগার", icon: "🍕", count: "২০+ আইটেম", color: "bg-white" },
    { name: "ডেজার্ট ও কেক", icon: "🍰", count: "১২+ আইটেম", color: "bg-[#854442]/5" },
  ];

  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(authMode === "login" ? "লগইন সফল!" : "অ্যাকাউন্ট তৈরি হয়েছে!");
    setIsLoginOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#FFFFFF] font-sans selection:bg-[#FFB237]/40 text-[#1A1A1A]">
      
      {/* --- গোল্ডেন হেডার --- */}
      <header className="sticky top-0 z-[100] bg-white border-b-4 border-[#FFB237] px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#854442] rounded-2xl flex items-center justify-center text-[#FFB237] shadow-lg border-2 border-[#DFC8A8]">
            <span className="font-black text-2xl italic">B</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black leading-tight tracking-tighter uppercase italic text-[#854442]">Bonomaya<span className="text-[#FFB237]">.</span></h1>
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <MapPin size={10} className="text-[#FFB237]" /> মিরপুর ২, লাভ রোড
            </div>
          </div>
        </div>
        <div className="flex gap-2">
            <button onClick={() => { setAuthMode("login"); setIsLoginOpen(true); }} className="p-2.5 bg-[#854442]/5 rounded-2xl text-[#854442] border border-[#DFC8A8] active:scale-90 transition-all">
                <User size={20} />
            </button>
            <button className="relative p-2.5 bg-[#FFB237]/10 rounded-2xl border border-[#FFB237]/30 text-[#854442]">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#854442] text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white shadow-md">৩</span>
            </button>
        </div>
      </header>

      {/* --- স্মার্ট লগইন/সাইন-আপ পপ-আপ --- */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white w-full max-w-md rounded-t-[40px] md:rounded-[40px] p-8 relative shadow-2xl animate-in slide-in-from-bottom duration-300 border-t-8 border-[#FFB237]">
            <button onClick={() => setIsLoginOpen(false)} className="absolute right-6 top-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <X size={20} />
            </button>
            
            <h3 className="text-3xl font-black italic text-[#854442] mb-2 tracking-tighter">
              {authMode === "login" ? "স্বাগতম!" : "অ্যাকাউন্ট খুলুন"}
            </h3>
            <p className="text-gray-500 text-[10px] font-black mb-8 uppercase tracking-[0.2em]">
              {authMode === "login" ? "বনমায়ায় লগইন করুন" : "বনমায়া পরিবারের সদস্য হোন"}
            </p>
            
            <form className="space-y-4" onSubmit={handleAuthSubmit}>
              {authMode === "signup" && (
                <div>
                  <label className="text-[10px] font-black uppercase text-gray-400 ml-2 mb-1 block tracking-widest">আপনার নাম</label>
                  <input type="text" placeholder="নাম লিখুন" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold outline-none focus:border-[#FFB237] transition-all" required />
                </div>
              )}
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 mb-1 block tracking-widest">ফোন নম্বর</label>
                <input type="tel" placeholder="017XXXXXXXX" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold outline-none focus:border-[#FFB237] transition-all" required />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 mb-1 block tracking-widest">পাসওয়ার্ড</label>
                <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold outline-none focus:border-[#FFB237] transition-all" required />
              </div>
              <button className="w-full bg-[#854442] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl active:scale-95 transition-all">
                {authMode === "login" ? "লগইন করুন" : "রেজিস্ট্রেশন করুন"}
              </button>
            </form>
            
            <div className="mt-8 text-center border-t border-gray-100 pt-6">
              <p className="text-sm font-bold text-gray-500">
                {authMode === "login" ? "নতুন অ্যাকাউন্ট দরকার?" : "অলরেডি অ্যাকাউন্ট আছে?"}{" "}
                <button onClick={() => setAuthMode(authMode === "login" ? "signup" : "login")} className="text-[#FFB237] font-black underline underline-offset-4">
                  {authMode === "login" ? "সাইন-আপ করুন" : "লগইন করুন"}
                </button>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* --- সার্চ বার --- */}
      <section className="px-5 pt-6 bg-white pb-4">
        <div className="relative group">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#854442]/40 group-focus-within:text-[#FFB237] transition-colors" size={20} />
          <input 
            type="text" 
            placeholder="আজকে কী খেতে মন চাইছে?" 
            className="w-full bg-gray-50 border-2 border-gray-100 py-4 pl-14 pr-6 rounded-[25px] text-sm font-bold focus:outline-none focus:border-[#FFB237] transition-all shadow-sm"
          />
        </div>
      </section>

      {/* --- ইয়োলো হিরো ব্যানার --- */}
      <section className="px-5 py-6">
        <div className="bg-[#FFB237] rounded-[45px] p-10 text-[#854442] relative overflow-hidden shadow-2xl border-b-8 border-[#854442]">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3 bg-[#854442]/10 w-fit px-3 py-1 rounded-full border border-[#854442]/10">
              <Sparkles size={14} className="text-[#854442] fill-[#854442]" />
              <span className="text-[10px] font-black uppercase tracking-widest text-[#854442]">Luxury Taste</span>
            </div>
            <h2 className="text-4xl font-black mb-6 leading-[1.1] tracking-tighter italic">
              লাভ রোডের সেরা <br/><span className="text-white drop-shadow-sm">লাইভ বেকারি।</span>
            </h2>
            <button className="bg-[#854442] text-white px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl active:scale-95 transition-all">অর্ডার শুরু করুন</button>
          </div>
          <div className="absolute right-[-20px] bottom-[-20px] text-[150px] opacity-10 rotate-12 select-none">🥐</div>
        </div>
      </section>

      {/* --- মেনু ক্যাটাগরি --- */}
      <section className="px-5 mt-10">
        <h3 className="text-2xl font-black tracking-tighter italic text-[#854442] mb-6 px-2">মেনু ক্যাটাগরি</h3>
        <div className="grid grid-cols-2 gap-4">
          {categories.map((cat, i) => (
            <div key={i} className={`${cat.color} p-6 rounded-[35px] border-2 border-[#FFB237]/20 shadow-sm flex flex-col gap-4 active:scale-95 transition-all cursor-pointer group hover:border-[#FFB237]`}>
              <div className="w-14 h-14 bg-white rounded-3xl flex items-center justify-center text-3xl shadow-md border border-[#DFC8A8]/50 group-hover:scale-110 transition-transform">{cat.icon}</div>
              <div className="flex flex-col">
                <span className="font-black text-md text-[#854442] leading-tight">{cat.name}</span>
                <span className="text-[10px] font-bold text-gray-500 mt-1 uppercase tracking-tighter">{cat.count}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- আমাদের সম্পর্কে --- */}
      <section className="px-5 py-10">
        <div className="bg-white rounded-[45px] p-10 text-center border-2 border-[#DFC8A8]/30 shadow-sm relative overflow-hidden">
            <h3 className="text-3xl font-black mb-4 italic tracking-tighter text-[#854442]">বনমায়া লাভ রোড</h3>
            <p className="text-gray-500 text-sm font-medium leading-relaxed mb-8">
                মিরপুর ২ এর লাভ রোডে আমরা নিয়ে এসেছি আভিজাত্যের ছোঁয়া। আমাদের প্রতিটি খাবার আপনার চোখের সামনে অত্যন্ত যত্ন এবং বিশুদ্ধতার সাথে তৈরি করা হয়।
            </p>
            <div className="flex gap-4">
                <div className="flex-1 bg-[#DFC8A8]/20 p-4 rounded-3xl border border-[#DFC8A8]/50">
                    <p className="text-xl font-black text-[#854442]">১০০%</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">বিশুদ্ধতা</p>
                </div>
                <div className="flex-1 bg-[#DFC8A8]/20 p-4 rounded-3xl border border-[#DFC8A8]/50">
                    <p className="text-xl font-black text-[#854442]">তাজা</p>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">উপকরণ</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- যোগাযোগ --- */}
      <section className="px-5 pb-10">
        <h3 className="text-2xl font-black italic text-[#854442] mb-6 tracking-tighter px-2">যোগাযোগ</h3>
        <div className="grid grid-cols-1 gap-4">
          <a href="tel:16910" className="bg-[#854442] p-6 rounded-[35px] flex items-center gap-6 text-white active:scale-95 transition-all shadow-xl">
            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20">
              <Phone size={28} className="text-[#FFB237]" />
            </div>
            <div>
              <p className="text-[10px] font-black uppercase opacity-60 tracking-widest text-[#DFC8A8]">হেল্পলাইন (২৪/৭)</p>
              <p className="text-2xl font-black tracking-tighter">১৬৯১০</p>
            </div>
            <ChevronRight className="ml-auto opacity-40 text-[#FFB237]" />
          </a>
        </div>
      </section>

      {/* --- অফিশিয়াল ইয়েলো ফুটার --- */}
      <footer className="bg-[#FFB237] text-[#854442] pt-20 pb-40 px-6 rounded-t-[60px] shadow-[0_-20px_50px_rgba(255,178,55,0.2)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="text-5xl font-black tracking-tighter mb-8 italic text-[#854442]">BONOMAYA<span className="text-white">.</span></div>
              <p className="text-[#854442]/80 text-sm font-bold leading-relaxed max-w-xs mb-10 italic">মিরপুর ২ এর প্রিমিয়াম লাইভ বেকারি। তাজা স্বাদ আর বিশুদ্ধতার অঙ্গীকার।</p>
              <div className="flex gap-5">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <button key={i} className="w-12 h-12 bg-white/30 rounded-2xl flex items-center justify-center hover:bg-[#854442] hover:text-white transition-all border border-[#854442]/10 shadow-sm">
                    <Icon size={22} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-black mb-8 italic text-[#854442] uppercase tracking-widest border-b-2 border-white/30 w-fit pb-1">লিঙ্ক</h4>
              <ul className="space-y-4 text-[#854442]/80 text-sm font-black italic">
                <li className="hover:text-white cursor-pointer transition">আমাদের মেনু</li>
                <li className="hover:text-white cursor-pointer transition">আমাদের গল্প</li>
                <li className="hover:text-white cursor-pointer transition">শর্তাবলী</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#854442]/10 pt-10 text-center font-black uppercase text-[10px] tracking-widest text-[#854442]/50">
            © ২০২৬ বনমায়া অফিশিয়াল কর্তৃপক্ষ | মিরপুর ২, লাভ রোড
          </div>
        </div>
      </footer>

      {/* --- অ্যাপ ন্যাভিগেশন বার --- */}
      <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-[#854442] border-2 border-[#FFB237] shadow-[0_30px_60px_rgba(0,0,0,0.4)] rounded-[35px] px-10 py-5 flex justify-between items-center z-[120]">
        <button className="flex flex-col items-center gap-1.5 text-[#FFB237]">
          <Home size={26} fill="currentColor" />
          <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors">
          <Zap size={26} />
          <span className="text-[10px] font-black uppercase tracking-widest">Offers</span>
        </button>
        <button onClick={() => { setAuthMode("signup"); setIsLoginOpen(true); }} className="flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors">
          <User size={26} />
          <span className="text-[10px] font-black uppercase tracking-widest">Account</span>
        </button>
      </nav>
    </main>
  );
}