import { fetcher, getFormattedRuntime, getYear, getPoster } from "@/utils";
import useSWR from "swr";
import StarIcon from "@icons/star-icon.svg?react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { DateTime } from "luxon";
import { Link, useParams } from "react-router-dom";
import { MediaAutoSearch } from "@/components";
import Logo from "@icons/logo.svg?react";

export const MovieDetails = () => {
  const { id: movieID } = useParams();
  const { data: movie } = useSWR<MovieDetails>(
    `/api/movie?id=${movieID}`,
    fetcher,
  );

  const [isLoadingPoster, setIsLoadingPoster] = useState(
    movie?.poster_path ? true : false,
  );

  return (
    movie && (
      <div className="min-h-dvh bg-black">
        <nav className="lg:px-32 md:px-8 px-4">
          <div className="lg:flex-row flex-col lg:py-9 py-5 flex lg:gap-16 gap-4 lg:items-center">
            <Link to="/" className="cursor-pointer">
              <Logo />
            </Link>
            <div className="flex-1">
              <MediaAutoSearch />
            </div>
          </div>
        </nav>
        <div className="gradient-gray lg:px-32 md:px-8 md:py-12 p-4 flex md:flex-row flex-col md:items-center md:gap-8 gap-4">
          <div className="flex flex-col md:gap-3 gap-1">
            <span className="body font-bold uppercase text-yellow-600">
              Movie
            </span>
            <h2 className="md:headline-xl text-3xl uppercase font-semibold">
              {movie?.title}
            </h2>
            <div className="flex gap-3.5">
              <span className="md:caption-2 text-sm font-bold">
                {getYear(movie.release_date)}
              </span>
              <span className="md:caption-2 text-sm font-bold">
                {getFormattedRuntime(movie.runtime)}
              </span>
            </div>
          </div>

          <div className="flex gap-5 ml-auto">
            <div className="flex gap-2 items-center">
              <StarIcon className="md:w-12 md:h-12 w-8 h-8" />
              <span className="md:headline-l text-lg font-bold">
                {movie.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="caption text-white/60 grid items-center">
              <span>{movie.vote_count}</span>
              <span className="md:-mt-4 -mt-2 lowercase">ratings</span>
            </div>
          </div>
        </div>

        <div className="lg:px-32 md:px-8 md:py-16 p-4 flex gap-8">
          <div
            className={twMerge(
              "overflow-hidden h-[420px] w-[272px] rounded-lg shrink-0 md:block hidden",
              isLoadingPoster ? "skeleton" : "",
              movie.poster_path ? "" : "gradient",
            )}
          >
            {movie.poster_path && (
              <img
                src={getPoster(movie.poster_path, "w342")}
                className="max-w-full h-full"
                onLoad={() => setIsLoadingPoster(false)}
                loading="lazy"
              />
            )}
          </div>

          <div className="flex-1 flex flex-col items-start gap-6">
            <div className="flex flex-wrap gap-4">
              {movie.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="badge badge-lg md:border md:border-gray-100/12 md:bg-gray-100/12 bg-yellow-600 md:px-4 md:py-5 capitalize md:text-gray-100 md:font-normal font-medium text-gray-900"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="body">{movie.overview}</p>

            <div className="body capitalize grid gap-3">
              {movie.credits.crew.find(
                (crew) => crew.job.toLowerCase() === "director",
              ) && (
                <div>
                  <span className="text-gray-100/60 mr-1">Director:</span>
                  <span>
                    {movie.credits.crew
                      .filter((crew) => crew.job.toLowerCase() === "director")
                      .map((crew) => crew.name)
                      .join(", ")}
                  </span>
                </div>
              )}
              {movie.credits.crew.find(
                (crew) => crew.job.toLowerCase() === "screenplay",
              ) && (
                <div>
                  <span className="text-gray-100/60 mr-1">Screenplay:</span>
                  <span>
                    {movie.credits.crew
                      .filter((crew) => crew.job.toLowerCase() === "screenplay")
                      .map((crew) => crew.name)
                      .join(", ")}
                  </span>
                </div>
              )}
              {movie.credits.cast.length > 0 && (
                <div>
                  <span className="text-gray-100/60 mr-1">Stars:</span>
                  <span>
                    {movie.credits.cast
                      .slice(0, 2)
                      .map((actor) => actor.name)
                      .join(", ")}
                  </span>
                </div>
              )}
              {movie.production_countries.length > 0 && (
                <div>
                  <span className="text-gray-100/60 mr-1">
                    Countries of Origin:
                  </span>
                  <span>
                    {movie.production_countries
                      .map((country) => country.name)
                      .join(", ")}
                  </span>
                </div>
              )}
              <div>
                <span className="text-gray-100/60 mr-1">Release date:</span>
                <span>
                  {movie.release_date
                    ? DateTime.fromFormat(
                        movie.release_date,
                        "yyyy-MM-dd",
                      ).toLocaleString(DateTime.DATE_FULL)
                    : "Coming soon"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
