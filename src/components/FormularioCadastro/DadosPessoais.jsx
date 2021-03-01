import React, {useState, useContext} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core'
import ValidacoesCadastro from '../../context/ValidacoesCadastro';
import useErros from '../../hooks/useErros';


function DadosPessoais({aoEnviar}){ //Pegando a propriedade enviada.
    const [nome, setNome] = useState('');
    const [sobrenome, SetSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const validacoes =  useContext(ValidacoesCadastro);

    const [erros, validarCampos, possoEnviar] = useErros(validacoes);


    return(
        <form onSubmit={ (event) => {
                event.preventDefault();
                if(possoEnviar()){
                    aoEnviar({nome, sobrenome, cpf, novidades, promocoes})
                }
                

        }}>
            <TextField 
                value = {nome}
                onChange={event => {
                    setNome(event.target.value)
                }}
                onBlur={validarCampos}
                error={!erros.nome.valido}
                helperText={erros.nome.texto}
                id='Nome' 
                label='Nome' 
                name='nome'
                variant='outlined' 
                margin='normal' 
                fullWidth
            />
            <TextField 
                value = {sobrenome}
                onChange = {event => {
                    SetSobrenome(event.target.value)
                }}
                id='Sobrenome' 
                label='Sobrenome' 
                name='sobrenome'
                variant='outlined'
                margin='normal' 
                fullWidth
            />
            <TextField 
                value= {cpf}
                onChange = {event => {
                    setCpf(event.target.value)
                }}

                onBlur = {validarCampos}
                 
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='CPF' 
                label='CPF' 
                name= 'cpf'
                variant='outlined' 
                margin='normal' 
                fullWidth
            />

            <FormControlLabel 
                label='Promoções'
                control={<Switch 
                    checked={promocoes}
                    onChange = {event => {
                        setPromocoes(event.target.checked) //Switch tem checked e não value
                    }}
                    name='promocoes' 
                    color='primary'
                    />}
            />

            <FormControlLabel
                checked={novidades}
                label='Novidades'
                control={<Switch 
                    onChange = {event => {
                        setNovidades(event.target.checked)
                    }}
                    name='novidades' 
                    
                    color='primary'
                    />}
            />
            
            
            <Button type='submit' color="primary" variant="contained">
                Próximo
            </Button>
            
        </form>
    );
}

export default DadosPessoais;