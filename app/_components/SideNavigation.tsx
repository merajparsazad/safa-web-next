"use client";

import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { JSX } from "react";
import { usePathname } from "next/navigation";

type NavLinks = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const navLinks: NavLinks[] = [
  {
    name: "خانه",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-gray-500" />,
  },
  {
    name: "نوبت‌ها",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-gray-500" />,
  },
  {
    name: "پروفایل",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-gray-500" />,
  },
];

function SideNavigation() {
  const pathname = usePathname() ?? "";

  return (
    <nav className="border-e border-gray-700">
      <ul className="flex h-full flex-col gap-2 text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`flex items-center gap-4 px-5 py-3 font-semibold text-gray-200 transition-colors hover:bg-gray-900 hover:text-gray-100 ${pathname === link.href ? "bg-gray-900" : ""}`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
