import {actionTypes } from '../action/loginAction';
/**
 * Props for the login reducer
 * @param token
 * @param type
 * @param showSplash
 * @param value
 */
interface ActionProps {
  type: string;
  token: string;
  showSplash: boolean;
  value: boolean;
}
const initialState = {
  isLoading: true,
  userName: null,
  userToken: null,
  loader: false,
};

const loginReducer = (state = initialState, action: ActionProps) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        userToken: action.token,
      };
    case actionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loader: action.value,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        userToken: null,
      };
    case actionTypes.SET_LOADER:
      return {
        ...state,
        loader: action.value,
      };
    case actionTypes.RETRIEVE_TOKEN:
      return {
        ...state,
        userToken: action.token,
      };
    default:
      return state;
  }
};

export default loginReducer;