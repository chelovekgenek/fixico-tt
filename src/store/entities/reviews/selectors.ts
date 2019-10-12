import { TAppState } from "../reducers";

export const getRoot = (state: TAppState) => state.reviews;
export const getItems = (state: TAppState) => state.reviews.items.data;
export const getPagination = (state: TAppState) => state.reviews.pagination;
