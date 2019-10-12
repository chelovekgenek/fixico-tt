import { expectSaga } from "redux-saga-test-plan";
import { call, select, put } from "redux-saga/effects";

import reviews from "mocks/reviews.json";

import reviewsItemsReducer, {
  initialState as reviewsItemsInitialState
} from "./reducers/items";
import paginationReducer, {
  initialState as paginationInitialState
} from "./reducers/pagination";
import { handleGet, handlePost, handleDelete } from "./saga";
import * as api from "./api";
import { getPagination } from "./selectors";
import { ReviewsPostActions, ReviewsDeleteActions } from "./actions";
import { NotificationsActions } from "../notifications";

describe("reviews", () => {
  describe("handleGet", () => {
    const providers = [
      [select(getPagination), paginationInitialState],
      [
        call(api.getReviews, paginationInitialState),
        {
          data: reviews,
          headers: { "x-total-count": String(reviews.length) }
        }
      ]
    ];
    it("should mutate reviews items reducer", async () =>
      expectSaga(handleGet)
        .withReducer(reviewsItemsReducer)
        .provide(providers)
        .hasFinalState({ ...reviewsItemsInitialState, data: reviews })
        .run());
    it("should mutate reviews pagination reducer", async () =>
      expectSaga(handleGet)
        .withReducer(paginationReducer)
        .provide(providers)
        .hasFinalState({ ...paginationInitialState, total: reviews.length })
        .run());
  });
  describe("handlePost", () => {
    const action = ReviewsPostActions.request({
      body: "asd",
      rating: 3
    });
    it("should run successfully", async () =>
      expectSaga(handlePost, action)
        .withReducer(reviewsItemsReducer)
        .provide([
          [
            call(api.postReviews, action.payload),
            {
              data: reviews
            }
          ]
        ])
        .put(ReviewsPostActions.success(reviews))
        .put(NotificationsActions.enqueue("Record has been created!"))
        .hasFinalState(reviewsItemsInitialState)
        .run());
  });
  describe("handleDelete", () => {
    const action = ReviewsDeleteActions.request("1");
    it("should run successfully", async () =>
      expectSaga(handleDelete, action)
        .withReducer(reviewsItemsReducer, {
          ...reviewsItemsInitialState,
          data: reviews
        })
        .provide([[call(api.deleteReviews, action.payload), {}]])
        .put(ReviewsDeleteActions.success(action.payload))
        .put(NotificationsActions.enqueue("Record has been deleted!"))
        .hasFinalState({ ...reviewsItemsInitialState, data: reviews })
        .run());
  });
});
