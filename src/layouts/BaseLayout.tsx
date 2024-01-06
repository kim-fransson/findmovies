import { PropsWithChildren } from "react";
import Logo from "@icons/logo.svg?react";
import { Link } from "react-router-dom";
import { MediaAutoSearch } from "@/components";

export const BaseLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-dvh bg-black flex flex-col">
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
      <main className="overflow-hidden flex-1">{children}</main>
      <footer className="mt-[420px] flex lg:flex-row flex-col lg:justify-center items-center px-8 py-4 lg:gap-8 gap-4">
        <div className="flex lg:flex-row flex-col items-center gap-2">
          <span className="select-none rounded-lg bg-[#01b4e4] px-2 py-1 text-gray-100 body-2">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB
          </span>
          <a
            className="body-2 hover:text-[#01b4e4]"
            href="https://www.themoviedb.org"
            target="_blank"
            title="themoviedb.org"
          >
            themoviedb.org
          </a>
        </div>
        <div className="flex lg:flex-row flex-col items-center gap-2">
          <span className="select-none rounded-lg bg-[#672871] px-2 py-1 text-gray-100 body-2">
            Designs from
          </span>
          <a
            className="body-2 hover:text-[#672871]"
            href="https://bigdevsoon.me/"
            target="_blank"
            title="BigDevSoon"
          >
            BigDevSoon.me
          </a>
        </div>
      </footer>
    </div>
  );
};
