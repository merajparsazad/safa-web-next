import Image from "next/image";
import Link from "next/link";
import { Service } from "@/app/_lib/data-apis";
import { ClockIcon } from "@heroicons/react/24/outline";

type ServiceCardProps = {
  service: Service;
};

function ServiceCard({ service }: ServiceCardProps) {
  const { id, name, duration, price, description, image } = service;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl hover:[&>div>img]:opacity-60">
      <div className="relative aspect-square">
        <Image
          sizes="(max-width: 768px) 100vw, 50vw"
          src={image}
          priority
          fill
          alt={name}
          className="border-r border-gray-800 object-cover transition-opacity duration-200"
        />
      </div>

      <div className="flex-grow">
        <div className="bg-gray-950 px-7 pt-5 pb-4">
          <h3 className="mb-3 text-2xl font-semibold text-indigo-500">
            {name}
          </h3>

          <div className="mb-3 flex items-center gap-3">
            <ClockIcon className="h-6 w-6 text-gray-600" />
            <p className="text-lg text-gray-200">
              مدت زمان: <span className="font-bold">{duration} </span>دقیقه
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-3">
            <span className="text-2xl font-semibold">{price} تومان</span>
          </p>
        </div>

        <div className="border-t border-t-gray-800 bg-gray-950 text-right">
          <Link
            href={`/services/${id}`}
            className="inline-block border-l border-gray-800 px-6 py-4 transition-all hover:bg-indigo-600"
          >
            اطلاعات و دریافت نوبت &larr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
