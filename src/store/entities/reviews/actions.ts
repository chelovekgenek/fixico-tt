import { action, payload } from "ts-action";

import {
  ReviewsGetTypes,
  IReviewDraft,
  ReviewsPostTypes,
  ReviewsDeleteTypes,
  ReviewsPaginationTypes
} from "./types";
import { IState as IItemsState } from "./reducers/items";
import { IState as IPaginationState } from "./reducers/pagination";

export const ReviewsGetActions = {
  request: action(ReviewsGetTypes.REQUEST),
  success: action(ReviewsGetTypes.SUCCESS, payload<IItemsState["data"]>()),
  failure: action(ReviewsGetTypes.FAILURE)
};

export const ReviewsPostActions = {
  request: action(ReviewsPostTypes.REQUEST, payload<IReviewDraft>()),
  success: action(
    ReviewsPostTypes.SUCCESS,
    payload<IItemsState["data"][number]>()
  ),
  failure: action(ReviewsPostTypes.FAILURE)
};

export const ReviewsDeleteActions = {
  request: action(
    ReviewsDeleteTypes.REQUEST,
    payload<IItemsState["data"][number]["id"]>()
  ),
  success: action(
    ReviewsDeleteTypes.SUCCESS,
    payload<IItemsState["data"][number]["id"]>()
  ),
  failure: action(ReviewsDeleteTypes.FAILURE)
};

export const ReviewsPaginationActions = {
  setLimit: action(
    ReviewsPaginationTypes.SET_LIMIT,
    payload<IPaginationState["limit"]>()
  ),
  setPage: action(
    ReviewsPaginationTypes.SET_PAGE,
    payload<IPaginationState["page"]>()
  ),
  setTotal: action(
    ReviewsPaginationTypes.SET_TOTAL,
    payload<IPaginationState["total"]>()
  ),
  resetPage: action(ReviewsPaginationTypes.RESET_PAGE)
};
