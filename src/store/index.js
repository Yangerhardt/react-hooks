import { reducer } from "../reducers";
import { numberAdd2 } from "./actions/number";

const initialState = {
  cart: [],
  prdoutos: [],
  user: null,
  // foco: alterar o number
  number: 0,
};

export { numberAdd2, reducer, initialState };
