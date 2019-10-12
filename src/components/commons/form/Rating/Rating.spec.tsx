import React from "react";
import { shallow } from "enzyme";

import fieldProps from "mocks/formik-field-props";

import { InnerFormItem } from "./Rating";

describe("Rating", () => {
  const defaultProps = {
    ...fieldProps,
    field: { ...fieldProps.field, value: 5, name: "rating" },
    name: "rating",
    label: "rating",
    value: 5
  };
  const render = (
    props: Partial<React.ComponentProps<typeof InnerFormItem>> = {}
  ) => shallow(<InnerFormItem {...defaultProps} {...props} />);

  it("should render", () => {
    expect(render()).toMatchSnapshot();
  });
});
