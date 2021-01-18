import { GET_USER_PENDING, GET_USER_FAIL, GET_USER_SUCCESS, CLEAR_USER } from "./user.constant";
import * as actions from "./user.action";
import { userReducer } from "./user.reducer";

describe("user actions", () => {
  it("should add loading state", () => {
    const expectedAction = {
      type: GET_USER_PENDING,
    };
    expect(actions.getUserPending()).toEqual(expectedAction);
  });

  it("should add user to store", () => {
    const data = { id: 0, name: "eric" };
    const expectedAction = {
      type: GET_USER_SUCCESS,
      payload: data,
    };
    expect(actions.getUserSuccess(data)).toEqual(expectedAction);
  });

  it("should add error state", () => {
    const error = "Something went wrong";
    const expectedAction = {
      type: GET_USER_FAIL,
      error,
    };
    expect(actions.getUserFail(error)).toEqual(expectedAction);
  });

  it("should clear user", () => {
    const expectedAction = {
      type: CLEAR_USER,
    };
    expect(actions.clearUser()).toEqual(expectedAction);
  });
});

describe("user reducers", () => {
  it("should return the initial state", () => {
    const initialState = {
      user: {},
      loading: false,
      error: null,
    };
    expect(userReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_USER_PENDING", () => {
    expect(userReducer({}, actions.getUserPending())).toEqual({
      loading: true,
    });
  });

  it("should handle GET_USER_SUCCESS", () => {
    const user = { id: 0, name: "eric" };
    expect(userReducer({}, actions.getUserSuccess(user))).toEqual({
      loading: false,
      user: user,
      error: null,
    });
  });

  it("should handle GET_USER_FAIL", () => {
    const error = "Something went wrong";
    expect(userReducer({}, actions.getUserFail(error))).toEqual({
      loading: false,
      user: [],
      error: error,
    });
  });

  it("should handle CLEAR_USER", () => {
    expect(userReducer({}, actions.clearUser())).toEqual({
      loading: false,
      user: {},
      error: null,
    });
  });
});
