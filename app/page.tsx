import { ShoppingBag, Home as HomeIcon, Phone, UtensilsCrossed } from "lucide-react";

export default function Home() {
  const menuItems = [
    { name: "লাইভ বিরিয়ানি", price: "১৮০৳", desc: "খাসির কাচ্চি ও সুগন্ধি চালের বিরিয়ানি", icon: "🍛" },
    { name: "বনমায়া স্পেশাল পিজ্জা", price: "৩৫০৳", desc: "চিকেন, চিজ আর সিক্রেট সসের মিশ্রণ", icon: "🍕" },
    { name: "বেকারি ফ্রেশ বার্গার", price: "১২০৳", desc: "আমাদের নিজের বানানো নরম বানে তৈরি", icon: "🍔" },
    { name: "ক্রিসপি চিকেন ফ্রাই", price: "৯০৳", desc: "স্পেশাল মশলায় ভাজা মুচমুচে চিকেন", icon: "🍗" },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pb-24">
      {/* App Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md px-6 py-4 flex justify-between items-center border-b border-gray-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center text-white font-black italic">B</div>
          <span className="text-xl font-black text-gray-900 tracking-tighter uppercase">Bonomaya</span>
        </div>
        <button className="relative p-2 bg-orange-50 rounded-full text-orange-600">
          <ShoppingBag size={24} />
          <span className="absolute top-0 right-0 w-4 h-4 bg-orange-600 text-white text-[10px] flex items-center justify-center rounded-full border-2 border-white font-bold">৩</span>
        </button>
      </header>

      {/* Hero / Promo Slider Style */}
      <section className="px-5 py-6">
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 to-orange-700 rounded-3xl p-8 text-white shadow-xl">
          <div className="relative z-10">
            <h2 className="text-3xl font-black mb-2 leading-tight">২৫% পর্যন্ত ডিসকাউন্ট! 🔥</h2>
            <p className="text-orange-100 text-sm mb-4">আপনার প্রথম অনলাইন অর্ডারে পান আকর্ষণীয় ছাড়।</p>
            <button className="bg-white text-orange-600 px-6 py-2 rounded-xl font-bold text-sm shadow-lg">অর্ডার করুন</button>
          </div>
          <div className="absolute -right-4 -bottom-4 opacity-20 scale-150 transform rotate-12">🍔</div>
        </div>
      </section>

      {/* Categories / Quick Actions */}
      <section className="px-5 mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4">ক্যাটাগরি</h3>
        <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar">
          {['বিরিয়ানি', 'পিজ্জা', 'বারগার', 'কেক', 'জুস'].map((cat) => (
            <button key={cat} className="flex-shrink-0 px-6 py-2 bg-white border border-gray-100 rounded-full shadow-sm text-sm font-semibold hover:bg-orange-600 hover:text-white transition-all">
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Menu List - Card Style */}
      <section className="px-5" id="menu">
        <h3 className="text-lg font-bold text-gray-800 mb-4">জনপ্রিয় মেনু</h3>
        <div className="space-y-4">
          {menuItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-2xl flex items-center gap-4 shadow-sm border border-gray-50 active:scale-95 transition-transform cursor-pointer">
              <div className="w-20 h-20 bg-orange-50 rounded-xl flex items-center justify-center text-4xl shadow-inner">
                {item.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">{item.name}</h4>
                <p className="text-xs text-gray-500 line-clamp-1">{item.desc}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-orange-600 font-black">{item.price}</span>
                  <button className="bg-gray-900 text-white text-xs px-4 py-1.5 rounded-lg font-bold uppercase">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Navigation Bar (App Like) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/95 backdrop-blur-lg border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] rounded-full px-8 py-4 flex justify-between items-center z-[100]">
        <button className="flex flex-col items-center gap-1 text-orange-600">
          <HomeIcon size={24} />
          <span className="text-[10px] font-bold">হোম</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-gray-400">
          <UtensilsCrossed size={24} />
          <span className="text-[10px] font-bold">মেনু</span>
        </button>
        <a href="https://wa.me/88017XXXXXXXX" className="flex flex-col items-center gap-1 text-gray-400">
          <Phone size={24} />
          <span className="text-[10px] font-bold">যোগাযোগ</span>
        </a>
      </nav>
    </main>
  );
}