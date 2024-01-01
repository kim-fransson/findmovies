import { rest } from "msw";

import genres from "../responses/genre/movieListResult.json";

export const genreMovieListHandler = rest.get(
  "/api/genre/movie/list",
  (_req, res, ctx) => {
    return res(ctx.json(genres));
  },
);
