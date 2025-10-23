import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={100}
        className="object-cover object-top"
        alt="نوبت‌دهی کسب و کارهای مختلف در سریع‌ترین زمان"
      />

      <div className="relative z-10 text-center">
        <h1 className="mb-20 text-7xl font-normal text-gray-50">
          به صفا خوش آمدید
        </h1>
        <Link
          href="/services"
          className="rounded-xl bg-indigo-500 px-8 py-4 text-lg font-semibold text-gray-100 transition-all hover:bg-indigo-600"
        >
          با چند کلیک نوبتت رو بگیر
        </Link>
      </div>
    </main>
  );
}
