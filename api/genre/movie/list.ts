import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(
  _request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const res = await axios.get(
      `${process.env.TMDB_BASE_URL}/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`,
    );

    response.status(res.status).json(res.data);
  } catch (err) {
    response.status(500).json({
      body: "internal error",
    });
  }
}
