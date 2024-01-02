import { rest } from "msw";

import searchResults from "../responses/search/multiSearchResult.json";

export const searchMultiHandler = rest.get(
  "/api/search/multi",
  (_req, res, ctx) => {
    return res(ctx.json(searchResults), ctx.delay(1000));
  },
);
