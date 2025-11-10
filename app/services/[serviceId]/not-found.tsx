import Link from "next/link";

function NotFound() {
  return (
    <main className="mt-4 space-y-6 text-center">
      <h1 className="text-3xl font-semibold">خدمت مورد نظر یافت نشد :(</h1>
      <Link
        href="/services"
        className="inline-block rounded-lg bg-indigo-500 px-6 py-3 text-lg text-gray-100 transition-colors hover:bg-indigo-700"
      >
        برگشت به صفحه خدمات
      </Link>
    </main>
  );
}

export default NotFound;
