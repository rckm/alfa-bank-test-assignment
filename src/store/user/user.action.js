import { GET_USER_PENDING, GET_USER_FAIL, GET_USER_SUCCESS, CLEAR_USER } from "./user.constant";

function getUserPending() {
  return {
    type: GET_USER_PENDING,
  };
}

function getUserSuccess(user) {
  return {
    type: GET_USER_SUCCESS,
    payload: user,
  };
}

function getUserFail(error) {
  return {
    type: GET_USER_FAIL,
    error: error,
  };
}

function clearUser() {
  return {
    type: CLEAR_USER,
  };
}

export { getUserFail, getUserPending, getUserSuccess, clearUser };
