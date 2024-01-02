import type { VercelRequest, VercelResponse } from "@vercel/node";
import axios from "axios";

export default async function handler(
  _request: VercelRequest,
  response: VercelResponse,
) {
  try {
    const movieResPromise = axios.get(
      `${process.env.TMDB_BASE_URL}/genre/movie/list?api_key=${process.env.TMDB_API_KEY}`,
    );

    const tvResPromise = axios.get(
      `${process.env.TMDB_BASE_URL}/genre/tv/list?api_key=${process.env.TMDB_API_KEY}`,
    );

    Promise.all([movieResPromise, tvResPromise])
      .then((responses) => {
        const movieGenres = responses[0].data.genres;
        const tvGenres = responses[1].data.genres;

        const uniqueIds = new Set();
        const mergedGenres: object[] = [];

        [...movieGenres, ...tvGenres].forEach((genre) => {
          if (!uniqueIds.has(genre.id)) {
            uniqueIds.add(genre.id);
            mergedGenres.push(genre);
          }
        });

        response.status(200).json({ genres: mergedGenres });
      })
      .catch(() => {
        response.status(500).json({
          body: "internal error",
        });
      });
  } catch (err) {
    response.status(500).json({
      body: "internal error",
    });
  }
}
