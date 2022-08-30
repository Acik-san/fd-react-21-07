import React, { useContext, useRef, useEffect, useId } from "react";
import { NavLink } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
import cx from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../contexts";

const NavMenu = () => {
  const {
    state: { isMenuOpen },
    menuClose,
    idOpen,
  } = useContext(MenuContext);
  const navRef = useRef(null);
  const navClassName = cx(styles.nav, { [styles.open]: isMenuOpen });
  const idNav = useId();
  useEffect(() => {
    const handlerClick = ({ target }) => {
      // if (isMenuOpen && !navRef.current.contains(target)) {
      if (
        isMenuOpen &&
        !document.getElementById(idNav).contains(target) &&
        !document.getElementById(idOpen).contains(target)
      ) {
        menuClose();
      }
    };
    window.addEventListener("click", handlerClick);
    return () => {
      window.removeEventListener("click", handlerClick);
    };
  }, [isMenuOpen]);
  const tabHandlerClose = ({ key }) => {
    if (key === "Enter") {
      menuClose();
    }
  };
  return (
    <nav className={navClassName} ref={navRef} id={idNav}>
      {/* <MenuIcon className={styles["open-btn"]} onClick={menuOpen} /> */}
      <CloseIcon
        className={styles["close-btn"]}
        onClick={menuClose}
        tabIndex="0"
        onKeyDown={tabHandlerClose}
      />
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
