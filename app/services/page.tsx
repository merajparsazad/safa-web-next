import { Suspense } from "react";
import ServiceList from "@/app/_components/ServiceList";
import Spinner from "@/app/_components/Spinner";
import Filter from "@/app/_components/Filter";

// As i use searchParams, the page is already dynamic
export const revalidate = 300;

export const metadata = {
  title: "خدمات",
};

type ServicesPageProps = {
  searchParams?: { price?: string };
};

export default async function Services({ searchParams }: ServicesPageProps) {
  const filter = searchParams?.price ?? "all";

  return (
    <div>
      <h1 className="mb-5 text-4xl font-medium text-indigo-400">
        پشتیبانی از تمامی کسب و کارها
      </h1>
      <p className="mb-10 text-lg text-gray-200">
        سامانه صفا با هدف تسهیل فرآیند نوبت‌دهی برای تمامی کسب‌وکارها طراحی شده
        است؛ از کلینیک‌ها و سالن‌های زیبایی گرفته تا آموزشگاه‌ها، دفاتر خدماتی و
        فروشگاه‌ها. این سامانه با قابلیت شخصی‌سازی و مدیریت ساده، به صاحبان
        کسب‌وکار کمک می‌کند تا نوبت‌های مشتریان خود را به‌صورت هوشمند و منظم
        مدیریت کرده و تجربه‌ای سریع و کارآمد برای مشتریان فراهم آورند.
      </p>

      <div className="mb-5 flex justify-start">
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <ServiceList filter={filter} />
      </Suspense>
    </div>
  );
}
