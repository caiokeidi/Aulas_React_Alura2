import React from 'react';
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

function FormularioCadastro(){
    return(
        <form>
            <TextField id='Nome' label='Nome' variant='outlined' margin='normal' fullWidth/>
            <TextField id='Sobrenome' label='Sobrenome' variant='outlined' margin='normal' fullWidth/>
            <TextField id='CPF' label='CPF' variant='outlined' margin='normal' fullWidth/>

            <label>Promoções</label>
            <input type='checkbox'/>   

            <label>Novidades</label>
            <input type='checkbox'/>  

            <Button type='submit' color="primary" variant="contained">
                Cadastrar
            </Button>
            
        </form>
    );
}

export default FormularioCadastro;