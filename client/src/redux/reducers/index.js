import { combineReducers } from "redux";
import auth from "./auth.reducer";
import message from "./message.reducers";

export default combineReducers({
  auth,
  message,
});
