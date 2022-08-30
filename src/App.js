import React, { useState, useReducer, useId } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomePage from "./pages/HomePage";
import { UserContext, ThemeContext, MenuContext } from "./contexts";
import { useClicker } from "./hooks";
import SignUpForm from "./components/forms/SignUpForm";
import Chat from "./components/Chat";
import NavMenu from "./components/NavMenu";
import reducer from "./reducerApp";
import CONSTANTS from "./constants";
const { THEMES, MENU_ACTIONS } = CONSTANTS;

const App = () => {
  const [user, setUser] = useState({
    id: 1,
    name: "Elon Musk",
    fname: "Elon",
    lname: "Musk",
    iseSelected: false,
  });
  const themeArrState = useState(THEMES.LIGHT);
  const count = useClicker();
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
  const menuOpen = () => {
    dispatch({ type: MENU_ACTIONS.MENU_OPEN });
  };
  const menuClose = () => {
    dispatch({ type: MENU_ACTIONS.MENU_CLOSE });
  };
  const idOpen = useId();
  const tabHandlerOpen = ({ key }) => {
    if (key === "Enter") {
      menuOpen();
    }
  };
  return (
    <MenuContext.Provider value={{ state, menuClose, menuOpen, idOpen }}>
      <ThemeContext.Provider value={themeArrState}>
        <UserContext.Provider value={[user, setUser]}>
          <MenuIcon
            onClick={menuOpen}
            id={idOpen}
            tabIndex="1"
            onKeyDown={tabHandlerOpen}
          />
          <p>Count: {count}</p>
          <BrowserRouter>
            <NavMenu />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ThemeContext.Provider>
    </MenuContext.Provider>
  );
};

export default App;
