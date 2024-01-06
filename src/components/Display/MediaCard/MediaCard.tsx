import { getPoster, getTitle } from "@/utils";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import StarIcon from "@icons/star-icon.svg?react";

export interface MediaCardProps {
  media?: Media | Movie | TV;
  isLoading?: boolean;
}

export const MediaCard = (props: MediaCardProps) => {
  const { media, isLoading } = props;

  const [isLoadingPoster, setIsLoadingPoster] = useState(
    media?.poster_path ? true : false,
  );

  if (!media || isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="w-44 h-64 skeleton"></div>
        <div className="skeleton h-6"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-44 shrink-0 grow-0 gap-4 group">
      <div
        className={twMerge(
          "overflow-hidden relative rounded-t-lg rounded-br-lg h-64 w-44 group-hover:yellow-shadow transition-shadow",
          isLoadingPoster ? "skeleton" : "",
          media.poster_path ? "" : "gradient",
        )}
      >
        {media.poster_path && (
          <img
            src={getPoster(media.poster_path, "w185")}
            className="max-w-full h-auto"
            onLoad={() => setIsLoadingPoster(false)}
            loading="lazy"
          />
        )}
        <div className="absolute rounded-tr-lg gap-2 p-2 body flex items-center left-0 bottom-0 bg-black">
          <StarIcon />
          {media.vote_average.toFixed(1)}
        </div>
      </div>
      <span className="body-2 text-center">{getTitle(media)}</span>
    </div>
  );
};
