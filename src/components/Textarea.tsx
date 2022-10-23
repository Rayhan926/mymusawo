import React, { ComponentProps } from "react";
import { useField } from "formik";

type TextAreaProps = {
  name: string;
} & ComponentProps<"textarea">;

const TextArea = ({ name, ...props }: TextAreaProps) => {
  const [field, meta, helpers] = useField(name);

  return <textarea {...field} {...props} className={`__input`}></textarea>;
};

export default TextArea;
