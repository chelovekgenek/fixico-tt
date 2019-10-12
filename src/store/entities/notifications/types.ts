export interface INotification {
  message: string;
  key: string;
}

export enum NotificationsTypes {
  ENQUEUE = "NOTIFICATIONS__ENQUEUE",
  REMOVE = "NOTIFICATIONS__REMOVE"
}
