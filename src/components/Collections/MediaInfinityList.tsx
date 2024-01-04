// MediaInfinityList.jsx
import { MediaCard } from "@/components/Display/MediaCard/MediaCard";
import {
  fetcher,
  filterUniqueMedias,
  generateDummyList,
  getTitle,
} from "@/utils";
import { useDebounce } from "@uidotdev/usehooks";
import { motion } from "framer-motion";
import { UIEvent, useEffect, useState } from "react";
import { ListBox, ListBoxItem } from "react-aria-components";
import useSWRInfinite from "swr/infinite";

// todo: infinite loading indicator?
// ? no fetching when there is no more data? (edge case) (need to check swr cache)
export const MediaInfinityList = ({
  apiEndpoint,
  ariaLabel,
}: {
  apiEndpoint: string;
  ariaLabel: string;
}) => {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [scrollPositionThreshold, setScrollPositionThreshold] = useState(0);
  const debouncedScrollPosition = useDebounce(scrollPositionThreshold, 500);

  const getKey = (pageIndex: number, previousPageData: TrendingResult) => {
    if (pageIndex === 0) {
      return apiEndpoint;
    }

    if (
      previousPageData &&
      previousPageData.total_pages === previousPageData.page
    ) {
      return null;
    }

    return `${apiEndpoint}?page=${previousPageData.page + 1}`;
  };

  const { data, size, setSize, isLoading } = useSWRInfinite<TrendingResult>(
    getKey,
    fetcher,
    {
      onSuccess: () => setIsLoadingMore(false),
      onError: () => setIsLoadingMore(false),
    },
  );

  useEffect(() => {
    if (debouncedScrollPosition >= 70 && !isLoadingMore) {
      setSize(size + 1);
      setIsLoadingMore(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedScrollPosition]);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const list = e.target as HTMLDivElement;
    const scrollPosition =
      ((list.scrollLeft + list.clientWidth) / list.scrollWidth) * 100;
    setScrollPositionThreshold(scrollPosition);
  };

  return (
    <div className="relative">
      <div
        onScroll={handleScroll}
        className="outline-none overflow-x-auto pt-8 scrollbar-hide"
      >
        <ListBox
          aria-label={ariaLabel}
          orientation="horizontal"
          items={
            isLoading
              ? (generateDummyList() as Movie[])
              : filterUniqueMedias(data)
          }
          selectionMode="single"
          disallowEmptySelection={true}
          className="flex gap-8"
        >
          {(item) => (
            <ListBoxItem
              textValue={getTitle(item)}
              className="outline-none cursor-pointer border-transparent p-1 rounded-lg border-2 focus-visible:border-yellow-600"
            >
              <motion.div whileHover={{ y: -16 }}>
                <MediaCard media={item} isLoading={isLoading} />
              </motion.div>
            </ListBoxItem>
          )}
        </ListBox>
      </div>
      {isLoadingMore && debouncedScrollPosition > 95 && (
        <span className="loading loading-spinner loading-lg scale-150 gradient absolute right-4 top-1/2 -translate-y-1/2"></span>
      )}
    </div>
  );
};
