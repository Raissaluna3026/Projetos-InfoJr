
import styled from 'styled-components'


const Pacote = styled.div`
display:flex;
gap: 0.5rem;
font-size: 2.5rem;
font-weight: bold;
text-transform: uppercase;
font-family: monospace;
justify-content:center;
width: 100%;
`

interface ForcaLetrasProps{
    palavra: string
    letrasPrevistas: string[]
}

export default function ForcaLetras({palavra, letrasPrevistas} : ForcaLetrasProps) {
    
    return(
        <Pacote>{palavra.split("").map((letra, index) => (
            <span style={{borderBottom: "0.1em solid #D2691E", height: '50px', width: '50px'}} key={index}>
                <span style={{visibility: letrasPrevistas.includes(letra) ? 'visible' : 'hidden', color: '#D2691E'}}>{letra}</span>
            </span>
        )) }</Pacote>
    )
}