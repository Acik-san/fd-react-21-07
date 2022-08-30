import CONSTANTS from "../../constants";
const { CHAT_ACTIONS } = CONSTANTS;

const reducer = (state, action) => {
  switch (action.type) {
    case CHAT_ACTIONS.FETCHING: {
      return { ...state, isFetching: true };
    }
    case CHAT_ACTIONS.FETCHING_COMPLETE: {
      return { ...state, isFetching: false };
    }
    case CHAT_ACTIONS.DATA_RESPONSE_SUCCESS: {
      const {
        data: { users, messages },
      } = action;
      const usersLinkMap = new Map();
      users.forEach((user) => usersLinkMap.set(user.id, user));
      const messagesWithUser = messages.map((message) => {
        const newMessageWithUser = {
          ...message,
          author: usersLinkMap.get(message.userId),
        };
        return newMessageWithUser;
      });
      const newState = { ...state, users, messages: messagesWithUser };
      return newState;
    }
    case CHAT_ACTIONS.DATA_RESPONSE_ERROR: {
      const newState = {
        ...state,
        error: action.error,
      };
      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
