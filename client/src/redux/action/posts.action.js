import axios from "axios";
import { postConstants } from "../../constants/posts.constants";

export const getPostsDetail = (id) => {
  return (dispatch) => {
    axios
      .get("/posts/" + id)
      .then(function (res) {
        dispatch({
          type: postConstants.DETAIL_SUCCESS,
          payload: {
            data: res.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (err) {
        dispatch({
          type: postConstants.DETAIL_SUCCESS,
          payload: {
            data: false,
            errorMessage: err.message,
          },
        });
      });
  };
};
