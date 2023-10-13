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
`

const PartesBoneco = styled.div`
display: flex;
flex-direction: column;
gap: 0.8rem;
width: 350px;
font-size: 13px;
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
        {isPerdeu && 'Errou, errou feio, errou rude'}
        {isVenceu && 'Parabéns, você venceu'}
        <h1>PLACAR: Vitórias {vitorias} Derrotas {derrotas}</h1>
        <h2>Dica: Comidas brasileiras</h2>
        <ForcaDesenho numeroPalpites = {incorrectPalpites.length}/>
        <ForcaLetras letrasPrevistas ={letrasAcertadas} palavra = {pAdvinhar}/>
      </PartesBoneco>
      <Teclado activeLetra={correctPalpites}
        inactiveLetra={incorrectPalpites}
        addLetrasAcertadas={addLetrasAcertadas}
        disabled={isPerdeu || isVenceu}
        />
        <button onClick={reiniciarJogo}>REINICIAR</button>
    </Pacote>
  )
}

export default App
