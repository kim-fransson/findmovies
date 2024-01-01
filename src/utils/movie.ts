export const getReleaseYear = (movie: Movie) => {
  if (movie.release_date) {
    const year = parseInt(movie.release_date.split("-")[0]);
    return isNaN(year) ? undefined : year.toString();
  }
  return undefined;
};

export const getPoster = (movie: Movie) => {
  return movie.poster_path !== null
    ? `https://image.tmdb.org/t/p/w92/${movie.poster_path}`
    : undefined;
};

export const getGenres = (movie: Movie, genres: Genre[]) => {
  const res = movie.genre_ids
    .map((genreId) => genres.find((genre) => genre.id === genreId)?.name)
    .filter((genre) => genre !== undefined) as string[];

  return res;
};
