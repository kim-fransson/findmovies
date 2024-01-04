import { rest } from "msw";

import result from "../responses/movie/upcomingResult.json";

export const upcomingMoviesHandler = rest.get(
  "/api/movie/upcoming",
  (_req, res, ctx) => {
    return res(ctx.json(result), ctx.delay(1000));
  },
);
