import { messageConstants, userConstants } from "../../constants";
import { authService } from "../../services";

export const login = (dataToSubmit) => (dispatch) => {
  return authService.login(dataToSubmit).then(
    (data) => {
      dispatch({
        type: userConstants.LOGIN_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.res && error.res.data && error.res.data.message) || error.message || error.toString();
      dispatch({
        type: userConstants.LOGIN_FAILURE,
      });

      dispatch({
        type: messageConstants.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const logout = () => (dispatch) => {
  authService.logout();

  dispatch({
    type: userConstants.LOGOUT,
  });
};

export const register = (dataToSubmit) => (dispatch) => {
  return authService.register(dataToSubmit).then(
    (data) => {
      dispatch({
        type: userConstants.REGISTER_SUCCESS,
        payload: { user: data },
      });

      return Promise.resolve();
    },
    (error) => {
      const message = (error.res && error.res.data && error.res.data.message) || error.message || error.toString();
      dispatch({
        type: userConstants.REGISTER_FAILURE,
      });

      dispatch({
        type: messageConstants.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};
