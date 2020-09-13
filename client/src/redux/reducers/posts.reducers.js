import { postConstants } from "../../constants/posts.constants";

let initialState = {
  getPostsDetail: false,
  errorPostsDetail: false,
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case postConstants.DETAIL_SUCCESS:
      return {
        ...state,
        getPostsDetail: action.payload.data,
        errorPostsDetail: action.payload.errorMessage,
      };
    default:
      return state;
  }
};

export default posts;
