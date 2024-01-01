import Logo from "@icons/logo.svg?react";
import { MovieSearch } from "@components/MovieSearch/MovieSearch";

export default function App() {
  return (
    <div className="h-dvh bg-black">
      <nav>
        <div className="md:py-9 md:px-8 py-5 px-4 md:flex-row flex-col flex md:gap-16 gap-4 md:items-center max-w-7xl mx-auto">
          <Logo />
          <div className="flex-1">
            <MovieSearch />
          </div>
        </div>
      </nav>
    </div>
  );
}
