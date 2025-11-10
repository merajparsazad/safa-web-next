import { notFound } from "next/navigation";

export type Service = {
  id: string;
  business_id: number;
  name: string;
  duration: number;
  price: number;
  description: string;
  image: string;
};

// Get All Data
async function apiFetch<T>(endpoint: string): Promise<T> {
  const url = `${process.env.BASE_URL}${endpoint}`;

  const response = await fetch(url);

  if (!response.ok) {
    if (response.status === 404) notFound();
    const errorMessage = `خطا در دریافت داده‌ها از ${endpoint}. کد: ${response.status}`;
    throw new Error(errorMessage);
  }

  const data: T = await response.json();
  return data;
}

export async function getServices(): Promise<Service[]> {
  return apiFetch<Service[]>("/services");
}

// Get Data By Id
async function apiFetchById<T>(
  resource: string,
  id: string | number,
): Promise<T> {
  return apiFetch<T>(`${resource}/${id}`);
}

export async function getServiceById(id: string | number): Promise<Service> {
  return apiFetchById<Service>("/services", String(id));
}
