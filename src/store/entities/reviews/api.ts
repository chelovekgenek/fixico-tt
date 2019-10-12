import { request } from "helpers";

import { IReview } from "./types";
import { ReviewsPostActions, ReviewsDeleteActions } from "./actions";
import { IState as IItemsState } from "./reducers/items";
import { IState as IPaginationState } from "./reducers/pagination";

export const getReviews = async (params: IPaginationState) =>
  request.get<IItemsState["data"]>(
    `/reviews?_limit=${params.limit}&_page=${params.page + 1}`
  );

type TPostReviews = ReturnType<typeof ReviewsPostActions.request>["payload"];
export const postReviews = async (payload: TPostReviews) =>
  request.post<IReview[]>("/reviews", payload);

type TDeleteReviews = ReturnType<
  typeof ReviewsDeleteActions.request
>["payload"];
export const deleteReviews = async (param: TDeleteReviews) =>
  request.delete<IReview[]>(`/reviews/${param}`);
