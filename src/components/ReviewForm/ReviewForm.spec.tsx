import React from "react";
import { shallow } from "enzyme";

import formProps from "mocks/formik-form-props";
import { Button } from "components/commons/ui";

import { ReviewForm } from "./ReviewForm";
import { initialValues } from "./schema";

describe("ReviewForm", () => {
  const render = (
    props: Partial<React.ComponentProps<typeof ReviewForm>> = {}
  ) =>
    shallow(
      <ReviewForm
        {...formProps}
        initialValues={initialValues}
        values={initialValues}
        create={jest.fn() as any}
        {...props}
      />
    );
  it("should render", () => {
    expect(render()).toMatchSnapshot();
  });
  it("should unlock submit button when prop is passed", () => {
    expect(
      render({ isValid: true })
        .find(Button)
        .prop("disabled")
    ).toBe(false);
  });
  it("should call Submit when button is clicked", () => {
    render({ isValid: true })
      .find(Button)
      .simulate("click");
    expect(formProps.handleSubmit).toBeCalled();
  });
});
