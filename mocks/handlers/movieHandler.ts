import { rest } from "msw";

import details from "../responses/movie/details.json";
export const movieHandler = rest.get("/api/movie", (_req, res, ctx) => {
  return res(ctx.json(details), ctx.delay(1000));
});
