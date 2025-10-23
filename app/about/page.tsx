import Image from "next/image";
import Link from "next/link";
import about1 from "@/public/about-1.png";
import about2 from "@/public/about-2.png";

export const metadata = {
  title: "درباره ما",
};

export default function About() {
  return (
    <div className="grid grid-cols-5 items-center gap-x-24 gap-y-32 text-lg">
      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-indigo-400">
          به صفا خوش آمدید
        </h1>

        <div className="space-y-8">
          <p>
            صفا یک سامانه نوبت‌دهی آنلاین است که با هدف ساده‌سازی ارتباط میان
            مشتریان و کسب‌وکارها ایجاد شده است. ما تلاش کرده‌ایم تا با طراحی
            رابط کاربری روان و امکانات پیشرفته، فرآیند رزرو و مدیریت نوبت‌ها را
            برای همه آسان کنیم.
          </p>
          <p>
            این پلتفرم با در نظر گرفتن نیازهای متنوع مشاغل مختلف از جمله مراکز
            درمانی، سالن‌های زیبایی، آموزشگاه‌ها و دفاتر خدماتی، امکان تنظیم و
            مدیریت نوبت‌ها را به‌صورت کاملاً انعطاف‌پذیر فراهم می‌کند.
          </p>
          <p>
            هدف ما ایجاد تجربه‌ای یکپارچه، سریع و قابل اعتماد است تا صاحبان
            کسب‌وکار بتوانند تمرکز خود را بر ارائه خدمات باکیفیت بگذارند و
            مشتریان نیز بدون اتلاف وقت از خدمات دلخواه خود بهره‌مند شوند.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          className="rounded-xl"
          src={about1}
          alt="تصویر معرفی صفا"
          placeholder="blur"
        />
      </div>

      <div className="col-span-2">
        <Image
          className="rounded-xl"
          src={about2}
          alt="مدیریت نوبت‌دهی در صفا"
          placeholder="blur"
        />
      </div>

      <div className="col-span-3">
        <h1 className="mb-10 text-4xl font-medium text-indigo-400">
          رسالت و چشم‌انداز ما
        </h1>

        <div className="space-y-8">
          <p>
            ما باور داریم که فناوری باید در خدمت رشد و نظم کسب‌وکارها باشد. از
            همین‌رو، صفا با تکیه بر رویکردی کاربرمحور و طراحی هوشمند، بستری
            فراهم کرده است تا فرآیند رزرو و مدیریت زمان به شکلی مدرن و بدون
            پیچیدگی انجام گیرد.
          </p>
          <p>
            در آینده، هدف ما توسعه ابزارهایی هوشمندتر برای تحلیل داده‌ها، مدیریت
            مشتریان و بهبود تجربه کاربران است تا صفا به انتخاب نخست کسب‌وکارهای
            ایرانی برای نوبت‌دهی تبدیل شود.
          </p>

          <div>
            <Link
              href="/services"
              className="mt-4 inline-block rounded-xl bg-indigo-500 px-8 py-5 text-lg font-semibold text-gray-100 transition-all hover:bg-indigo-600"
            >
              مشاهده کسب و کارها
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
