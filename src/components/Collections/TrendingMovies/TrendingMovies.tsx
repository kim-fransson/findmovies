import { MediaCard } from "@/components/Display/MediaCard/MediaCard";
import { fetcher, generateDummyList, getTitle } from "@/utils";
import { useState } from "react";
import { ListBox, ListBoxItem } from "react-aria-components";
import useSWR from "swr";

export const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);
  const { isLoading } = useSWR<TrendingMovieResult>(
    `/api/trending/movie/day`,
    fetcher,
    { onSuccess: (data) => setTrendingMovies(data.results || []) },
  );
  return (
    <ListBox
      aria-label="Albums"
      orientation="horizontal"
      items={isLoading ? (generateDummyList() as Movie[]) : trendingMovies}
      selectionMode="single"
      disallowEmptySelection={true}
      className="flex gap-8"
    >
      {(item) => (
        <ListBoxItem
          textValue={getTitle(item)}
          className="outline-none cursor-pointer border-transparent p-1 rounded-lg border-2 focus-visible:border-yellow-600"
        >
          <MediaCard media={item} isLoading={isLoading} />
        </ListBoxItem>
      )}
    </ListBox>
  );
};
