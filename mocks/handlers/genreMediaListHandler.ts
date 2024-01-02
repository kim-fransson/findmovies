import { rest } from "msw";

import genres from "../responses/genre/mediaListResult.json";

export const genreMediaListHandler = rest.get(
  "/api/genre/media/list",
  (_req, res, ctx) => {
    return res(ctx.json(genres));
  },
);
