import React from "react";
import "../styles/globals.css";

export const metadata = {
  title: "به‌حساب - نرم‌افزار حسابداری ابری",
  description: "SaaS حسابداری مدرن برای کسب‌وکارهای ایران و جهان",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>

      <body>{children}</body>
    </html>
  );
}
