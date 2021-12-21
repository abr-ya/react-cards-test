import { connect } from "react-redux";
import ModeSwither from "./ModeSwither";
import { changeMode } from "redux/actions/userActions";
import { RootStateType } from "redux/ReduxProvider";

const mapStateToProps = (state: RootStateType) => ({
  isFavoriteMode: state.user.isFavoriteMode,
});

const mapDispatchToProps = {
  changeMode,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModeSwither);
