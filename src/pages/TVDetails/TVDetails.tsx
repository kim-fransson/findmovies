import { fetcher, getYear, getPoster } from "@/utils";
import useSWR from "swr";
import StarIcon from "@icons/star-icon.svg?react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { DateTime } from "luxon";
import { Link, useParams } from "react-router-dom";
import Logo from "@icons/logo.svg?react";
import { MediaAutoSearch } from "@/components";

export const TVDetails = () => {
  const { id: tvID } = useParams();
  const {
    data: tv,
    isLoading,
    error,
  } = useSWR<SeriesDetails>(`/api/tv?id=${tvID}`, fetcher);

  const [isLoadingPoster, setIsLoadingPoster] = useState(
    tv?.poster_path ? true : false,
  );

  return (
    tv && (
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
          <div className="flex flex-col justify-between md:gap-3 gap-1">
            <span className="body font-bold uppercase text-yellow-600">
              series
            </span>
            <h2 className="md:headline-xl text-3xl uppercase font-semibold">
              {tv.name}
            </h2>
            <div className="flex gap-3.5">
              <span className="md:caption-2 text-sm font-bold">
                {getYear(tv.first_air_date) || "Coming soon"}
              </span>
              <span className="md:caption-2 text-sm font-bold">
                {tv.number_of_seasons > 1
                  ? tv.number_of_seasons + " seasons"
                  : "1 season"}
              </span>
            </div>
          </div>

          <div className="flex gap-5 ml-auto">
            <div className="flex gap-2 items-center">
              <StarIcon className="md:w-12 md:h-12 w-8 h-8" />
              <span className="md:headline-l text-lg font-bold">
                {tv.vote_average.toFixed(1)}
              </span>
            </div>
            <div className="caption text-white/60 grid items-center">
              <span>{tv.vote_count}</span>
              <span className="md:-mt-4 -mt-2 lowercase">ratings</span>
            </div>
          </div>
        </div>

        <div className="lg:px-32 md:px-8 md:py-16 p-4 flex gap-8">
          <div
            className={twMerge(
              "overflow-hidden h-[420px] w-[272px] rounded-lg shrink-0 md:block hidden",
              isLoadingPoster ? "skeleton" : "",
              tv.poster_path ? "" : "gradient",
            )}
          >
            {tv.poster_path && (
              <img
                src={getPoster(tv.poster_path, "w342")}
                className="max-w-full h-full"
                onLoad={() => setIsLoadingPoster(false)}
                loading="lazy"
              />
            )}
          </div>

          <div className="flex-1 flex flex-col gap-6">
            <div className="flex flex-wrap gap-4">
              {tv.genres.map((genre) => (
                <span
                  key={genre.id}
                  className="badge badge-lg md:border md:border-gray-100/12 md:bg-gray-100/12 bg-yellow-600 md:px-4 md:py-5 capitalize md:text-gray-100 md:font-normal font-medium text-gray-900"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            <p className="body">{tv.overview}</p>

            <div className="body capitalize grid gap-3">
              {tv.created_by.length > 0 && (
                <div>
                  <span className="text-gray-100/60 mr-1">Created By:</span>
                  <span>
                    {tv.created_by.map((crew) => crew.name).join(", ")}
                  </span>
                </div>
              )}
              {tv.credits.cast.length > 0 && (
                <div>
                  <span className="text-gray-100/60 mr-1">Stars:</span>
                  <span>
                    {tv.credits.cast
                      .slice(0, 2)
                      .map((actor) => actor.name)
                      .join(", ")}
                  </span>
                </div>
              )}
              {tv.production_countries.length && (
                <div>
                  <span className="text-gray-100/60 mr-1">
                    Countries of Origin:
                  </span>
                  <span>
                    {tv.production_countries
                      .map((country) => country.name)
                      .join(", ")}
                  </span>
                </div>
              )}
              <div>
                <span className="text-gray-100/60 mr-1">Release date:</span>
                <span>
                  {tv.first_air_date
                    ? DateTime.fromFormat(
                        tv.first_air_date,
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
