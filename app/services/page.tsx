import ServiceCard from "@/app/_components/ServiceCard";
import { getServices } from "@/app/_lib/data-apis";

export const metadata = {
  title: "خدمات",
};

export default async function Services() {
  const services = await getServices();

  if (services.length === 0)
    return <p className="text-lg text-gray-200">هیچ خدمتی یافت نشد.</p>;

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

      {services.length > 0 && (
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:grid-cols-3 xl:gap-14">
          {services.map((service) => (
            <ServiceCard service={service} key={service.id} />
          ))}
        </div>
      )}
    </div>
  );
}
