import { MediaComboBox } from "../Pickers/MediaComboBox/MediaComboBox";
import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { Key, ListBoxItem } from "react-aria-components";
import { useFilter } from "react-aria";
import { fetcher, getTitle, isMovie, isTV } from "@/utils";
import { MediaSearchResult } from "../Display/MediaSearchResult/MediaSearchResult";

// ! still some errors from react-aria
export const MediaAutoSearch = () => {
  const [fieldState, setFieldState] = useState<{
    selectedMediaId: Key;
    inputValue: string;
  }>({
    selectedMediaId: "",
    inputValue: "",
  });

  const [medias, setMedias] = useState<Media[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);

  const debouncedSearchQuery = useDebounce(fieldState.inputValue, 500);

  const { isLoading, mutate } = useSWR<MultiSearchResult>(
    debouncedSearchQuery
      ? `/api/search/multi?query=${debouncedSearchQuery}`
      : null,
    fetcher,
    { onSuccess: (data) => setMedias(data.results || []) },
  );

  useSWR<ListGenresResult>("/api/genre/media/list", fetcher, {
    onSuccess: (data) => setGenres(data.genres || []),
  });

  const { contains } = useFilter({ sensitivity: "base" });

  const filteredMedias = useMemo(() => {
    if (fieldState.inputValue === "") {
      return [];
    }
    return medias
      .filter((media) => {
        if (isMovie(media)) {
          return contains(media.title, fieldState.inputValue);
        } else if (isTV(media)) {
          return contains(media.name, fieldState.inputValue);
        }
        return false;
      })
      .slice(0, 5);
  }, [medias, fieldState.inputValue, contains]);

  const onSelectionChange = (id: Key) => {
    const selectedItem = medias.find((media) => media.id === id);
    setFieldState({
      inputValue: isMovie(selectedItem)
        ? selectedItem.title
        : isTV(selectedItem)
          ? selectedItem.name
          : "",
      selectedMediaId: id,
    });
  };

  const onInputChange = (value: string) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedMediaId: value ? prevState.selectedMediaId : "",
    }));
  };

  useEffect(() => {
    mutate();
  }, [debouncedSearchQuery, mutate]);

  return (
    <MediaComboBox
      aria-label="pick a movie"
      items={filteredMedias}
      selectedKey={fieldState.selectedMediaId}
      inputValue={fieldState.inputValue}
      onSelectionChange={onSelectionChange}
      onInputChange={onInputChange}
      isLoading={isLoading}
      allowsEmptyCollection={true} // see: https://github.com/adobe/react-spectrum/issues/5234#issuecomment-1809482551
    >
      {(item) => (
        <ListBoxItem
          className="focus:bg-white/12 cursor-pointer outline-none"
          textValue={getTitle(item)}
        >
          <MediaSearchResult media={item} genres={genres} />
        </ListBoxItem>
      )}
    </MediaComboBox>
  );
};
