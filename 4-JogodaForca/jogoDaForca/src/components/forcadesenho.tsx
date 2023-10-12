import styled from "styled-components"

const Base = styled.div`
height: 10px;
width: 250px;
background: white;
margin-left: 100px;
`
const Haste = styled.div`
height: 250px;
width: 10px;
background: white;
margin-left: 150px;
`
const Pendurar = styled.div`
height: 40px;
width: 10px;
background: white;
margin-left: 150px;
position: absolute;
top: 0;
right: 20px;
`

const LinhaHorizontal = styled.div`
height: 10px;
width: 170px;
background: white;
position: absolute;
right: 30px;
top: 0;
`
const Cabeca = styled.div`
height: 30px;
width: 30px;
border-radius: 50%;
border: 8px solid white;
position: absolute;
right: 2px;
top: 35px;
`
const Corpo = styled.div`
height: 80px;
width: 10px;
background: white;
position: absolute;
right: 18px;
top: 75px;
`
const BracoDireito = styled.div`
height: 10px;
width: 50px;
background: white;
position: absolute;
right: 22px;
top: 85px;
rotate: 30deg;
`
const BracoEsquerdo = styled.div`
height: 10px;
width: 50px;
background: white;
position: absolute;
right: -24px;
top: 86px;
rotate: -30deg;
`
const PernaDireita = styled.div`
height: 10px;
width: 50px;
background: white;
position: absolute;
right: 19px;
top: 160px;
rotate: -30deg;
`
const PernaEsquerda = styled.div`
height: 10px;
width: 50px;
background: white;
position: absolute;
right: -20px;
top: 159px;
rotate: 30deg;
`

const bodyParts = [Cabeca, Corpo, BracoDireito, BracoEsquerdo, PernaDireita, PernaEsquerda]

interface ForcaDesenhoProps{
    numeroPalpites : number
}



export default function ForcaDesenho({numeroPalpites}:ForcaDesenhoProps ) {
    return(
        <div style={{position: 'relative'}}>
            {bodyParts.slice(0, numeroPalpites).map((BodyParty, index) => {
                return <BodyParty key={index}/>
            })}
            <Pendurar/>
            <LinhaHorizontal/>
            <Haste/>
            <Base/>
        </div>
    )
}