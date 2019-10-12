import { takeLatest, put, call, select } from "redux-saga/effects";
import { AxiosResponse } from "axios";

import {
  ReviewsGetActions,
  ReviewsPostActions,
  ReviewsDeleteActions,
  ReviewsPaginationActions
} from "./actions";
import {
  ReviewsGetTypes,
  ReviewsPostTypes,
  ReviewsDeleteTypes,
  ReviewsPaginationTypes
} from "./types";
import { IState as IItemsState } from "./reducers/items";
import { getPagination } from "./selectors";
import * as api from "./api";
import { NotificationsActions } from "../notifications";

export function* handleGet() {
  try {
    const pagination: ReturnType<typeof getPagination> = yield select(
      getPagination
    );
    const { data, headers }: AxiosResponse<IItemsState["data"]> = yield call(
      api.getReviews,
      pagination
    );
    yield put(
      ReviewsPaginationActions.setTotal(Number(headers["x-total-count"]))
    );
    yield put(ReviewsGetActions.success(data));
  } catch (e) {
    yield put(ReviewsGetActions.failure());
  }
}

export function* handlePost({
  payload
}: ReturnType<typeof ReviewsPostActions.request>) {
  try {
    const { data } = yield call(api.postReviews, payload);
    yield put(ReviewsPostActions.success(data));
    yield put(NotificationsActions.enqueue("Record has been created!"));
  } catch (e) {
    yield put(ReviewsPostActions.failure());
  }
}

export function* handleDelete({
  payload
}: ReturnType<typeof ReviewsDeleteActions.request>) {
  try {
    yield call(api.deleteReviews, payload);
    yield put(ReviewsDeleteActions.success(payload));
    yield put(NotificationsActions.enqueue("Record has been deleted!"));
  } catch (e) {
    yield put(ReviewsDeleteActions.failure());
  }
}

export function* handlePagination() {
  yield put(ReviewsGetActions.request());
}

export function* handleMutationSuccess() {
  yield put(ReviewsPaginationActions.resetPage());
}

export default function*() {
  yield takeLatest(ReviewsGetTypes.REQUEST, handleGet);
  yield takeLatest(ReviewsPostTypes.REQUEST, handlePost);
  yield takeLatest(ReviewsDeleteTypes.REQUEST, handleDelete);
  yield takeLatest(
    [
      ReviewsPaginationTypes.SET_LIMIT,
      ReviewsPaginationTypes.SET_PAGE,
      ReviewsPaginationTypes.RESET_PAGE
    ],
    handlePagination
  );
  yield takeLatest(
    [ReviewsPostTypes.SUCCESS, ReviewsDeleteTypes.SUCCESS],
    handleMutationSuccess
  );
}
