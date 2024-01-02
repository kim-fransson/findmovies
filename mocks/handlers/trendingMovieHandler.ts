import { rest } from "msw";

import results from "../responses/trending/movie/trendingResult.json";

export const trendingMovieHandler = rest.get(
  "/api/trending/movie/day",
  (_req, res, ctx) => {
    return res(ctx.json(results), ctx.delay(1000));
  },
);
