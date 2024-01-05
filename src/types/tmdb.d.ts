interface MultiSearchResult {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
}

interface TrendingResult {
  page: number;
  results: Media[];
  total_pages: number;
  total_results: number;
}

interface Media {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  original_language: string;
  overview: string;
  poster_path: string | null;
  media_type: "movie" | "tv";
  genre_ids: number[];
  popularity: number;
  vote_average: number;
  vote_count: number;
}

interface Movie extends Media {
  title: string;
  original_title: string;
  release_date: string;
  video: boolean;
}

interface TV extends Media {
  name: string;
  original_name: string;
  first_air_date: string;
  origin_country: string[];
}

interface ListGenresResult {
  genres: Genre[];
}
interface Genre {
  id: number;
  name: string;
}

interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  };
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits;
}

interface Credits {
  cast: CastMember[];
  crew: CrewMember[];
}

interface CastMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
}

interface CrewMember {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string | null;
  credit_id: string;
  department: string;
  job: string;
}
