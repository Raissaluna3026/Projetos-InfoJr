import { useState } from 'react'
import './App.css'

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));
  }

  const limpar = (e) => {
    setResult("");
  }

  const apagar = (e) => {
    setResult(result.slice(0, result.length-1));
  }
  const calcule = (e) => {
    try {
      setResult(eval(result.toString()));
    } catch (err) {
      setResult("Erro");
    }
   }
  const porcentagem = () =>{
    setResult(parseFloat(result) / 100);
  }

  return (
    <>
      <div className='container'>
        <form> <input type="text" value={result} />
        </form>
        <div className='botoes'>
          <button id="limpar" className='btn colorequal' onClick={limpar}>Clear</button>
          <button id="apagar" className='btn' onClick={apagar}>C</button>
          <button name = "%"className='btn' onClick={porcentagem}>%</button>
          <button name = "/" className='btn colorbtn' onClick={handleClick}>÷</button>
          <button name = "7" className='btn' onClick={handleClick}>7</button>
          <button name = "8" className='btn' onClick={handleClick}>8</button>
          <button name = "9" className='btn' onClick={handleClick}>9</button>
          <button name = "*" className='btn colorbtn' onClick={handleClick}>X</button>
          <button name = "4" className='btn' onClick={handleClick}>4</button>
          <button name = "5" className='btn' onClick={handleClick}>5</button>
          <button name = "6" className='btn' onClick={handleClick}>6</button>
          <button name = "-" className='btn colorbtn' onClick={handleClick}>-</button>
          <button name = "1" className='btn' onClick={handleClick}>1</button>
          <button name = "2" className='btn' onClick={handleClick}>2</button>
          <button name = "3" className='btn' onClick={handleClick}>3</button>
          <button name = "+" className='btn colorbtn' onClick={handleClick}>+</button>
          <button name = "." className='btn' onClick={handleClick}>.</button>
          <button name = "0" className='btn' onClick={handleClick}>0</button>
          <button className='btn' onClick={handleClick}>+/-</button>
          <button id="resultado" className='btn colorequal' onClick={calcule}>=</button>
        </div>
      </div>
    </>
  );
};

export default App;
