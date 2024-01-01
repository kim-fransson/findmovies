import Logo from "@icons/logo.svg?react";
import { MovieSearch } from "@components/MovieSearch/MovieSearch";

export default function App() {
  return (
    <div className="h-dvh bg-black">
      <nav>
        <div className="py-9 flex gap-16 items-center max-w-7xl mx-auto">
          <Logo />
          <div className="flex-1">
            <MovieSearch />
          </div>
        </div>
      </nav>
    </div>
  );
}
