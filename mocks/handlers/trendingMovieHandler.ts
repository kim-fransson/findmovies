import { rest } from "msw";

import page1 from "../responses/trending/movie/trendingResult.json";
import page2 from "../responses/trending/movie/trendingResultPage2.json";

export const trendingMovieHandler = rest.get(
  "/api/trending/movie/day",
  (req, res, ctx) => {
    const page = req.url.searchParams.get("page") as string;

    return res(
      ctx.json(page === "1" || !page ? page1 : page2),
      ctx.delay(1000),
    );
  },
);
