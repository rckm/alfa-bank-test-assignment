import { GET_USERS_PENDING, GET_USERS_FAIL, GET_USERS_SUCCESS } from "./users.constant";

function getUsersPending() {
  return {
    type: GET_USERS_PENDING,
  };
}

function getUsersSuccess(users) {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
}

function getUsersFail(error) {
  return {
    type: GET_USERS_FAIL,
    error: error,
  };
}

export { getUsersFail, getUsersPending, getUsersSuccess };
