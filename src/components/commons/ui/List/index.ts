import * as MUI from "@material-ui/core";

import { Text } from "./Item";
import { Avatar } from "./Avatar";

export const List = Object.assign(MUI.List, {
  Item: Object.assign(MUI.ListItem, {
    Text,
    Avatar,
    SecondaryAction: MUI.ListItemSecondaryAction
  })
});
