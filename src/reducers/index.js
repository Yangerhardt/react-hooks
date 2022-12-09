export function reducer(state, action) {
  switch (action.type) {
    case "numberAdd2":
      return { ...state, number: state.number + 2 };
    case "numberMultiplyBy7":
      return { ...state, number: state.number * 7 };
    case "numberDivideBy25":
      return { ...state, number: state.number / 25 };
    case "roundNumber":
      return { ...state, number: parseInt(state.number) };
    case "numberAddAny":
      return { ...state, number: state.number + action.payload };
    case "login":
      return { ...state, user: { name: action.payload } };
    default:
      return state;
  }
}