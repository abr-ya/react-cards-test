import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/movieActions";
import { IMovie } from "../../interfaces";
import { stat } from "fs";

type moviesStateType = Readonly<{
  currentPage: IMovie[];
  page: number;
  totalPages: number;
  movie: { [key: string]: IMovie };
  loading: boolean;
}>;

const movies: moviesStateType = {
  currentPage: [],
  page: 0,
  totalPages: 0,
  movie: {},
  loading: true,
};

export type movieActions = ActionType<typeof actions>;

const moviesReducer = (
  state = movies,
  action: movieActions,
): moviesStateType => {
  switch (action.type) {
    case getType(actions.setLoading):
      return { ...state, loading: action.payload as boolean };
    case getType(actions.setLike):
      const { id, hasLike } = action.payload;
      const pageCopy = [...state.currentPage];
      const movieN = pageCopy.findIndex((el) => el.id === id);
      pageCopy[movieN] = { ...pageCopy[movieN], hasLike };
      return { ...state, currentPage: pageCopy };
    case getType(actions.setCurrentPage):
      return { ...state, ...action.payload, loading: false };
    default:
      return state;
  }
};

export default moviesReducer;
