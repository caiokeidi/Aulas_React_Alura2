import React, {useState} from 'react';
import {Button, TextField, Switch, FormControlLabel} from '@material-ui/core'

function FormularioCadastro(){
    const [nome, setNome] = useState('');
    const [sobrenome, SetSobrenome] = useState('');

    return(
        <form onSubmit={ (event) => {
                event.preventDefault();
                console.log(nome, sobrenome);
        }}>
            <TextField 
                value = {nome}
                onChange={event => {

                    let tempNome = event.target.value;
                    if(nome.length >= 3){
                        tempNome = tempNome.substr(0, 3);
                    }
                    setNome(tempNome)
                    
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
                id='CPF' 
                label='CPF' 
                variant='outlined' 
                margin='normal' 
                fullWidth
            />

            <FormControlLabel 
                label='Promoções'
                control={<Switch name='promocoes' defaultChecked color='primary'/>}
            />

            <FormControlLabel
                label='Novidades'
                control={<Switch name='novidades' defaultChecked color='primary'/>}
            />
            
            
            <Button type='submit' color="primary" variant="contained">
                Cadastrar
            </Button>
            
        </form>
    );
}

export default FormularioCadastro;