import { userConstants } from "../../constants";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user ? { isLoggedIn: true, user } : { isLoggedIn: false, user: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case userConstants.REGISTER_SUCCESS:
      return {
        ...state,
        isLoggedIn: false,
      };

    case userConstants.REGISTER_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
      };

    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: payload.user,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
