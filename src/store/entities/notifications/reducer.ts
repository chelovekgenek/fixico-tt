import { reducer, on } from "ts-action";

import { NotificationsActions } from "./actions";
import { INotification } from "./types";

export type TState = INotification[];

export const initialState: TState = [];

export default reducer(
  initialState,
  on(NotificationsActions.enqueue, (state, { payload }) =>
    state.concat({
      message: payload,
      key: String(new Date().getTime())
    })
  ),
  on(NotificationsActions.remove, (state, { payload }) =>
    state.filter(item => item.key !== payload)
  )
);
