import { combineReducers } from "redux";

import reviews from "./reviews/reducer";
import notifications from "./notifications/reducer";

export const reducers = combineReducers({
  reviews,
  notifications
});

export type TAppState = ReturnType<typeof reducers>;
