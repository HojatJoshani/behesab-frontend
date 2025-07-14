// src/app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#f3f4f6] px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl max-w-xl w-full text-center space-y-6">
        <h1 className="text-4xl font-extrabold text-[#111827]">
          به <span className="text-[#22c55e]">به‌حساب</span> خوش آمدید
        </h1>
        <p className="text-[#4b5563] text-lg">
          داشبورد مدیریت مالی هوشمند برای شما
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <Link
            href="/signup"
            className="bg-[#22c55e] text-white px-6 py-2 rounded-full text-md font-medium hover:bg-green-600 transition"
          >
            ثبت‌نام
          </Link>
          <Link
            href="/login"
            className="bg-[#2563eb] text-white px-6 py-2 rounded-full text-md font-medium hover:bg-blue-700 transition"
          >
            ورود
          </Link>
        </div>
      </div>
    </main>
  );
}
