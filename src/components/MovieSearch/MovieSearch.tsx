import {
  MovieComboBox,
  MovieItem,
} from "../Pickers/MovieComboBox/MovieComboBox";
import useSWR from "swr";
import { useEffect, useMemo, useState } from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { Key } from "react-aria-components";
import { useFilter } from "react-aria";
import { fetcher } from "@/utils";

// ! still some errors from react-aria
export const MovieSearch = () => {
  const [fieldState, setFieldState] = useState<{
    selectedMovieId: Key;
    inputValue: string;
  }>({
    selectedMovieId: "",
    inputValue: "",
  });

  const [movies, setMovies] = useState<Movie[]>([]);

  const debouncedSearchQuery = useDebounce(fieldState.inputValue, 500);

  const { isLoading, mutate } = useSWR<MovieSearchResult>(
    debouncedSearchQuery
      ? `/api/search/movie?query=${debouncedSearchQuery}`
      : null,
    fetcher,
    { onSuccess: (data) => setMovies(data.results || []) },
  );

  useSWR<ListGenresResult>("/api/genre/movie/list", fetcher);

  const { contains } = useFilter({ sensitivity: "base" });

  const filteredMovies = useMemo(() => {
    if (fieldState.inputValue === "") {
      return [];
    }
    return movies
      .filter((movie) => contains(movie.title, fieldState.inputValue))
      .slice(0, 5);
  }, [movies, fieldState.inputValue, contains]);

  const onSelectionChange = (id: Key) => {
    const selectedItem = movies.find((movie) => movie.id === id);
    setFieldState({
      inputValue: selectedItem?.title || "",
      selectedMovieId: id,
    });
  };

  const onInputChange = (value: string) => {
    setFieldState((prevState) => ({
      inputValue: value,
      selectedMovieId: value ? prevState.selectedMovieId : "",
    }));
  };

  useEffect(() => {
    mutate();
  }, [debouncedSearchQuery, mutate]);

  return (
    <MovieComboBox
      aria-label="pick a movie"
      items={filteredMovies}
      selectedKey={fieldState.selectedMovieId}
      inputValue={fieldState.inputValue}
      onSelectionChange={onSelectionChange}
      onInputChange={onInputChange}
      isLoading={isLoading}
      allowsEmptyCollection={true} // see: https://github.com/adobe/react-spectrum/issues/5234#issuecomment-1809482551
    >
      {(item) => <MovieItem movie={item} textValue={item.title} />}
    </MovieComboBox>
  );
};
