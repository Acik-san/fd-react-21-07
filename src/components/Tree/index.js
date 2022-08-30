import React from "react";
import cx from "classnames";
import Parent from "./Parent";
import CONSTANTS from "../../constants";
import styles from "./Tree.module.scss";
import { WithTheme } from "../HOCs";
const { THEMES } = CONSTANTS;

const Tree = (props) => {
  const { theme } = props;
  const stylesContainer = cx(styles.container, {
    [styles.light]: theme === THEMES.LIGHT,
    [styles.dark]: theme === THEMES.DARK,
  });
  return (
    <div className={stylesContainer}>
      <h2>Tree</h2>
      <Parent />
    </div>
  );
};

export default WithTheme(Tree);
