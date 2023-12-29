import {
  Button,
  ComboBox,
  ComboBoxProps,
  Group,
  Input,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  Popover,
} from "react-aria-components";

import SearchIcon from "@icons/search-icon.svg?react";
import { useRef } from "react";

export interface MovieInfo {
  id: number;
  poster: string;
  title: string;
  release: number;
  mainActors: string[];
}

export interface MovieComboBoxProps
  extends Omit<ComboBoxProps<MovieInfo>, "children"> {
  children: React.ReactNode | ((item: MovieInfo) => React.ReactNode);
}

export const MovieComboBox = (props: MovieComboBoxProps) => {
  const containerRef = useRef(null);
  return (
    <ComboBox {...props}>
      <Group
        ref={containerRef}
        className="rounded bg-gray-100 text-black/60 body overflow-hidden focus-within:text-black/87 transition-colors relative"
      >
        <Input
          className="bg-transparent outline-none selection:bg-yellow-600/36 flex-1 w-full py-2 pl-9 pr-1.5
          border-2 border-transparent focus:border-yellow-600"
        />
        <Button>
          <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
        </Button>
      </Group>
      <Popover
        isNonModal
        triggerRef={containerRef}
        className="max-h-96 w-[--trigger-width] overflow-auto rounded shadow-lg
        entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
      >
        <ListBox<MovieInfo> className="outline-none bg-gray-900">
          {(item) => (
            <MovieItem
              textValue={item.title}
              poster={item.poster}
              title={item.title}
              release={item.release}
              mainActors={item.mainActors}
            />
          )}
        </ListBox>
      </Popover>
    </ComboBox>
  );
};

export const MovieItem = (
  props: ListBoxItemProps & {
    poster: string;
    title: string;
    release: number;
    mainActors: string[];
  },
) => {
  const { poster, title, release, mainActors } = props;
  return (
    <ListBoxItem
      {...props}
      className="flex p-3 text-gray-100 items-center gap-5 cursor-pointer outline-none focus:bg-white/12"
    >
      <picture className="w-14 h-20 rounded bg-gray-100 lg:block hidden">
        {poster && (
          <img
            src={poster}
            alt={`poster of ${title}`}
            className="max-w-full h-auto"
          />
        )}
      </picture>
      <div className="flex flex-col gap-1">
        <h2 className="md:headline-m text-sm">{props.title}</h2>
        <span className="body-2 md:inline-block hidden">{release}</span>
        <span className="body md:inline-block hidden">
          {mainActors.join(", ")}
        </span>
      </div>
    </ListBoxItem>
  );
};
