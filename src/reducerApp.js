import CONSTANTS from "./constants";
const { MENU_ACTIONS } = CONSTANTS;

const reducerApp = (state, action) => {
  switch (action.type) {
    case MENU_ACTIONS.MENU_OPEN: {
      return { ...state, isMenuOpen: true };
    }
    case MENU_ACTIONS.MENU_CLOSE: {
      return { ...state, isMenuOpen: false };
    }
    default:
      return state;
  }
};
export default reducerApp;
