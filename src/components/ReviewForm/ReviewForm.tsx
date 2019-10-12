import React, { useCallback } from "react";
import { FormikProps } from "formik";

import { Grid } from "components/commons/layout";
import { Input, Rating } from "components/commons/form";
import { Button } from "components/commons/ui";

import { initialValues } from "./schema";
import { IDispatchProps } from "./ReviewForm.container";
import { FormWrapper, GridCenterItem } from "./ReviewForm.styled";

export interface IProps extends IDispatchProps {}

export const ReviewForm: React.FC<
  IProps & FormikProps<typeof initialValues>
> = ({ handleSubmit, isValid }) => {
  const handleClicked = useCallback(() => handleSubmit(), [handleSubmit]);
  return (
    <FormWrapper>
      <Grid container justify="space-between">
        <GridCenterItem item>
          <Input label="Body" name="body" />
        </GridCenterItem>
        <GridCenterItem item>
          <Rating label="Rating" name="rating" />
        </GridCenterItem>
        <GridCenterItem>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClicked}
            disabled={!isValid}
          >
            Create
          </Button>
        </GridCenterItem>
      </Grid>
    </FormWrapper>
  );
};
