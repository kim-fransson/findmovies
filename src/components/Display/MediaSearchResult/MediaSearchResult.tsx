import { getGenres, getPoster, getReleaseYear, isMovie, isTV } from "@/utils";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface MediaSearchResultProps {
  media: Media | Movie | TV;
  genres: Genre[];
}

export const MediaSearchResult = (props: MediaSearchResultProps) => {
  const { genres, media } = props;
  const [isLoadingPoster, setIsLoadingPoster] = useState(
    media.poster_path ? true : false,
  );
  return (
    <div className="flex p-3 text-gray-100 items-center gap-5">
      <picture
        className={twMerge(
          "w-14 h-20 flex-shrink-0 flex-grow-0 rounded  overflow-hidden",
          isLoadingPoster ? "skeleton" : "",
          media.poster_path ? "" : "gradient",
        )}
      >
        {media.poster_path && (
          <img
            src={getPoster(props.media)}
            className="max-w-full h-auto"
            onLoad={() => setIsLoadingPoster(false)}
          />
        )}
      </picture>
      <div className="flex flex-col gap-2">
        <h2 className="md:headline-m text-sm">
          {isMovie(props.media)
            ? props.media.title
            : isTV(props.media)
              ? props.media.name
              : ""}
        </h2>
        <div className="flex items-center gap-2 flex-wrap">
          {getGenres(props.media, genres).map((genre) => (
            <div
              key={genre}
              className="badge bg-yellow-600 text-gray-900 badge-sm md:badge-md"
            >
              {genre}
            </div>
          ))}
        </div>
        <span className="md:body-2 text-sm">
          {getReleaseYear(props.media) || "Release Date: To Be Announced"}
        </span>
      </div>
    </div>
  );
};
