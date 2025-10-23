import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-xl">
      <ul className="flex items-center gap-16">
        <li>
          <Link
            href="/services"
            className="transition-colors hover:text-indigo-400"
          >
            خدمات
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="transition-colors hover:text-indigo-400"
          >
            درباره ما
          </Link>
        </li>
        <li>
          <Link
            href="/account"
            className="transition-colors hover:text-indigo-400"
          >
            حساب کاربری
          </Link>
        </li>
      </ul>
    </nav>
  );
}
