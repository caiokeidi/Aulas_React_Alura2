import React, {useState} from 'react';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';


function FormularioCadastro({aoEnviar, validarCPF}){ //Pegando a propriedade enviada.

    return(
        <>
        <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
        <DadosUsuario/>
        <DadosEntrega/>
        </>
    )
}

export default FormularioCadastro;