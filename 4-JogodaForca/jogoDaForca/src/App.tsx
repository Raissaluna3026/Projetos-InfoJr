import { styled } from 'styled-components'
import './App.css'
import ForcaDesenho from './components/forcadesenho'
import ForcaLetras from './components/forcaletras'
import Teclado from './components/teclado'
import { useCallback, useEffect, useState } from 'react'


const Pacote = styled.div`
display: flex;
flex-direction: column;
gap: 2rem;
align-items: center;
width: 100%;

@media (max-width: 500px) {
  width: 70%;
  margin-left:55px;
}


`

const PartesBoneco = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 0.8rem;
width: 350px;
font-size: 13px;

@media (max-width: 500px) {
  width: 80%;
}
`
const Placar = styled.div`
  top: 20px; 
  right: 20px;
  background-color: #D2691E;
  border: 1px solid ##D2691E;
  padding: 10px;
  margin-bottom: 20px;
  margin-right: 50px;
  width: 100%;
  border-radius: 10px;
  color: white;

  @media (max-width: 500px) {
    width: 100%;
    margin-left:55px;
  }
`
const BotaoReiniciar = styled.button` 
  background-color:#D2691E; 
  color: white; 
  padding: 12px;
  margin-top: 2px;
  font-size: 18px;

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 20px;
  }
`
const MensagemVitoria = styled.div`
  color: black; 
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold;
  color: #D2691E;

  @media (max-width: 500px) {
    width: 150%;
    font-size: 15px;
    margin-top:12px;
  }
`
const MensagemDerrota = styled.div`
  color: red;
  display:flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: bold; 
  color: #D2691E;
  @media (max-width: 500px) {
    width: 150%;
    font-size: 15px;
    margin-top:12px;
  }

`


const palavras = ['betina']

function App() {
  const [vitorias, setVitorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);

  const [pAdvinhar,setPAdvinhar] = useState(() => {
    return palavras[Math.floor(Math.random() * palavras.length)]
  })
  
  const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([])

  const reiniciarJogo = () => {
    setPAdvinhar(palavras[Math.floor(Math.random() * palavras.length)]);
    setLetrasAcertadas([]);
  }

  const incorrectPalpites = letrasAcertadas.filter((letra) => 
  !pAdvinhar.includes(letra))

  const correctPalpites = letrasAcertadas.filter((letra) =>
  pAdvinhar.includes(letra)
  )


  const addLetrasAcertadas = useCallback((letra: string) => {
    console.log('letra:', letra, letrasAcertadas)
    if (letrasAcertadas.includes(letra) || isPerdeu || isVenceu) return 

    setLetrasAcertadas((letrasAcertadas) => [...letrasAcertadas, letra])
  }, [letrasAcertadas])



  useEffect(() => {
    const menear = ((e: KeyboardEvent) => {
      const key = e.key


      if(!key.match(/^[a-z]$/)) return 

      e.preventDefault()
      addLetrasAcertadas(key)

    }) as unknown as EventListener
    
    document.addEventListener('keypress',menear)

    if (isVenceu) {
      setVitorias(vitorias + 1);
    }
    if (isPerdeu) {
      setDerrotas(derrotas + 1);
    }

    return(() => {
      document.removeEventListener('keypress',menear)
    })

  },[letrasAcertadas])

  const isPerdeu = incorrectPalpites.length >= 6
  const isVenceu = pAdvinhar.split('').every((letra) => letrasAcertadas.includes(letra)) 

  return (
    <Pacote>
      <PartesBoneco>
        <MensagemDerrota>
          {isPerdeu && 'Errou, errou feio, errou rude.. Reinicie o jogo para uma revanche!'}
        </MensagemDerrota>
        <MensagemVitoria>
        {isVenceu && 'PARABÉNS, VOCÊ GANHOU! Reinicie o jogo, para jogar novamente'}
        </MensagemVitoria>
        <ForcaDesenho numeroPalpites = {incorrectPalpites.length}/>
        <ForcaLetras letrasPrevistas ={letrasAcertadas} palavra = {pAdvinhar}/>
      </PartesBoneco>
      <Placar>
        <h2> {vitorias} Vitórias, {derrotas} Derrotas</h2>
        </Placar>
      <Teclado activeLetra={correctPalpites}
        inactiveLetra={incorrectPalpites}
        addLetrasAcertadas={addLetrasAcertadas}
        disabled={isPerdeu || isVenceu}
        />
        <BotaoReiniciar onClick={reiniciarJogo}>REINICIAR JOGO</BotaoReiniciar>
    </Pacote>
  )
}

export default App
