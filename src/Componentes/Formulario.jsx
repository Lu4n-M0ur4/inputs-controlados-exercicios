//declare todo o componente formulário e seus inputs. Exporte o formulário.
import React from "react";
import { DesignDoFormulario } from "./estiloDoFormulario";

export function Formulario(props) {
  const {
    formaDePagamento,
    numeroDoCartao,
    cvc,
    DataDeValidade,
    nomeDaPessoa,
    handlesetFormaDePagamento,
    handleInputsNumeroDoCartao,
    handleInputsName,
    handleInputsCvc,
    handleInputsValidade,
    registerCard,
  } = props;

  return (
    <DesignDoFormulario>
      <form onSubmit={registerCard}>
        <select value={formaDePagamento} onChange={handlesetFormaDePagamento}>
          <option value="Crédito">Crédito</option>
          <option Value="Débito">Débito</option>
        </select>

        <label>
          Número do Cartão:
          <input
            type="text"
            value={numeroDoCartao}
            onChange={handleInputsNumeroDoCartao}
          />
        </label>

        <label>
          Nome da Pessoa:
          <input type="text" value={nomeDaPessoa} onChange={handleInputsName} />
        </label>

        <label>
          CVC:
          <input type="text" value={cvc} onChange={handleInputsCvc} />
        </label>

        <label>
          Data de Validade:
          <input
            type="data"
            value={DataDeValidade}
            onChange={handleInputsValidade}
          />
        </label>
        <button>Cadastrar</button>
      </form>
    </DesignDoFormulario>
  );
}
