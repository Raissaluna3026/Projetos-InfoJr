import styled from "styled-components"

const teclas = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
]

const Pacote = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
gap: 0.5rem;
width: 600px;
`

const Button = styled.button<{isActive: boolean}>`
 background-color: ${(p) => p.isActive ? "#D2691E" : '#A52A2A'};
 color: white;
 opacity: ${(p) => p.isActive ? "null" : '0.3'};
 &:focus:disabled {
    outline:none;
    border-color: transparent;
    cursor: not-allowed;
 }

 &:focus-visible:disabled{
    outline:none;
    border-color: transparent;
    cursor: not-allowed;
 }
 &:hover:disabled{
    outline:none;
    border-color: transparent;
    cursor: not-allowed;
 }
`

interface KeyBoardProps {
    disabled?:boolean
    activeLetra: string[]
    inactiveLetra: string[]
    addLetrasAcertadas: (letra:string) => void
}

export default function Teclado({disabled=false, activeLetra,inactiveLetra,addLetrasAcertadas}: KeyBoardProps) {
    return(
        <Pacote>
            {teclas.map((letra)=> {
                const isActive = !activeLetra.includes(letra)
                const isInactive = !inactiveLetra.includes(letra)
                return (
                    <Button onClick={() => addLetrasAcertadas(letra)} isActive={isActive && isInactive} key={letra} disabled={!(isActive && isInactive) || disabled}>{letra.toUpperCase()}</Button>
                )
            })}
        </Pacote>
    )
}