import { reducer, on } from "ts-action";
import { ReviewsPaginationActions } from "../actions";

export interface IState {
  limit: number;
  page: number;
  total: number;
}

export const initialState: IState = {
  limit: 5,
  page: 0,
  total: 0
};

export default reducer(
  initialState,
  on(ReviewsPaginationActions.setLimit, (state, { payload }) => ({
    ...state,
    page: initialState.page,
    limit: payload
  })),
  on(ReviewsPaginationActions.setTotal, (state, { payload }) => ({
    ...state,
    total: payload
  })),
  on(ReviewsPaginationActions.setPage, (state, { payload }) => ({
    ...state,
    page: payload
  })),
  on(ReviewsPaginationActions.resetPage, state => ({
    ...state,
    page: initialState.page
  }))
);
