const defaultlState = [];

export const usersReducer = (state = defaultlState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, numb: state.numb + action.payload };
      break;
    case "DECREMENT":
      return { ...state, numb: state.numb - action.payload };
      break;
    default:
      return state;
      break;
  }
};
