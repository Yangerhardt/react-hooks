import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";

import { initialState, numberAdd2, reducer } from "../../store";

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
            onClick={() => numberAdd2(dispatch)}
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
