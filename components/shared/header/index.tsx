import { ShoppingCart, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import ModeToggle from "./mode-toggle";

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

        <div className="space-x-2">
          <ModeToggle />
          <Button asChild variant="ghost">
            <Link href="/cart">
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href="/sign-in">
              <User2Icon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
