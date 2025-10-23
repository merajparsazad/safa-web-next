import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";

function SignOutButton() {
  return (
    <button className="flex w-full cursor-pointer items-center gap-4 px-5 py-3 font-semibold text-gray-200 transition-colors hover:bg-gray-900 hover:text-gray-100">
      <ArrowRightStartOnRectangleIcon className="h-5 w-5 text-gray-500" />
      <span>خروج</span>
    </button>
  );
}

export default SignOutButton;
