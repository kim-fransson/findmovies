import { MediaInfinityList } from "../MediaInfinityList";

export const TrendingSeries = () => {
  return (
    <MediaInfinityList
      apiEndpoint="/api/trending/tv/day"
      ariaLabel="todays trending series"
    />
  );
};
