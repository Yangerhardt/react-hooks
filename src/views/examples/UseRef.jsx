import React, { useRef, useState, useEffect } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");

  const count = useRef(0);
  const meuInput1 = useRef(null);
  const meuInput2 = useRef(null);

  useEffect(() => {
    count.current++;
    meuInput2.current.focus()
  }, [valor1]);

  useEffect(() => {
    count.current++;
    meuInput1.current.focus()
  }, [valor2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{valor1} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          type="text"
          className="input"
          value={valor1}
          onChange={(e) => setValor1(e.target.value)}
          ref={meuInput1}
        />
      </div>

      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          type="text"
          className="input"
          value={valor2}
          onChange={(e) => setValor2(e.target.value)}
          ref={meuInput2}
        />
      </div>
    </div>
  );
};

export default UseRef;
