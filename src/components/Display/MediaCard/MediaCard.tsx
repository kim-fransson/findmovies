import { getPoster, getTitle } from "@/utils";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import StarIcon from "@icons/star-icon.svg?react";

export interface MediaCardProps {
  media: Movie | TV;
}

export const MediaCard = (props: MediaCardProps) => {
  const { media } = props;
  const { poster_path } = media;

  const [isLoadingPoster, setIsLoadingPoster] = useState(
    poster_path ? true : false,
  );

  return (
    <div className="flex flex-col w-44 shrink-0 grow-0 gap-4">
      <div
        className={twMerge(
          "overflow-hidden relative rounded-lg h-64 w-44",
          isLoadingPoster ? "skeleton" : "",
          poster_path ? "" : "gradient",
        )}
      >
        {poster_path && (
          <img
            src={getPoster(props.media, "w185")}
            className="max-w-full h-auto"
            onLoad={() => setIsLoadingPoster(false)}
          />
        )}
        <div className="absolute rounded-tr-lg gap-2 p-2 body flex items-center left-0 bottom-0 bg-black">
          <StarIcon />
          {media.vote_average.toFixed(1)}
        </div>
      </div>
      <span className="body-2 text-center">{getTitle(props.media)}</span>
    </div>
  );
};
