import React, { ComponentProps } from "react";
import { useField } from "formik";

type InputProps = {
  name: string;
} & ComponentProps<"input">;

const Input = ({ name, ...props }: InputProps) => {
  const [field, meta, helpers] = useField(name);

  return <input {...field} {...props} className={`__input`} />;
};

export default Input;
