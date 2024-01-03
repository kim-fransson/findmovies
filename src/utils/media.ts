export const isMovie = (media?: Media): media is Movie => {
  return media !== undefined && media.media_type === "movie";
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

export const getPoster = (media: Media, size = "w92") => {
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
