import { combineReducers } from "redux";
import { usersReducer } from "./users/users.reducer";
import { userReducer } from "./user/user.reducer";

const rootReducer = combineReducers({
  users: usersReducer,
  user: userReducer,
});

export default rootReducer;
