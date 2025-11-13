"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("price") ?? "all";

  const handleFilter = useCallback(
    (filter: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set("price", filter);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname],
  );

  return (
    <div className="flex rounded-md border border-gray-700">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        همه خدمات
      </Button>
      <Button
        filter="cheap"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        خدمات ارزان
      </Button>
      <Button
        filter="moderate"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        خدمات قیمت مناسب
      </Button>
      <Button
        filter="expensive"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        خدمات گران
      </Button>
    </div>
  );
}

type ButtonProps = {
  filter: string;
  handleFilter: (filter: string) => void;
  activeFilter: string;
  children: React.ReactNode;
};

function Button({ filter, handleFilter, activeFilter, children }: ButtonProps) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`cursor-pointer px-5 py-2 transition-colors hover:bg-gray-600 ${activeFilter === filter ? "bg-gray-600 text-gray-50" : ""}`}
    >
      {children}
    </button>
  );
}

export default Filter;
