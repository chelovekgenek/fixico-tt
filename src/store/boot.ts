import { Store } from "redux";
import { ReviewsGetActions } from "./entities/reviews";

export const handleBoot = (store: Store) => {
  store.dispatch(ReviewsGetActions.request());
};
