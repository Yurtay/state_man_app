import { numbReducer } from "./numbReducer";
import { combineReducers, legacy_createStore as createStore } from "redux";
import { usersReducer } from "./usersReducer copy";
import { composeWithDevTools } from "redux-devtools-extension";

const rooReducer = combineReducers({
  users: usersReducer,
  numb: numbReducer,
});

export const store = createStore(rooReducer, composeWithDevTools());
