import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core'


function FormularioCadastro({aoEnviar}){ //Pegando a propriedade enviada.
    const [nome, setNome] = useState('');
    const [sobrenome, SetSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({cpf:{valido:true, texto:''}});

    return(
        <form onSubmit={ (event) => {
                event.preventDefault();
                aoEnviar({nome, sobrenome, cpf, novidades, promocoes})

        }}>
            <TextField 
                value = {nome}
                onChange={event => {
                    setNome(event.target.value)
                }}
                id='Nome' 
                label='Nome' 
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
                variant='outlined'
                margin='normal' 
                fullWidth
            />
            <TextField 
                value= {cpf}
                onChange = {event => {
                    setCpf(event.target.value)
                }}

                onBlur = {event => {
                    setErros({cpf:{valido: false, texto: 'CPF deve ter 11 dígitos'}})
                }}
                error={!erros.cpf.valido}
                helperText={erros.cpf.texto}
                id='CPF' 
                label='CPF' 
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
                Cadastrar
            </Button>
            
        </form>
    );
}

export default FormularioCadastro;