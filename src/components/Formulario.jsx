import { useState, useEffect } from 'react'
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

    const [criptos, setCriptos] = useState([])

    const [moneda, SelectMonedas] = useSelectMonedas('Select Currency', monedas)
    const [criptoMoneda, SelectCriptoMoneda] = useSelectMonedas('Select Cripto', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCripto = resultado.Data.map(cripto => {
                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCripto)
        }
        consultarAPI()
    }, [])

    return (
        <form>
            <SelectMonedas />
            <SelectCriptoMoneda />
            <InputSubmit
                type="submit"
                value="Cotizar"
            />
        </form>
    )
}

export default Formulario