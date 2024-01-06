import { rest } from "msw";

import details from "../responses/tv/details.json";
export const tvHandler = rest.get("/api/tv", (_req, res, ctx) => {
  return res(ctx.json(details), ctx.delay(1000));
});
