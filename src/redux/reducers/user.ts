import { ActionType, getType } from "typesafe-actions";
import * as actions from "../actions/userActions";

type userStateType = Readonly<{
  isFavoriteMode: boolean;
}>;

const user: userStateType = {
  isFavoriteMode: false,
};

export type userActions = ActionType<typeof actions>;

const userReducer = (state = user, action: userActions): userStateType => {
  switch (action.type) {
    case getType(actions.changeMode):
      return { ...state, isFavoriteMode: !state.isFavoriteMode };
    default:
      return state;
  }
};

export default userReducer;
