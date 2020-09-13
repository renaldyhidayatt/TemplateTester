import { combineReducers } from "redux";
import auth from "./auth.reducer";
import message from "./message.reducers";
import category from "./category.reducers";
import posts from "./posts.reducers";

export default combineReducers({
  auth,
  message,
  category,
  posts,
});
