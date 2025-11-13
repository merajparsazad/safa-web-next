import ServiceCard from "@/app/_components/ServiceCard";
import { getServices } from "@/app/_lib/data-apis";

async function ServiceList({ filter }: { filter: string }) {
  const services = await getServices();

  if (!services?.length) return null;

  let displayService = services;
  if (filter === "all") displayService = services;
  if (filter === "cheap")
    displayService = services.filter((service) => service.price < 200000);
  if (filter === "moderate")
    displayService = services.filter(
      (service) => 200000 <= service.price && service.price <= 500000,
    );
  if (filter === "expensive")
    displayService = services.filter((service) => service.price > 500000);

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:grid-cols-3 xl:gap-14">
      {displayService.map((service) => (
        <ServiceCard service={service} key={service.id} />
      ))}
    </div>
  );
}

export default ServiceList;
