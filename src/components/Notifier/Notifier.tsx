import React, { useEffect, useState } from "react";
import { WithSnackbarProps } from "notistack";

import { IStateProps, IDispatchProps } from "./Notifier.container";

interface IProps extends IStateProps, IDispatchProps, WithSnackbarProps {}

export const Notifier: React.FC<IProps> = ({
  notifications,
  remove,
  enqueueSnackbar
}) => {
  const [displayed, setDisplayed] = useState<
    typeof notifications[number]["key"][]
  >([]);
  useEffect(() => {
    for (let notification of notifications) {
      if (displayed.includes(notification.key)) {
        continue;
      }
      enqueueSnackbar(notification.message, {
        ...notification,
        onClose: () => {
          remove(notification.key);
          setDisplayed(
            notifications
              .filter(item => item.key !== notification.key)
              .map(item => item.key)
          );
        },
        onEntered: () => {
          setDisplayed(displayed.concat(notification.key));
        }
      });
    }
  }, [notifications, displayed, remove, enqueueSnackbar]);
  return null;
};
