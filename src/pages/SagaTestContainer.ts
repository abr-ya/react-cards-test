import { connect } from "react-redux";
import SagaTest from "./SagaTest";
import { getTrendsSaga } from "../redux/actions/movieActions";
import { RootStateType } from "../redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  movies: state.movies,
});

const mapDispatchToProps = {
  getTrendsSaga,
};

export default connect(mapStateToProps, mapDispatchToProps)(SagaTest);
