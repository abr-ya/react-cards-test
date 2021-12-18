import { takeLatest, put, call } from "redux-saga/effects"; // takeEvery, select
import * as api from "../../api/movie-service";
import * as movieActions from "../actions/movieActions";
import * as movieTypes from "../actions/movieTypes";

interface IResponse {
  data?: any;
}

function* getTrendsSaga(action: ReturnType<typeof movieActions.getTrendsSaga>) {
  try {
    yield put(movieActions.setLoading(true));
    const { page } = action.payload;
    const response: IResponse = yield call(api.getTrends);
    yield put(movieActions.setCurrentPage(response)); // response.data, если не обработали в апи!
    yield put(movieActions.setLoading(false));
  } catch (error) {
    console.error(error);
  }
}

function* findMoviesSaga(
  action: ReturnType<typeof movieActions.findMoviesSaga>,
) {
  try {
    yield put(movieActions.setLoading(true));
    const { query, page } = action.payload;
    const response: IResponse = yield call(api.findMovies, query, page);
    console.log(response);
    yield put(movieActions.setCurrentPage(response));
    yield put(movieActions.setLoading(false));
  } catch (error) {
    console.error(error);
  }
}

export default function* watchEntities() {
  yield takeLatest(movieTypes.GET_TRENDS_SAGA, getTrendsSaga);
  yield takeLatest(movieTypes.FIND_MOVIES_SAGA, findMoviesSaga);
}
