import { action, payload } from "ts-action";

import { NotificationsTypes } from "./types";
import { TState } from "./reducer";

export const NotificationsActions = {
  enqueue: action(
    NotificationsTypes.ENQUEUE,
    payload<TState[number]["message"]>()
  ),
  remove: action(NotificationsTypes.REMOVE, payload<TState[number]["key"]>())
};
