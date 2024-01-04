import { MediaInfinityList } from "../MediaInfinityList";

export const TrendingMovies = () => {
  return (
    <MediaInfinityList
      apiEndpoint="/api/trending/movie/day"
      ariaLabel="todays trending movies"
    />
  );
};
