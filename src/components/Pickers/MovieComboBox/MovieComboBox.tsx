import {
  Button,
  ComboBox,
  ComboBoxProps,
  ComboBoxStateContext,
  Group,
  Input,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
} from "react-aria-components";

import SearchIcon from "@icons/search-icon.svg?react";
import { useContext, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { fetcher, getGenres, getPoster, getReleaseYear } from "@/utils";
import useSWR from "swr";
import { useDebounce } from "@uidotdev/usehooks";

export interface MovieComboBoxProps
  extends Omit<ComboBoxProps<Movie>, "children"> {
  children: React.ReactNode | ((item: Movie) => React.ReactNode);
  isLoading: boolean;
  allowsEmptyCollection: boolean;
}

const PopoverWithListBox = ({
  isLoading,
  triggerRef,
}: {
  isLoading: boolean;
  triggerRef: React.MutableRefObject<null>;
}) => {
  const state = useContext(ComboBoxStateContext);
  return (
    <Popover
      isOpen={
        state &&
        !isLoading &&
        state.isOpen &&
        state.collection.size !== 0 &&
        state.inputValue !== ""
      }
      triggerRef={triggerRef}
      className="max-h-96 w-[--trigger-width] overflow-auto rounded shadow-lg
        entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out bg-gray-900"
    >
      <ListBox<Movie> className="outline-none bg-gray-900">
        {(item) => <MovieItem movie={item} textValue={item.title} />}
      </ListBox>
    </Popover>
  );
};

export const MovieComboBox = (props: MovieComboBoxProps) => {
  const containerRef = useRef(null);

  const debouncedInputValue = useDebounce(props.inputValue, 650);

  const showNoResults =
    !props.isLoading &&
    Array.from(props.items || []).length === 0 &&
    (props.inputValue || "").length > 0 &&
    (debouncedInputValue || "").length > 0;

  return (
    <div className="relative" ref={containerRef}>
      <ComboBox {...props}>
        <Group className="rounded bg-gray-100 text-black/60 body overflow-hidden focus-within:text-black/87 transition-colors relative">
          <Input
            className="bg-transparent outline-none selection:bg-yellow-600/36 flex-1 w-full py-2 pl-9 pr-1.5
          border-2 border-transparent focus:border-yellow-600"
          />
          <Button>
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
          </Button>
        </Group>
        <PopoverWithListBox
          isLoading={props.isLoading}
          triggerRef={containerRef}
        />
      </ComboBox>
      {showNoResults && (
        <div
          className="overflow-auto absolute translate-y-2 fade-in animate-in rounded shadow-lg py-6 px-3
        text-gray-100 left-0 right-0 bg-gray-900"
        >
          <span className="body-2 text-gray-100">
            Sorry, no movies matched your search. Please try a different phrase.
          </span>
        </div>
      )}
      {props.inputValue && props.isLoading && (
        <div
          className="h-64 left-0 right-0 absolute translate-y-2 overflow-auto rounded shadow-lg items-center justify-center flex
        text-gray-100 animate-in fade-in bg-gray-900"
        >
          <span className="loading loading-dots loading-lg scale-150"></span>
        </div>
      )}
    </div>
  );
};

export const MovieItem = (
  props: ListBoxItemProps & {
    movie: Movie;
  },
) => {
  const [isLoadingPoster, setIsLoadingPoster] = useState(
    props.movie.poster_path ? true : false,
  );

  const { data: { genres } = { genres: [] } } = useSWR<ListGenresResult>(
    "/api/genre/movie/list",
    fetcher,
  );

  return (
    <ListBoxItem
      {...props}
      className="flex p-3 text-gray-100 items-center gap-5 cursor-pointer outline-none focus:bg-white/12"
    >
      <picture
        className={twMerge(
          "w-14 h-20 rounded lg:block hidden overflow-hidden",
          isLoadingPoster ? "skeleton" : "gradient",
        )}
      >
        {props.movie.poster_path && (
          <img
            src={getPoster(props.movie)}
            className="max-w-full h-auto"
            onLoad={() => setIsLoadingPoster(false)}
          />
        )}
      </picture>
      <div className="flex flex-col gap-2">
        <h2 className="md:headline-m text-sm">{props.movie.title}</h2>
        <div className="flex items-center gap-2">
          {getGenres(props.movie, genres).map((genre) => (
            <div key={genre} className="badge bg-yellow-600 text-gray-900">
              {genre}
            </div>
          ))}
        </div>
        <span className="body-2 md:inline-block hidden">
          {getReleaseYear(props.movie) || "Release Date: To Be Announced"}
        </span>
      </div>
    </ListBoxItem>
  );
};
