import { PropsWithChildren } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-aria-components";
import { motion } from "framer-motion";
import { TrendingMovies } from "@/components/Collections/TrendingMovies/TrendingMovies";
import { TrendingSeries } from "@/components/Collections/TrendingSeries/TrendingSeries";

const MediaTab = ({ children, id }: PropsWithChildren & { id: string }) => {
  return (
    <Tab
      className="cursor-pointer px-4 relative mb-1 group body outline-none focus-visible:border-yellow-600 border-2 border-transparent"
      id={id}
    >
      {({ isSelected }) => (
        <>
          {children}
          {isSelected && (
            <motion.div
              layoutId="underline"
              className="absolute bg-white rounded-full left-0 right-0 h-1 -bottom-2"
            />
          )}
        </>
      )}
    </Tab>
  );
};

export const MediaTabs = () => {
  return (
    <Tabs className="flex flex-col">
      <TabList
        className="flex border-b-white/12 border-b"
        aria-label="Featured today"
      >
        <MediaTab id="movies">Movies</MediaTab>
        <MediaTab id="series">Series</MediaTab>
      </TabList>
      <TabPanel id="movies">
        <TrendingMovies />
      </TabPanel>
      <TabPanel id="series">
        <TrendingSeries />
      </TabPanel>
    </Tabs>
  );
};
