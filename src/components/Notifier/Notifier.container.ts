import { connect } from "react-redux";
import { withSnackbar } from "notistack";

import {
  getNotifications,
  NotificationsActions
} from "store/entities/notifications";
import { TAppState } from "store/entities";

import { Notifier } from "./Notifier";

export interface IStateProps {
  notifications: ReturnType<typeof getNotifications>;
}
export interface IDispatchProps {
  remove: typeof NotificationsActions.remove;
}

export const NotifierContainer = withSnackbar(
  connect<IStateProps, IDispatchProps, {}, TAppState>(
    state => ({
      notifications: getNotifications(state)
    }),
    {
      remove: NotificationsActions.remove
    }
  )(Notifier)
);
