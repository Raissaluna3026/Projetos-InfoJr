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
gap: 2rem;
width: 350px;
`

const palavras = ['betina']

function App() {
  const [pAdvinhar,setPAdvinhar] = useState(() => {
    return palavras[Math.floor(Math.random() * palavras.length)]
  })
  
  const [letrasAcertadas, setLetrasAcertadas] = useState<string[]>([])
  const incorrectPalpites = letrasAcertadas.filter((letra) => !pAdvinhar.includes(letra))


  const addLetrasAcertadas = useCallback((letra: string) => {
    console.log('letra:', letra, letrasAcertadas)
    if (letrasAcertadas.includes(letra)) return 

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

    return(() => {
      document.removeEventListener('keypress',menear)
    })
  },[letrasAcertadas])

  return (
    <Pacote>
      <PartesBoneco>
        <h2>COMEÇO DE TUDO</h2>
        <ForcaDesenho numeroPalpites = {incorrectPalpites.length}/>
        <ForcaLetras letrasPrevistas ={letrasAcertadas} palavra = {pAdvinhar}/>
      </PartesBoneco>
      <Teclado/>
    </Pacote>
  )
}

export default App
