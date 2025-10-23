import Link from "next/link";

export const metadata = {
  title: "نوبت‌ها",
};

export default function Page() {
  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-indigo-400">
        نوبت‌های شما
      </h2>

      <p className="text-lg">
        شما هیچ نوبتی ندارید. برای دریافت نوبت صفحه‌{" "}
        <Link className="text-indigo-500 underline" href="/services">
          خدمات
        </Link>{" "}
        را چک کنید.
      </p>
    </div>
  );
}
