import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  const { page = 1 } = request.query;
  try {
    const res = await axios.get(
      `${process.env.TMDB_BASE_URL}/trending/movie/day?api_key=${process.env.TMDB_API_KEY}&page=${page}`,
    );

    response.status(res.status).json(res.data);
  } catch (err) {
    response.status(500).json({
      body: "internal error",
    });
  }
}
