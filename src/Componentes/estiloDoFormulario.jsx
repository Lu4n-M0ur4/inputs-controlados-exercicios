//Declare o estilo do fomulário aqui
import styled from "styled-components";

export const DesignDoFormulario = styled.div `

display: flex;
    flex-direction: column;
  
form{
    
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
   
    select{
    align-self: center;

    }
    
    button{
        align-self: center;
    }
   
}

`