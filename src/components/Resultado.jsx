import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Maven Pro', sans-serif;

    display:flex;
    align-items:center;
    gap: 1rem;
    margin-top:30px;
`
const Imagen = styled.img`
    display: block;
    width: 120px;

`
const Texto = styled.p`
font-size: 15px;
    span{
        font-weight:700;
    }
`
const Precio = styled.p`
    font-size: 20px;
    span{
        font-weight:700;
    }
`
const Resultado = ({ resultado }) => {
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE, IMAGEURL } = resultado
    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="imagen cripto" />
            <div>
                <Precio>El precio es de: <span>{PRICE}</span></Precio>
                <Texto>Precio mas alto: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio mas bajo: <span>{LOWDAY}</span></Texto>
                <Texto>Variacion: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Ulyima actualizacion: <span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado