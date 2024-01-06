import { MediaTabs } from "@/components";
import { UpcomingMovies } from "./components/Collections/UpcomingMovies/UpcomingMovies";
import { BaseLayout } from "./layouts/BaseLayout";

export default function App() {
  return (
    <BaseLayout>
      <div className="lg:my-16 md:my-8 my-4 lg:-mr-32 md:-mr-8 -mr-4">
        <h2 className="headline-l mb-5 text-yellow-600">Featured Today</h2>
        <MediaTabs />

        <h2 className="headline-l lg:mt-16 md:mt-8 my-5 text-yellow-600">
          Next on the Big Screen
        </h2>
        <UpcomingMovies />
      </div>
    </BaseLayout>
  );
}
