import { combineReducers } from "redux";
import loginReducer from "./loginReducer";

const appReducer = combineReducers({
  loginReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer;
