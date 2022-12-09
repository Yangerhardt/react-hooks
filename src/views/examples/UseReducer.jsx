import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

const initialState = {
  cart: [],
  prdoutos: [],
  user: null,
  // foco: alterar o number
  number: 0,
};

function reducer(state, action) {
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

const UseReducer = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem Usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "login", payload: "Maria" })}
          >
            Login
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAdd2" })}
          >
            +2
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberMultiplyBy7" })}
          >
            x7
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberDivideBy25" })}
          >
            %25
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "roundNumber" })}
          >
            Arredondar
          </button>
          <button
            className="btn"
            onClick={() => dispatch({ type: "numberAddAny", payload: 5 })}
          >
            +5
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
