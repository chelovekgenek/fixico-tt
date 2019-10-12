import { all, fork } from "redux-saga/effects";

import reviews from "./reviews/saga";

export function* sagas() {
  yield all([fork(reviews)]);
}
