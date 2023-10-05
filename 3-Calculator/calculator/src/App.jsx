import { useState } from 'react'
import Calculadora from './components/Calculadora'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
   <div className='App'>
    <Calculadora/>
   </div>
  );
};

export default App;
