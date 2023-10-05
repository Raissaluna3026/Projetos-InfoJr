import React, { useState } from 'react'
import './Calculadora.css'


export default function Calculadora(){
    const [num,setNum]=useState(0);
    const [antigonum,setAntigonum]=useState(0);
    const [operador,setOperador]=useState();

    function inputNum(e){
        var input =e.target.value;
        if(num===0){
            setNum(input);
        }else{
            setNum(num + input);
        }
    }
    function limpar(){
        setNum(0);
    }
    function porcentagem(){
        setNum(num/100);
    }
    function calcule(){
        if (operador==="/"){
            setNum(antigonum/num)
        }else if(operador==="X"){
            setNum(parseFloat(antigonum)*parseFloat(num))
        }else if(operador==="+"){
            setNum(parseFloat(antigonum)+parseFloat(num))
        }else if(operador==="-"){
            setNum(antigonum-num)
        }
    }
    function operadores(e){
        var operator = e.target.value
        setOperador(operator)
        setAntigonum(num)
        setNum(0)
    }
    return(
        <div className='box'>
            <h1 className='result'>{num}</h1>
            <button className='ac' onClick={limpar}>AC</button>
            <button>C</button>
            <button onClick={porcentagem}>%</button>
            <button className='op' onClick={operadores} value={"/"}>÷</button>
            <button onClick={inputNum} value={7}>7</button>
            <button onClick={inputNum} value={8}>8</button>
            <button onClick={inputNum} value={9}>9</button>
            <button className='op' onClick={operadores} value={"X"}>X</button>
            <button onClick={inputNum} value={4}>4</button>
            <button onClick={inputNum} value={5}>5</button>
            <button onClick={inputNum} value={6}>6</button>
            <button className='op' onClick={operadores} value={"-"}>-</button>
            <button onClick={inputNum} value={1}>1</button>
            <button onClick={inputNum} value={2}>2</button>
            <button onClick={inputNum} value={3}>3</button>
            <button className='op' onClick={operadores} value={"+"}>+</button>
            <button>+/-</button>
            <button onClick={inputNum} value={0}>0</button>
            <button onClick={inputNum} value={"."}>,</button>
            <button className='igual' onClick={calcule}>=</button>
        </div>
    )
}