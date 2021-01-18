import {
  GET_USERS_PENDING,
  GET_USERS_FAIL,
  GET_USERS_SUCCESS,
  ADD_UNIQUE_ID,
} from "./users.constant";
import * as actions from "./users.action";
import { usersReducer } from "./users.reducer";

describe("users actions", () => {
  it("should add loading state", () => {
    const expectedAction = {
      type: GET_USERS_PENDING,
    };
    expect(actions.getUsersPending()).toEqual(expectedAction);
  });

  it("should add users to store", () => {
    const data = [
      { id: 0, name: "eric" },
      { id: 1, name: "edik" },
    ];
    const expectedAction = {
      type: GET_USERS_SUCCESS,
      payload: data,
    };
    expect(actions.getUsersSuccess(data)).toEqual(expectedAction);
  });

  it("should add error state", () => {
    const error = "Something went wrong";
    const expectedAction = {
      type: GET_USERS_FAIL,
      error,
    };
    expect(actions.getUsersFail(error)).toEqual(expectedAction);
  });
});

describe("users reducers", () => {
  it("should return the initial state", () => {
    const initialState = {
      users: [],
      loading: false,
      error: null,
    };
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle GET_USERS_PENDING", () => {
    expect(usersReducer({}, actions.getUsersPending())).toEqual({
      loading: true,
    });
  });
  it("should handle GET_USERS_SUCCESS", () => {
    const users = [{ id: 0 }, { id: 1 }];
    expect(usersReducer({}, actions.getUsersSuccess(users))).toEqual({
      loading: false,
      users: users,
      error: null,
    });
  });
  it("should handle GET_USERS_FAIL", () => {
    const error = "Something went wrong";
    expect(usersReducer({}, actions.getUsersFail(error))).toEqual({
      loading: false,
      users: [],
      error: error,
    });
  });
});
