export interface IReviewDraft {
  body: string;
  rating: number;
}
export interface IReview extends IReviewDraft {
  id: string;
}

export enum ReviewsGetTypes {
  REQUEST = "REVIEWS__GET__REQUEST",
  SUCCESS = "REVIEWS__GET__SUCCESS",
  FAILURE = "REVIEWS__GET__FAILURE"
}

export enum ReviewsPostTypes {
  REQUEST = "REVIEWS__POST__REQUEST",
  SUCCESS = "REVIEWS__POST__SUCCESS",
  FAILURE = "REVIEWS__POST__FAILURE"
}

export enum ReviewsDeleteTypes {
  REQUEST = "REVIEWS__DELETE__REQUEST",
  SUCCESS = "REVIEWS__DELETE__SUCCESS",
  FAILURE = "REVIEWS__DELETE__FAILURE"
}

export enum ReviewsPaginationTypes {
  SET_LIMIT = "REVIEWS__PAGINATION__SET_LIMIT",
  SET_PAGE = "REVIEWS__PAGINATION__SET_PAGE",
  SET_TOTAL = "REVIEWS__PAGINATION__SET_TOTAL",
  RESET_PAGE = "REVIEWS__PAGINATION__RESET_PAGE"
}
