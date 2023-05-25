import React, { useState } from "react";
import Cartao from "../Componentes/Cartao.jsx";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao.jsx";
import { Formulario } from "../Componentes/Formulario.jsx";

function PaginaDoCartao() {
  //declare os estados aqui
  const [formaDePagamento, setFormaDePagamento] = useState("");
  const [numeroDoCartao, setNumeroDoCartao] = useState("");
  const [nomeDaPessoa, setnomeDaPessoa] = useState("");
  const [cvc, setCvc] = useState("");
  const [DataDeValidade, setDataDeValidade] = useState("");

  //declare as funções de controle de inputs aqui
  const handlesetFormaDePagamento = (event) =>setFormaDePagamento(event.target.value);
  const handleInputsNumeroDoCartao = (event) =>setNumeroDoCartao(event.target.value);
  const handleInputsName = (event) =>setnomeDaPessoa(event.target.value);
  const handleInputsCvc = (event) =>setCvc(event.target.value);
  const handleInputsValidade = (event) =>setDataDeValidade(event.target.value);

  const registerCard = (event) => {
    
    setFormaDePagamento("");
    setNumeroDoCartao("");
    setnomeDaPessoa("");
    setCvc("");
    setDataDeValidade("");
    alert('Seu Cartão foi registrado com sucesso')
 
  };

  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        pagamento={formaDePagamento}
        numero={numeroDoCartao}
        nome={nomeDaPessoa}
        cvc={cvc}
        validade={DataDeValidade}
      />
      <Formulario
        handlesetFormaDePagamento={handlesetFormaDePagamento} formaDePagamento={formaDePagamento}
        handleInputsNumeroDoCartao={handleInputsNumeroDoCartao} numeroDoCartao={numeroDoCartao}
        handleInputsName={handleInputsName} nomeDaPessoa={nomeDaPessoa}
        handleInputsCvc={handleInputsCvc} cvc={cvc}
        handleInputsValidade={handleInputsValidade} DataDeValidade={DataDeValidade}
        registerCard={registerCard}
      />
      {/* Chame o Componente Formulário Aqui */}
      {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;
