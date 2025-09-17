import Image from "next/image";
import Link from "next/link";

import { APP_NAME } from "@/lib/constants";

import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt={`${APP_NAME} logo`}
              width={48}
              height={48}
              priority={true}
            />

            <span className="hidden font-bold text-2xl ml-3 lg:block">
              {APP_NAME}
            </span>
          </Link>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
