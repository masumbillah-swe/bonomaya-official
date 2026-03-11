import Image from "next/image";

export default function Home() {
  const menuItems = [
    { name: "লাইভ বিরিয়ানি", price: "১৮০৳", desc: "খাসির কাচ্চি ও সুগন্ধি চালের বিরিয়ানি", icon: "🍛" },
    { name: "বনমায়া স্পেশাল পিজ্জা", price: "৩৫০৳", desc: "চিকেন, চিজ আর সিক্রেট সসের মিশ্রণ", icon: "🍕" },
    { name: "বেকারি ফ্রেশ বার্গার", price: "১২০৳", desc: "আমাদের নিজের বানানো নরম বানে তৈরি", icon: "🍔" },
  ];

  return (
    <main className="min-h-screen bg-[#FFFBF0]">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-10 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="text-2xl font-black text-orange-600 tracking-tighter">BONOMAYA.</div>
        <div className="hidden md:flex space-x-8 font-bold text-gray-700">
          <a href="#menu" className="hover:text-orange-600">মেনু</a>
          <a href="#about" className="hover:text-orange-600">আমাদের গল্প</a>
          <a href="tel:017XXXXXXXX" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition shadow-lg">কল করুন</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <div className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full text-sm font-bold mb-6">✨ এখন লাইভ বেকিং চলছে</div>
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-tight">
          তাজা স্বাদ, <br/><span className="text-orange-600 italic">সরাসরি ওভেন থেকে!</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10 font-medium">
          বনমায়া লাইভ বেকারি ও ফাস্ট ফুড — আমরা ফ্রেশ উপাদানে বিশ্বাসী। 
          তৈরি হচ্ছে আপনার চোখের সামনে, পরিবেশিত হচ্ছে পরম মমতায়।
        </p>
        <div className="flex gap-4">
          <a href="#menu" className="bg-gray-900 text-white px-10 py-5 rounded-2xl font-bold hover:scale-105 transition shadow-2xl">
            আজকের মেনু দেখুন
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-10 bg-white rounded-[50px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-gray-900">আমাদের সিগনেচার মেনু</h2>
            <div className="h-1.5 w-20 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="group p-8 bg-orange-50 rounded-[32px] hover:bg-orange-600 hover:text-white transition-all duration-500 cursor-pointer shadow-xl hover:-translate-y-2">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="opacity-80 mb-4">{item.desc}</p>
                <div className="text-2xl font-black text-orange-600 group-hover:text-white">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-10 text-center bg-orange-600 text-white">
        <h2 className="text-4xl font-black mb-8">বনমায়ার পথচলা</h2>
        <p className="max-w-3xl mx-auto text-xl opacity-90 leading-relaxed font-medium">
          সাভারের বুকে বনমায়া শুধু একটি বেকারি নয়, এটি একটি আবেগ। 
          আপনার সকালের নাস্তা থেকে শুরু করে রাতের ডিনার — সবখানে আমরা আছি সেরা স্বাদ নিয়ে।
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-center">
        <div className="mb-6 text-2xl font-bold">BONOMAYA</div>
        <p className="text-gray-400">সাভার, ঢাকা | ফোন: ০১৭XXXXXXXX</p>
        <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
          © 2026 Bonomaya Official Site | Developed by Masum Billah (SWE)
        </div>
      </footer>
    </main>
  );
}