import { getServiceById } from "@/app/_lib/data-apis";
import { BanknotesIcon, ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type ServicePageProps = {
  params: Promise<{ serviceId: string | number }>;
};

export async function generateMetadata({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const { name } = await getServiceById(serviceId);
  const shortenName = name.split(" ").slice(0, 2).join(" ");

  return { title: shortenName };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceId } = await params;
  const service = await getServiceById(serviceId);

  const { name, duration, price, description, image } = service;

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <div className="mb-24 grid grid-cols-[3fr_4fr] gap-20 rounded-lg border border-gray-700 px-10 py-3">
        <div className="relative">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="rounded-lg object-cover"
            src={image}
            alt={name}
          />
        </div>

        <div>
          <h3 className="mt-5 text-3xl font-black text-indigo-100">{name}</h3>

          <ul className="my-10 flex flex-col gap-4">
            <li className="flex items-center gap-3">
              <ClockIcon className="h-5 w-5 text-gray-600" />
              <p className="text-lg">
                مدت زمان اجرا: <span className="font-bold">{duration}</span>{" "}
                دقیقه
              </p>
            </li>
            <li className="flex items-center gap-3">
              <BanknotesIcon className="h-5 w-5 text-gray-600" />
              <p className="text-lg">
                بها: <span className="font-bold">{price}</span> تومان
              </p>
            </li>
          </ul>

          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">توضیحات</h3>
            <p className="text-lg text-gray-300">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
