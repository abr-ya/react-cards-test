import { createCustomAction } from "typesafe-actions"; // createAction - без payload
import {
  SET_LOADING,
  SET_LIKE,
  SET_MOVIE,
  SET_PAGE,
  GET_TRENDS_SAGA,
  // FIND_MOVIES_SAGA,
} from "./movieTypes";

export const setMovie = createCustomAction(SET_MOVIE, (data: any) => ({
  payload: data,
}));

export const setCurrentPage = createCustomAction(SET_PAGE, (data: any) => ({
  payload: data,
}));

export const setLoading = createCustomAction(SET_LOADING, (flag: boolean) => ({
  payload: flag,
}));

export const setLike = createCustomAction(
  SET_LIKE,
  (id: string, hasLike: boolean) => ({
    payload: { id, hasLike },
  }),
);

export const getTrendsSaga = createCustomAction(
  GET_TRENDS_SAGA,
  (page: number) => ({
    payload: { page },
  }),
);

// export const findMoviesSaga = createCustomAction(
//   FIND_MOVIES_SAGA,
//   (query: string, page: number) => ({
//     payload: { query, page },
//   }),
// );
