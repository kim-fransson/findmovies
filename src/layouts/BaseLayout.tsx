import { PropsWithChildren } from "react";
import Logo from "@icons/logo.svg?react";
import { Link } from "react-router-dom";
import { MediaAutoSearch } from "@/components";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-dvh bg-black">
      <nav className="lg:px-32 md:px-8 px-4">
        <div className="mx-auto lg:flex-row flex-col lg:py-9 py-5 flex lg:gap-16 gap-4 lg:items-center">
          <Link to="/" className="cursor-pointer">
            <Logo />
          </Link>
          <div className="flex-1">
            <MediaAutoSearch />
          </div>
        </div>
      </nav>
      <main className="overflow-hidden">{children}</main>
    </div>
  );
};
