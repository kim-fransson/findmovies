import Logo from "@icons/logo.svg?react";
import { MediaAutoSearch, MediaTabs } from "@/components";

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
      <div className="lg:mt-16 md:mt-8 mt-4 flex flex-col gap-5 lg:-mr-32 md:-mr-8 -mr-4">
        <h2 className="headline-l text-yellow-600">Featured Today</h2>
        <MediaTabs />
      </div>
    </div>
  );
}
