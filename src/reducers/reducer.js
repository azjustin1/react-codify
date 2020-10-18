export const initialState = {
  isSignIn: false,
  isLoading: false,
  isDarkMode: false,
};

export const ACTION_TYPE = {
  LOG_IN: "LOG_IN",
  START_LOADING: "START_LOADING",
  FINISH_LOADING: "FINISH_LOADING",
  SWITCH_DARK_MODE: "SWITCH_DARK_MODE",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPE.LOG_IN:
      return {
        ...state,
        isSignIn: true,
      };
    case ACTION_TYPE.START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ACTION_TYPE.FINISH_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case ACTION_TYPE.SWITCH_DARK_MODE:
      return {
        ...state,
        isDarkMode: !action.darkMode,
      };
  }
};

export default reducer;
