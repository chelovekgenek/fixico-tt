import { combineReducers } from "redux";

import items from "./reducers/items";
import pagination from "./reducers/pagination";

export default combineReducers({ items, pagination });
