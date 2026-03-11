"use client";

import { useState } from "react";
import { 
  ShoppingBag, Home, Search, Heart, User, MapPin, Clock, 
  Star, ArrowRight, Phone, Zap, ChevronRight, Facebook, 
  Instagram, Twitter, Mail, MessageCircle, Sparkles, X 
} from "lucide-react";

export default function BonomayaOfficialFullApp() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const categories = [
    { name: "লাইভ বেকারি", icon: "🥐", count: "১৫+ আইটেম", color: "bg-[#DFC8A8]/30" },
    { name: "সিগনেচার বিরিয়ানি", icon: "🍛", count: "১০+ আইটেম", color: "bg-[#FFB237]/10" },
    { name: "পিজ্জা ও বারগার", icon: "🍕", count: "২০+ আইটেম", color: "bg-white" },
    { name: "ডেজার্ট ও কেক", icon: "🍰", count: "১২+ আইটেম", color: "bg-[#854442]/5" },
  ];

  const popularFood = [
    { name: "সিগনেচার কাচ্চি", price: "১৮০", rating: "৪.৯", icon: "🍛", tag: "Hot" },
    { name: "ওভেন ফ্রেশ পিজ্জা", price: "৩৫০", rating: "৪.৮", icon: "🍕", tag: "New" },
  ];

  return (
    <main className="min-h-screen bg-[#FFFDF5] font-sans selection:bg-[#FFB237]/40 text-[#1A1A1A]">
      
      {/* --- গোল্ডেন হেডার --- */}
      <header className="sticky top-0 z-[100] bg-white border-b-4 border-[#FFB237] px-6 py-4 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-[#FFB237] rounded-2xl flex items-center justify-center text-white shadow-lg border-2 border-white">
            <span className="font-black text-2xl italic text-[#854442]">B</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-black leading-tight tracking-tighter uppercase italic text-[#854442]">Bonomaya<span className="text-[#FFB237]">.</span></h1>
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <MapPin size={10} className="text-[#FFB237]" /> মিরপুর ২, লাভ রোড
            </div>
          </div>
        </div>
        <div className="flex gap-2">
            <button onClick={() => setIsLoginOpen(true)} className="p-2.5 bg-[#854442]/5 rounded-2xl text-[#854442] border border-[#DFC8A8] active:scale-90 transition-all">
                <User size={20} />
            </button>
            <button className="relative p-2.5 bg-[#FFB237]/10 rounded-2xl border border-[#FFB237]/30 text-[#854442] active:scale-90 transition-all">
                <ShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#854442] text-white text-[10px] font-black flex items-center justify-center rounded-full border-2 border-white">৩</span>
            </button>
        </div>
      </header>

      {/* --- লগইন পপ-আপ --- */}
      {isLoginOpen && (
        <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm p-4 transition-all">
          <div className="bg-white w-full max-w-md rounded-t-[40px] md:rounded-[40px] p-8 relative shadow-2xl animate-in slide-in-from-bottom duration-300">
            <button onClick={() => setIsLoginOpen(false)} className="absolute right-6 top-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
              <X size={20} />
            </button>
            
            <h3 className="text-3xl font-black italic text-[#854442] mb-2 tracking-tighter">স্বাগতম!</h3>
            <p className="text-gray-500 text-sm font-bold mb-8 uppercase tracking-widest">আপনার অ্যাকাউন্ট খুলুন বা লগইন করুন</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 mb-1 block tracking-widest">ফোন নম্বর</label>
                <input type="tel" placeholder="017XXXXXXXX" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold outline-none focus:border-[#FFB237] transition-all placeholder:text-gray-300" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 ml-2 mb-1 block tracking-widest">পাসওয়ার্ড</label>
                <input type="password" placeholder="••••••••" className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 px-6 font-bold outline-none focus:border-[#FFB237] transition-all placeholder:text-gray-300" />
              </div>
              <button className="w-full bg-[#854442] text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] shadow-xl shadow-[#854442]/20 active:scale-95 transition-all">লগইন করুন</button>
            </form>
            
            <div className="mt-8 text-center">
              <p className="text-xs font-bold text-gray-400 uppercase mb-4">অথবা সোশ্যাল মিডিয়া দিয়ে</p>
              <div className="flex gap-4">
                <button className="flex-1 py-3 bg-white border-2 border-gray-100 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:border-[#FFB237] transition-colors">
                  <Facebook size={16} className="text-blue-600" /> Facebook
                </button>
                <button className="flex-1 py-3 bg-white border-2 border-gray-100 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:border-[#FFB237] transition-colors">
                  <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center text-[10px] text-white font-bold">G</span> Google
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- সার্চ বার --- */}
      <section className="px-5 pt-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
            <Search size={20} className="text-[#854442]/50 group-focus-within:text-[#FFB237] transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="আপনার পছন্দের খাবার খুঁজুন..." 
            className="w-full bg-white border-2 border-[#DFC8A8]/30 focus:border-[#FFB237] rounded-[25px] py-4 pl-14 pr-6 text-sm font-bold shadow-sm outline-none transition-all placeholder:text-gray-400"
          />
        </div>
      </section>

      {/* --- হিরো ব্যানার --- */}
      <section className="px-5 py-6">
        <div className="relative overflow-hidden bg-[#FFB237] rounded-[45px] p-10 text-[#854442] min-h-[250px] flex flex-col justify-center shadow-2xl border-b-8 border-[#854442]">
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-4 bg-[#854442]/10 px-3 py-1.5 rounded-full backdrop-blur-md border border-[#854442]/20 font-black text-[10px] uppercase tracking-[0.2em]">
                    <Sparkles size={14} fill="#854442" /> Authentic Taste
                </div>
                <h2 className="text-4xl font-black mb-6 leading-[1.1] tracking-tighter italic">
                    খাবার হোক <br/><span className="text-white drop-shadow-sm">তাজা ও স্বাস্থ্যকর।</span>
                </h2>
                <button className="bg-[#854442] text-white px-8 py-3.5 rounded-2xl font-black text-xs uppercase tracking-widest active:scale-95 transition-all shadow-xl">অর্ডার করুন</button>
            </div>
            <div className="absolute right-[-20px] bottom-[-20px] text-[150px] opacity-10 rotate-12 select-none">🥖</div>
        </div>
      </section>

      {/* --- ক্যাটাগরি --- */}
      <section className="px-5 mt-4">
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
        <div className="bg-white rounded-[40px] p-8 border-2 border-[#FFB237]/20 shadow-sm relative overflow-hidden text-center">
          <h3 className="text-2xl font-black italic text-[#854442] mb-4 tracking-tighter">আমাদের সম্পর্কে</h3>
          <p className="text-gray-600 text-sm font-bold leading-relaxed mb-6">
            বনমায়া শুধু একটি রেস্টুরেন্ট নয়, এটি একটি আস্থার নাম। মিরপুর ২ এর লাভ রোডে আমরা নিয়ে এসেছি লাইভ বেকারি কনসেপ্ট, যেখানে প্রতিটি খাবার আপনার চোখের সামনে অত্যন্ত যত্ন এবং বিশুদ্ধতার সাথে তৈরি করা হয়।
          </p>
          <div className="flex gap-4">
            <div className="bg-[#FFFDF5] p-3 rounded-2xl border border-[#FFB237]/20 flex-1">
              <p className="text-[#FFB237] font-black text-lg leading-none">১০০%</p>
              <p className="text-[9px] font-bold uppercase text-gray-400 mt-1">বিশুদ্ধতা</p>
            </div>
            <div className="bg-[#FFFDF5] p-3 rounded-2xl border border-[#FFB237]/20 flex-1">
              <p className="text-[#FFB237] font-black text-lg leading-none">তাজা</p>
              <p className="text-[9px] font-bold uppercase text-gray-400 mt-1">উপকরণ</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- যোগাযোগ --- */}
      <section className="px-5 pb-10">
        <h3 className="text-2xl font-black italic text-[#854442] mb-6 tracking-tighter px-2">যোগাযোগ করুন</h3>
        <div className="grid grid-cols-1 gap-4">
          <a href="tel:16910" className="bg-[#854442] p-5 rounded-[30px] flex items-center gap-5 text-white active:scale-95 transition-all shadow-lg">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center border border-white/20 text-[#FFB237]">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase opacity-60 tracking-widest text-[#DFC8A8]">হেল্পলাইন</p>
              <p className="text-xl font-black tracking-tighter">১৬৯১০</p>
            </div>
            <ChevronRight className="ml-auto opacity-40 text-[#FFB237]" />
          </a>
          
          <div className="bg-white p-5 rounded-[30px] flex items-center gap-5 border-2 border-[#DFC8A8]/30 shadow-sm">
            <div className="w-12 h-12 bg-[#FFB237]/10 rounded-2xl flex items-center justify-center border border-[#FFB237]/20 text-[#FFB237]">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">ইমেইল</p>
              <p className="text-sm font-black text-[#854442]">support@bonomaya.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- ফুটার --- */}
      <footer className="bg-[#FFB237] text-[#854442] pt-16 pb-32 px-6 rounded-t-[55px] shadow-[0_-20px_50px_rgba(255,178,55,0.2)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-10">
            <div className="col-span-1 md:col-span-2">
              <div className="text-4xl font-black mb-6 italic text-[#854442]">BONOMAYA<span className="text-white">.</span></div>
              <p className="text-[#854442]/80 text-sm font-bold leading-relaxed max-w-xs mb-8 italic">মিরপুর ২ এর প্রিমিয়াম লাইভ বেকারি। তাজা স্বাদ আর বিশুদ্ধতার অঙ্গীকার।</p>
              <div className="flex gap-4">
                 {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <button key={i} className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center border border-[#854442]/10 hover:bg-[#854442] hover:text-white transition-all">
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-black mb-6 italic underline decoration-white underline-offset-8">লিঙ্ক</h4>
              <ul className="space-y-4 text-[#854442]/80 text-sm font-black italic">
                <li className="hover:text-white cursor-pointer transition">আমাদের মেনু</li>
                <li className="hover:text-white cursor-pointer transition">আমাদের গল্প</li>
                <li className="hover:text-white cursor-pointer transition">শর্তাবলী</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#854442]/10 pt-10 text-center text-[10px] font-black uppercase tracking-widest opacity-60">
            © ২০২৬ বনমায়া অফিশিয়াল কর্তৃপক্ষ | মিরপুর ২
          </div>
        </div>
      </footer>

      {/* --- অ্যাপ ফ্লোটিং ন্যাভিগেশন বার --- */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-[#854442] border-2 border-[#FFB237] shadow-[0_25px_50px_rgba(0,0,0,0.3)] rounded-[35px] px-10 py-5 flex justify-between items-center z-[120]">
        <button className="flex flex-col items-center gap-1.5 text-[#FFB237]">
          <Home size={24} fill="currentColor" />
          <span className="text-[9px] font-black uppercase tracking-widest">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-white/50 hover:text-[#FFB237] transition-colors">
          <Zap size={24} />
          <span className="text-[9px] font-black uppercase tracking-widest">Offers</span>
        </button>
        <button onClick={() => setIsLoginOpen(true)} className="flex flex-col items-center gap-1.5 text-white/50 hover:text-[#FFB237] transition-colors">
          <User size={24} />
          <span className="text-[9px] font-black uppercase tracking-widest">Account</span>
        </button>
      </nav>
    </main>
  );
}