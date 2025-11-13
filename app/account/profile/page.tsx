import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "ویرایش پروفایل",
};

export default function Page() {
  return (
    <div>
      <h2 className="mb-7 text-2xl font-semibold text-indigo-400">
        پروفایل خود را ویرایش کنید
      </h2>

      <p className="mb-8 text-lg text-gray-200">
        با تکمیل اطلاعات زیر، روند پذیرش شما سریع‌تر و با دقت بیشتری انجام خواهد
        شد. از همکاری شما سپاسگزاریم.
      </p>

      <UpdateProfileForm />
    </div>
  );
}
