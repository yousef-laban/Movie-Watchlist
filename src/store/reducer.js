import watched from "../watched";
import watchList from "../watchList";
import {
  ADD_MOVIE,
  DELETE_MOVIE,
  DELETE_WATCHED_MOVIE,
  MOVE_MOVIE_TO_WATCH,
  MOVE_MOVIE_TO_WATCHLIST,
} from "./actions";

// import { DELETE_PRODUCT } from "./actions";

const initialState = {
  // initiate all state and its initial value
  watched: watched,
  watchList: watchList,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      const { newMovie } = action.payload;
      newMovie.id = state.watchList[state.watchList.length - 1].id + 1;

      return {
        ...state,
        watchList: [...state.watchList, newMovie],
      };

    case DELETE_MOVIE:
      const moviesToKeep = state.watchList.filter(
        (movie) => movie.id !== action.payload.movieID
      );

      return {
        ...state,
        watchList: moviesToKeep,
      };

    case DELETE_WATCHED_MOVIE:
      const moviesToKeepWatched = state.watched.filter(
        (movie) => movie.id !== action.payload.movieID
      );

      return {
        ...state,
        watched: moviesToKeepWatched,
      };

    case MOVE_MOVIE_TO_WATCH:
      const { movedMovie } = action.payload;
      if (state.watched.length === 0) movedMovie.id = 0;
      else movedMovie.id = state.watched[state.watched.length - 1].id + 1;

      return {
        ...state,
        watched: [...state.watched, movedMovie],
      };

    case MOVE_MOVIE_TO_WATCHLIST:
      const { movedListMovie } = action.payload;
      if (state.watchList.length === 0) movedListMovie.id = 0;
      else
        movedListMovie.id = state.watchList[state.watchList.length - 1].id + 1;

      return {
        ...state,
        watchList: [...state.watchList, movedListMovie],
      };

    default:
      return state;
  }
};

export default reducer;
