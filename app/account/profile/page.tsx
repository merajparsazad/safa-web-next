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

      <form className="flex flex-col gap-6 rounded-xl bg-gray-900 px-12 py-8 text-lg">
        <div className="flex flex-col space-y-2">
          <label>نام و نام خانوادگی</label>
          <input
            disabled
            className="w-full rounded-sm bg-gray-200 px-5 py-3 text-gray-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label>شماره تماس</label>
          <input
            disabled
            className="w-full rounded-sm bg-gray-200 px-5 py-3 text-gray-800 shadow-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="flex flex-col space-y-2">
          <label htmlFor="city">شهر محل سکونت</label>
          <input
            name="city"
            className="w-full rounded-sm bg-gray-200 px-5 py-3 text-gray-800 shadow-sm"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          <button className="cursor-pointer rounded-xl bg-indigo-500 px-8 py-4 font-semibold text-gray-200 transition-all hover:bg-indigo-600 disabled:cursor-not-allowed disabled:bg-gray-500">
            ویرایش اطلاعات
          </button>
        </div>
      </form>
    </div>
  );
}
