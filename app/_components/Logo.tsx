import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-4">
      <Image src={logo} quality={80} height={60} width={60} alt="Safa logo" />
      <span className="text-2xl font-semibold text-gray-100">صفا</span>
    </Link>
  );
}

export default Logo;
