import { numbReducer } from "./numbReducer";
import { legacy_createStore as createStore } from "redux";

export const store = createStore(numbReducer);
