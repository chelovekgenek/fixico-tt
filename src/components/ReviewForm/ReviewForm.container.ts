import { connect } from "react-redux";
import { withFormik } from "formik";

import { TAppState } from "store/entities";

import { schema, initialValues } from "./schema";
import { IProps, ReviewForm } from "./ReviewForm";
import { ReviewsPostActions } from "store/entities/reviews";

export interface IDispatchProps {
  create: typeof ReviewsPostActions.request;
}

export const ReviewFormContainer = connect<{}, IDispatchProps, {}, TAppState>(
  null,
  {
    create: ReviewsPostActions.request
  }
)(
  withFormik<IProps, typeof initialValues>({
    handleSubmit: (values, { props, resetForm }) => {
      props.create(values);
      resetForm();
    },
    validationSchema: schema,
    validateOnBlur: true
  })(ReviewForm)
);
