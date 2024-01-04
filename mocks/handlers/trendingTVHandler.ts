import { rest } from "msw";

import page1 from "../responses/trending/tv/trendingResult.json";
import page2 from "../responses/trending/tv/trendingResultPage2.json";

export const trendingTVHandler = rest.get(
  "/api/trending/tv/day",
  (req, res, ctx) => {
    const page = req.url.searchParams.get("page") as string;

    return res(
      ctx.json(page === "1" || !page ? page1 : page2),
      ctx.delay(1000),
    );
  },
);
