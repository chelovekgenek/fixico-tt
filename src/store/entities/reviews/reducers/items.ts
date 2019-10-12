import { reducer, on } from "ts-action";

import {
  ReviewsGetActions,
  ReviewsPostActions,
  ReviewsDeleteActions
} from "../actions";
import { IReview } from "../types";

export interface IState {
  fetching: boolean;
  data: IReview[];
}

export const initialState: IState = {
  fetching: false,
  data: []
};

export default reducer(
  initialState,
  on(
    ReviewsGetActions.request,
    ReviewsPostActions.request,
    ReviewsDeleteActions.request,
    state => ({
      ...state,
      fetching: true
    })
  ),
  on(ReviewsGetActions.success, (state, { payload }) => ({
    ...state,
    fetching: false,
    data: payload
  })),
  // on(ReviewsDeleteActions.success, (state, { payload }) => ({
  //   ...state,
  //   fetching: false,
  //   data: state.data.filter(item => item.id !== payload),
  // })),
  // on(ReviewsPostActions.success, (state, { payload }) => ({
  //   ...state,
  //   fetching: false,
  //   data: state.data.concat(payload),
  // })),
  on(
    ReviewsGetActions.failure,
    ReviewsPostActions.failure,
    ReviewsDeleteActions.failure,
    state => ({
      ...state,
      fetching: false
    })
  )
);
