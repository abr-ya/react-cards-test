import { connect } from "react-redux";
import MoviesList from "./MoviesList";
import { setLike, delMovie } from "redux/actions/movieActions";
import { RootStateType } from "redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  data: state.movies.currentPage,
  loading: state.movies.loading,
  isFavoriteMode: state.user.isFavoriteMode,
});

const mapDispatchToProps = {
  setLike,
  delMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
