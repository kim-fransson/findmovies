import Logo from "@icons/logo.svg?react";
import { MediaAutoSearch } from "@/components/MediaAutoSearch/MediaAutoSearch";

export default function App() {
  return (
    <div className="h-dvh bg-black">
      <nav>
        <div className="lg:py-9 lg:px-8 py-5 px-4 lg:flex-row flex-col flex lg:gap-16 gap-4 lg:items-center max-w-7xl mx-auto">
          <Logo />
          <div className="flex-1">
            <MediaAutoSearch />
          </div>
        </div>
      </nav>
    </div>
  );
}
