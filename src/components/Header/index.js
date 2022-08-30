import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import { WbSunny, DarkMode } from "@mui/icons-material";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
import { WithTheme, WithUser } from "../HOCs";
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    const {
      theme,
      setTheme,
      user: { fname },
    } = this.props;
    const isLightTheme = theme === THEMES.LIGHT;
    const stylesContainer = cx(styles.container, {
      [styles.light]: isLightTheme,
      [styles.dark]: theme === THEMES.DARK,
    });
    const hendlerSwitch = () => {
      const newTheme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
      setTheme(newTheme);
    };
    return (
      <header className={stylesContainer}>
        <Link to="/">Logo</Link>
        <div>
          <span onClick={hendlerSwitch}>
            {isLightTheme ? <DarkMode /> : <WbSunny />}
          </span>
          <p>Hi, {fname}!</p>
        </div>
      </header>
    );
  }
}

export default WithUser(WithTheme(Header));
