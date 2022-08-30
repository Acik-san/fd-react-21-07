import { ErrorMessage, Field } from "formik";
import React from "react";
import cx from "classnames";
import styles from "./InputInLabel.module.scss";

const InputInLabel = (props) => {
  const { name, ...restProps } = props;
  return (
    <label>
      <span>Enter your {name}</span>
      {/* <Field name={name}  {...restProps}/> */}
      <Field name={name}>
        {({ field, form, meta }) => {
          const inputClasses = cx(styles.input,  {
            [styles.invalid] : meta.error && meta.touched
          })
          return <input {...field} className={inputClasses} {...restProps}/>;
        }}
      </Field>
      <ErrorMessage name={name} component="div" className={styles.error} />
    </label>
  );
};

export default InputInLabel;