"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold">مشکلی پیش آمده!</h1>
      <p className="text-lg">{error.message}</p>

      <button
        onClick={reset}
        className="inline-block cursor-pointer rounded-md bg-indigo-500 px-6 py-3 text-lg text-gray-100 transition-colors hover:bg-indigo-700"
      >
        تلاش دوباره
      </button>
    </main>
  );
}
