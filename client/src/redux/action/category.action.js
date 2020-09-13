import { categoryConstants, messageConstants } from "../../constants";
import { categoryServices } from "../../services";
import axios from "axios";

export const getCategory = () => {
  return (dispatch) => {
    axios
      .get("https://my-json-server.typicode.com/afifbasya/reactjs-redux/users")
      .then(function (response) {
        dispatch({
          type: categoryConstants.LIST_SUCCESS,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: categoryConstants.LIST_SUCCESS,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const CreateCategory = (dataToSubmit) => (dispatch) => {
  return categoryServices.create(dataToSubmit).then(
    (data) => {
      dispatch({
        type: categoryConstants.CREATE_SUCCESS,
        payload: {
          data: data,
        },
      });
      return Promise.resolve();
    },
    (error) => {
      const message = (error.res && error.res.data && error.res.data.message) || error.message || error.toString();

      dispatch({
        type: categoryConstants.CREATE_FAILURE,
      });

      dispatch({
        type: messageConstants.SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

export const update = (id, dataToSubmit) => (dispatch) => {
  return categoryServices.update(id, dataToSubmit).then(
    (data) => {
      dispatch({
        type: categoryConstants.UPDATE_SUCCESS,
        payload: {
          data: data,
        },
      });
      return Promise.resolve();
    },
    (error) => {
      const message = (error.res && error.res.data && error.res.data.message) || error.message || error.toString();

      dispatch({
        type: categoryConstants.UPDATE_FAILURE,
      });

      dispatch({
        type: messageConstants.SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const _delete = (id) => (dispatch) => {
  return categoryServices.delete(id).then(
    (data) => {
      dispatch({
        type: categoryConstants.UPDATE_SUCCESS,
        payload: {
          data: data,
        },
      });
      return Promise.resolve();
    },
    (error) => {
      const message = (error.res && error.res.data && error.res.data.message) || error.message || error.toString();

      dispatch({
        type: categoryConstants.UPDATE_FAILURE,
      });

      dispatch({
        type: messageConstants.SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    }
  );
};

export const deleteCategory = (id) => {
  return (dispatch) => {
    axios
      .delete("http://my-json-server.typicode.com/afifbasya/reactjs-redux/users/" + id)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteDataCategory = () => {
  return (dispatch) => {
    dispatch({
      type: categoryConstants.DETAIL_SUCCESS,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: categoryConstants.CREATE_SUCCESS,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
