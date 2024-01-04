import { MediaInfinityList } from "../MediaInfinityList";

export const UpcomingMovies = () => {
  return (
    <MediaInfinityList
      apiEndpoint="/api/movie/upcoming"
      ariaLabel="upcoming movies"
    />
  );
};
