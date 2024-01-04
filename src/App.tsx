import Logo from "@icons/logo.svg?react";
import { MediaAutoSearch, MediaTabs } from "@/components";
import { UpcomingMovies } from "./components/Collections/UpcomingMovies/UpcomingMovies";

export default function App() {
  return (
    <div className="h-dvh bg-black lg:px-32 md:px-8 px-4">
      <nav>
        <div className="mx-auto lg:flex-row flex-col lg:py-9 py-5 flex lg:gap-16 gap-4 lg:items-center">
          <Logo />
          <div className="flex-1">
            <MediaAutoSearch />
          </div>
        </div>
      </nav>
      <div className="lg:my-16 md:my-8 my-4 lg:-mr-32 md:-mr-8 -mr-4">
        <h2 className="headline-l mb-5 text-yellow-600">Featured Today</h2>
        <MediaTabs />

        <h2 className="headline-l lg:mt-16 md:mt-8 my-5 text-yellow-600">
          Next on the Big Screen
        </h2>
        <UpcomingMovies />
      </div>
    </div>
  );
}
