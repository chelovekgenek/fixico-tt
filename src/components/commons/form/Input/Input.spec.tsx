import React from "react";
import { shallow } from "enzyme";

import fieldProps from "mocks/formik-field-props";
import formProps from "mocks/formik-form-props";

import { InnerFormItem } from "./Input";

describe("Input", () => {
  const defaultProps = {
    ...fieldProps,
    field: { ...fieldProps.field, value: "value", name: "input" },
    name: "input",
    label: "input",
    value: "value"
  };
  const render = (
    props: Partial<React.ComponentProps<typeof InnerFormItem>> = {}
  ) => shallow(<InnerFormItem {...defaultProps} {...props} />);

  it("should render", () => {
    expect(render()).toMatchSnapshot();
  });
  it("should render errors", () => {
    expect(
      render({ form: { ...formProps, errors: { input: "error" } } })
    ).toMatchSnapshot();
  });
});
