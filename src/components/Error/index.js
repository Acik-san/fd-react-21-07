import React from "react";
import styles from "./Error.module.scss";

const Error = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cross}>X</div>
      <h2>Error!</h2>
      <h3>Something went wrong!</h3>
    </div>
  );
};

export default Error;
