export type Service = {
  id: string;
  business_id: number;
  name: string;
  duration: number;
  price: number;
  description: string;
  image: string;
};

async function apiFetch<T>(endpoint: string): Promise<T> {
  const url = `${process.env.BASE_URL}${endpoint}`;

  const response = await fetch(url);

  if (!response.ok) {
    const errorMessage = `خطا در دریافت داده‌ها از ${endpoint}. کد: ${response.status}`;
    throw new Error(errorMessage);
  }

  const data: T = await response.json();
  return data;
}

export async function getServices(): Promise<Service[]> {
  return apiFetch<Service[]>("/services");
}
