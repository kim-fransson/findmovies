import {
  Button,
  ComboBox,
  ComboBoxProps,
  ComboBoxStateContext,
  Group,
  Input,
  ListBox,
  Popover,
} from "react-aria-components";

import SearchIcon from "@icons/search-icon.svg?react";
import { MutableRefObject, ReactNode, useContext, useRef } from "react";

export interface MediaComboBoxProps
  extends Omit<ComboBoxProps<Media>, "children"> {
  children: ReactNode | ((item: Media) => ReactNode);
  allowsEmptyCollection: boolean;
}

const PopoverWithListBox = ({
  triggerRef,
  children,
}: {
  triggerRef: MutableRefObject<null>;
  children: ReactNode | ((item: Media) => ReactNode);
}) => {
  const state = useContext(ComboBoxStateContext);
  return (
    <Popover
      isOpen={state && state.isOpen && state.inputValue !== ""}
      triggerRef={triggerRef}
      className="max-h-96 w-[--trigger-width] overflow-auto rounded shadow-lg
        entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out bg-gray-900"
    >
      <ListBox<Media>
        className="outline-none bg-gray-900"
        renderEmptyState={() => (
          <div className="body-2 text-gray-100 py-6 px-3">
            Looks like we didn't find any movies or TV shows for that search.
            Try a different phrase!
          </div>
        )}
      >
        {children}
      </ListBox>
    </Popover>
  );
};

export const MediaComboBox = (props: MediaComboBoxProps) => {
  const containerRef = useRef(null);

  return (
    <div className="relative" ref={containerRef}>
      <ComboBox {...props}>
        <Group className="rounded bg-gray-100 text-black/60 body overflow-hidden focus-within:text-black/87 transition-colors relative">
          <Input
            placeholder="Search FindMovies"
            className="bg-transparent outline-none selection:bg-yellow-600/36 flex-1 w-full py-2 pl-9 pr-1.5
          border-2 border-transparent focus:border-yellow-600"
          />
          <Button>
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2" />
          </Button>
        </Group>
        <PopoverWithListBox triggerRef={containerRef}>
          {props.children}
        </PopoverWithListBox>
      </ComboBox>
    </div>
  );
};
