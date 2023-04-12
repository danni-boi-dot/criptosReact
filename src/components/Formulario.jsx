import React from 'react'
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    background-color: #0597FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 18px;
    border-radius: 5px;
    transition: background-color .3s ease; 
    margin-top:30px;

    &:hover{
        background-color: #4da8fe;
        cursor: pointer;
    }
`

const Formulario = () => {


    const [SelectMonedas] = useSelectMonedas('Select Currency', monedas)

    return (
        <form>
            <SelectMonedas />
            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Formulario