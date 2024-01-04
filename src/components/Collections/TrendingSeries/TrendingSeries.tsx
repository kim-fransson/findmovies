import { MediaTrendingList } from "../MediaTrendingList";

export const TrendingSeries = () => {
  return (
    <MediaTrendingList
      apiEndpoint="/api/trending/tv/day"
      ariaLabel="todays trending series"
    />
  );
};
