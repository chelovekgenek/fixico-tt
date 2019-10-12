import React from "react";
import { Field, FieldProps } from "formik";

import { InputWrapper } from "./Input.styled";

interface IProps {
  name: string;
  label: string;
}

export const Input: React.FC<IProps> = ({ name, label, ...props }) => (
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
  <InputWrapper
    label={label}
    id={name}
    error={Object.keys(form.errors).includes(name)}
    helperText={form.errors[name]}
    value={field.value || ""}
    onChange={field.onChange}
    onBlur={field.onBlur}
    {...props}
  />
);
