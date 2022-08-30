import { ErrorMessage, Field, useField } from "formik";
import React from "react";
import cx from "classnames";
import styles from "./InputInLabel.module.scss";

const InputInLabelHook = (props) => {
  const { name, ...restProps } = props;
  const [field, meta, helpers] = useField(name);
  const inputClasses = cx(styles.input, {
    [styles.invalid]: meta.error && meta.touched,
  });
  return (
    <label>
      <span>Enter your {name}</span>
      <input {...field} className={inputClasses} {...restProps} />
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default InputInLabelHook;
