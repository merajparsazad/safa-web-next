import ServiceCard from "@/app/_components/ServiceCard";
import { getServices } from "@/app/_lib/data-apis";

async function ServiceList() {
  const services = await getServices();

  if (!services.length) return null;

  return (
    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 xl:grid-cols-3 xl:gap-14">
      {services.map((service) => (
        <ServiceCard service={service} key={service.id} />
      ))}
    </div>
  );
}

export default ServiceList;
