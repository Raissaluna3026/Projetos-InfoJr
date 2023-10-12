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

export default function Teclado() {
    return(
        <Pacote>
            {teclas.map((letra)=> (
                <Button isActive={true} key={letra} >{letra.toUpperCase()}</Button>
            ))}
        </Pacote>
    )
}