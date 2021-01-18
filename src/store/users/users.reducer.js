import { GET_USERS_PENDING, GET_USERS_FAIL, GET_USERS_SUCCESS } from "./users.constant";

const initialState = {
  users: [],
  loading: false,
  error: null,
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        users: [],
      };
    default:
      return state;
  }
}
