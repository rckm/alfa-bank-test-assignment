import { GET_USER_PENDING, GET_USER_FAIL, GET_USER_SUCCESS, CLEAR_USER } from "./user.constant";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_PENDING:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
      };
    case GET_USER_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
        user: [],
      };
    case CLEAR_USER:
      return {
        ...state,
        user: {},
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
