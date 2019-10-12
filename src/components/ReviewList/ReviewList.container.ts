import { connect } from "react-redux";

import { ReviewList } from "./ReviewList";

import { TAppState } from "store/entities";
import {
  getItems,
  ReviewsDeleteActions,
  getPagination,
  ReviewsPaginationActions
} from "store/entities/reviews";

export interface IStateProps {
  reviews: ReturnType<typeof getItems>;
  pagination: ReturnType<typeof getPagination>;
}
export interface IDispatchProps {
  deleteById: typeof ReviewsDeleteActions.request;
  setPage: typeof ReviewsPaginationActions.setPage;
  setLimit: typeof ReviewsPaginationActions.setLimit;
}

export const ReviewListContainer = connect<
  IStateProps,
  IDispatchProps,
  {},
  TAppState
>(
  state => ({
    reviews: getItems(state),
    pagination: getPagination(state)
  }),
  {
    deleteById: ReviewsDeleteActions.request,
    setPage: ReviewsPaginationActions.setPage,
    setLimit: ReviewsPaginationActions.setLimit
  }
)(ReviewList);
