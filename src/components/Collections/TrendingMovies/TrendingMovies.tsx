import { MediaTrendingList } from "../MediaTrendingList";

export const TrendingMovies = () => {
  return (
    <MediaTrendingList
      apiEndpoint="/api/trending/movie/day"
      ariaLabel="todays trending movies"
    />
  );
};
