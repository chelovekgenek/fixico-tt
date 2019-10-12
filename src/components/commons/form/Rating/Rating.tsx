import React from "react";
import { Field, FieldProps } from "formik";

import { Rating as MUIRating } from "components/commons/ui";

import { BoxWrapper, TypographyWrapper } from "./Rating.styled";

interface IProps {
  name: string;
  label: string;
}

export const Rating: React.FC<IProps> = ({ name, label }) => (
  <Field name={name}>
    {(props: FieldProps) => (
      <InnerFormItem name={name} label={label} {...props} />
    )}
  </Field>
);

export const InnerFormItem: React.FC<IProps & FieldProps> = ({
  label,
  name,
  field,
  form,
  ...props
}) => (
  <BoxWrapper component="fieldset" borderColor="transparent">
    <TypographyWrapper component="legend">{label}</TypographyWrapper>
    <MUIRating
      id={name}
      name={name}
      value={field.value}
      onChange={field.onChange}
      onBlur={field.onBlur}
    />
  </BoxWrapper>
);
