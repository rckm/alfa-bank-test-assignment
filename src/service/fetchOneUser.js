import * as userActions from "../store/user/user.action";
import axios from "axios";

export function fetchUserByUsername(username) {
  return (dispatch) => {
    dispatch(userActions.getUserPending());
    axios
      .get(`https://api.github.com/users/${username}`)
      .then((users) => {
        dispatch(userActions.getUserSuccess(users.data));
        return users.data;
      })
      .catch((error) => dispatch(userActions.getUserFail(error)));
  };
}
