import { rest } from "msw";

import results from "../responses/trending/tv/trendingResult.json";

export const trendingTVHandler = rest.get(
  "/api/trending/tv/day",
  (_req, res, ctx) => {
    return res(ctx.json(results), ctx.delay(1000));
  },
);
