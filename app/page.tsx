import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="flex justify-between items-center py-6 px-10 bg-white sticky top-0 z-50 shadow-sm">
        <div className="text-2xl font-black text-orange-600 tracking-tighter">
          BONOMAYA.
        </div>
        <div className="space-x-8 font-medium text-gray-700">
          <a href="#menu" className="hover:text-orange-600 transition">মেনু</a>
          <a href="#about" className="hover:text-orange-600 transition">আমাদের গল্প</a>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition">
            অর্ডার করুন
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4 bg-orange-50">
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-6 leading-none">
          FRESHLY <span className="text-orange-600">BAKED</span><br/>EVERY DAY.
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mb-10">
          বনমায়া লাইভ বেকারি — যেখানে প্রতিটি কামড়ে পাবেন বিশুদ্ধতা আর ভালোবাসার স্বাদ। 
          আমরা বিশ্বাস করি তাজা খাবারই সেরা খাবার।
        </p>
        <div className="flex gap-4">
          <a href="#menu" className="bg-gray-900 text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            মেনু দেখুন
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 grid grid-cols-1 md:grid-cols-3 gap-10 px-10 text-center">
        <div className="p-8 border-2 border-orange-100 rounded-3xl">
          <h3 className="text-4xl font-bold text-orange-600 mb-2">১০০%</h3>
          <p className="text-gray-500 font-bold">বিশুদ্ধ উপাদান</p>
        </div>
        <div className="p-8 border-2 border-orange-100 rounded-3xl">
          <h3 className="text-4xl font-bold text-orange-600 mb-2">লাইভ</h3>
          <p className="text-gray-500 font-bold">ওভেন থেকে সরাসরি</p>
        </div>
        <div className="p-8 border-2 border-orange-100 rounded-3xl">
          <h3 className="text-4xl font-bold text-orange-600 mb-2">৫/৫</h3>
          <p className="text-gray-500 font-bold">কাস্টমার রেটিং</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 text-center">
        <p className="text-gray-400">© 2026 Bonomaya Official Site | Developed by Masum Billah</p>
      </footer>
    </main>
  );
}