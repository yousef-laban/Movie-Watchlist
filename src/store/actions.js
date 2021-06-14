// Action Types
export const ADD_MOVIE = "ADD_MOVIE";
export const MOVE_MOVIE_TO_WATCH = "MOVE_MOVIE_TO_WATCH";
export const MOVE_MOVIE_TO_WATCHLIST = "MOVE_MOVIE_TO_WATCHLIST";

export const DELETE_MOVIE = "DELETE_MOVIE";
export const DELETE_WATCHED_MOVIE = "DELETE_WATCHED_MOVIE";

export const addMovie = (newMovie) => {
  return {
    type: ADD_MOVIE,
    payload: {
      newMovie: newMovie,
    },
  };
};

export const deleteMovie = (movieID) => {
  return {
    type: DELETE_MOVIE,
    payload: {
      movieID: movieID,
    },
  };
};

export const deleteWatchedMovie = (movieID) => {
  return {
    type: DELETE_WATCHED_MOVIE,
    payload: {
      movieID: movieID,
    },
  };
};

export const moveMovieToWatched = (movedMovie) => {
  return {
    type: MOVE_MOVIE_TO_WATCH,
    payload: {
      movedMovie: movedMovie,
    },
  };
};

export const moveMovieToWatchlist = (movedListMovie) => {
  return {
    type: MOVE_MOVIE_TO_WATCHLIST,
    payload: {
      movedListMovie: movedListMovie,
    },
  };
};
