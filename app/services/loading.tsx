import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="grid min-h-[50vh] place-items-center text-center">
      <Spinner />
      <p className="mt-4 text-xl text-gray-200">درحال بارگذاری خدمات...</p>
    </div>
  );
}
