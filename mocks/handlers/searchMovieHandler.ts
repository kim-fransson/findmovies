import { rest } from "msw";

import searchResults from "../responses/search/movieSearchResult.json";

export const searchMovieHandler = rest.get(
  "/api/search/movie",
  (_req, res, ctx) => {
    return res(ctx.json(searchResults), ctx.delay(1000));
  },
);
