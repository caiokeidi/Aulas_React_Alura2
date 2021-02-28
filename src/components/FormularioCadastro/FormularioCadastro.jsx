import React, {useState} from 'react';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({aoEnviar, validarCPF}){ //Pegando a propriedade enviada.

    return(
        <>
        <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
        <DadosUsuario/>
        </>
    )
}

export default FormularioCadastro;