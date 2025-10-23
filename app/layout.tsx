import { ReactNode } from "react";
import "@/app/_styles/globals.css";
import { Noto_Sans_Arabic } from "next/font/google";
import Header from "./_components/Header";

type RootLayoutProps = {
  children: ReactNode;
};

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s | صفا",
    default: "خوش آمدید | صفا",
  },
  description:
    "سامانه نوبت‌دهی صفا، امکان رزرو و دریافت نوبت آنلاین از پزشک، آرایشگر، مشاور، کلینیک، سالن زیبایی و سایر ارائه‌دهندگان خدمات را فراهم می‌کند. با صفا بدون اتلاف وقت، نوبت خود را به‌صورت اینترنتی و سریع رزرو کنید.",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${notoSansArabic.className} relative flex min-h-screen flex-col bg-gray-800 text-gray-100 antialiased`}
      >
        <Header />

        <div className="grid flex-1 px-8 py-12">
          <main className="mx-auto w-full max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
