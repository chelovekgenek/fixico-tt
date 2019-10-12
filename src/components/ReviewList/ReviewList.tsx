import React, { useCallback, ComponentProps } from "react";

import {
  List,
  IconButton,
  Icon,
  Rating,
  Pagination
} from "components/commons/ui";

import { IStateProps, IDispatchProps } from "./ReviewList.container";

interface IProps extends IStateProps, IDispatchProps {}

export const ReviewList: React.FC<IProps> = ({
  reviews,
  pagination,
  deleteById,
  setPage,
  setLimit
}) => {
  const handleChangePage = useCallback<
    React.ComponentProps<typeof Pagination>["onChangePage"]
  >((e, page) => setPage(page), [setPage]);
  const handleChangeRowsPerPage = useCallback<
    Required<React.ComponentProps<typeof Pagination>>["onChangeRowsPerPage"]
  >(e => setLimit(Number(e.target.value)), [setLimit]);
  return (
    <React.Fragment>
      <List>
        {reviews.map(item => (
          <List.Item key={item.id}>
            <List.Item.Avatar>
              <Rating value={item.rating} readOnly />
            </List.Item.Avatar>
            <List.Item.Text>{item.body}</List.Item.Text>
            <List.Item.SecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => deleteById(item.id)}
              >
                <Icon>delete</Icon>
              </IconButton>
            </List.Item.SecondaryAction>
          </List.Item>
        ))}
      </List>
      {Boolean(pagination.total) && (
        <Pagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={pagination.total}
          rowsPerPage={pagination.limit}
          page={pagination.page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </React.Fragment>
  );
};
