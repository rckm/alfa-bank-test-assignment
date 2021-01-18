import { v4 as uuidv4 } from "uuid";

const addUniqueId = (store) => (next) => (action) => {
  if (action.type === "GET_USERS_SUCCESS") {
    action.payload = action.payload.map((el) => ({ ...el, uniqueId: uuidv4() }));
  }
  next(action);
};

export default addUniqueId;
