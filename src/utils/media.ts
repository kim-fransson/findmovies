export const isMovie = (media?: Media): media is Movie => {
  return (
    media !== undefined && (media.media_type === "movie" || "title" in media)
  );
};

export const isTV = (media?: Media): media is TV => {
  return media !== undefined && media.media_type === "tv";
};

export const getTitle = (media: Media) => {
  return isMovie(media) ? media.title : isTV(media) ? media.name : "title";
};

export const getReleaseYear = (media: Media) => {
  const releaseYear = isMovie(media)
    ? media.release_date
    : isTV(media)
      ? media.first_air_date
      : "";
  if (releaseYear) {
    const year = parseInt(releaseYear.split("-")[0]);
    return isNaN(year) ? undefined : year.toString();
  }
  return undefined;
};

export const getMovieReleaseYear = (movie: MovieDetails | Movie) => {
  const releaseYear = movie.release_date;
  if (releaseYear) {
    const year = parseInt(releaseYear.split("-")[0]);
    return isNaN(year) ? undefined : year.toString();
  }
  return undefined;
};

export const getFormattedRuntime = (movie: MovieDetails): string => {
  const minutes = movie.runtime;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

export const getPoster = (media: Media | MovieDetails, size = "w92") => {
  return media.poster_path !== null
    ? `https://image.tmdb.org/t/p/${size}/${media.poster_path}`
    : undefined;
};

export const getGenres = (media: Media, genres: Genre[]) => {
  const res = media.genre_ids
    .map((genreId) => genres.find((genre) => genre.id === genreId)?.name)
    .filter((genre) => genre !== undefined) as string[];

  return res;
};

export const generateDummyList = (length = 20) => {
  return Array.from({ length }, (_, i) => ({
    id: i + 1,
  }));
};

export const filterUniqueMedias = (data?: TrendingResult[]) => {
  if (!data) {
    return [];
  }

  const uniqueIds = new Set();
  return data.reduce((accumulator, current) => {
    return accumulator.concat(
      current.results.filter((media) => {
        if (uniqueIds.has(media.id)) {
          return false;
        } else {
          uniqueIds.add(media.id);
          return true;
        }
      }),
    );
  }, [] as Media[]);
};
