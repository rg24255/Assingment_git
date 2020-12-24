import { FETCH_USER_SUCCESS } from "../constants";
const initialState = { user: "" };

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case FETCH_USER_SUCCESS: {
      return action.user;
    }
    default:
      return state;
  }
}
