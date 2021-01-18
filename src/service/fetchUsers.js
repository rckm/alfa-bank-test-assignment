import * as usersActions from "../store/users/users.action";
import axios from "axios";

export function fetchUsers() {
  return (dispatch) => {
    dispatch(usersActions.getUsersPending());
    axios
      .get("https://api.github.com/users")
      .then((users) => {
        dispatch(usersActions.getUsersSuccess(users.data));
        return users.data;
      })
      .catch((error) => dispatch(usersActions.getUsersFail(error)));
  };
}

export function fetchNextUsers(since) {
  return (dispatch) => {
    dispatch(usersActions.getUsersPending());
    axios
      .get(`https://api.github.com/users?since=${since}`)
      .then((users) => {
        dispatch(usersActions.getUsersSuccess(users.data));
        return users.data;
      })
      .catch((error) => dispatch(usersActions.getUsersFail(error)));
  };
}
