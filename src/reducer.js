export const counterReducer = (state = 0, action) => {
  console.log(`Our action type is ${action.type}`);

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};
