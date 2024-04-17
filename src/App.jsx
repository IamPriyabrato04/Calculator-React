import { useState } from 'react'
import './App.css'

function App() {

  const [input, setInput] = useState("");
  const [isNegative, setIsNegative] = useState(false);

  const handleBtnClick =(e)=>{
    setInput(input + e.target.innerHTML);
  }

  const handleAllClear =()=>{
    setInput("")
  }

  const handleDelClear =()=>{
    setInput(input.toString().slice(0, -1))
  }

  const handleEval=()=>{
    setInput(eval(input))
  }

  const handleMineus = () => {
    // If the string is empty, return
    if (input === '') return;

    // Toggle the state of isNegative
    setIsNegative(!isNegative);

    // If isNegative is true, add "-" to the front of the string
    // If isNegative is false, remove "-" from the front of the string
    if (isNegative) {
      setInput(input.substring(1));
    } else {
      setInput('-' + input);
    }
  };
  return (
    <>
      <div className='container border-2'>
        <div className='screen p-0'><input type='text' placeholder='0' className='h-16 my-5 mx-5 font-bold text-5xl font-mono bg-black-900' value={input} disabled={true}/></div>
        <div className='p-2 grid grid-cols-4 gap-4 border-2' >

          <button className='bg-lime-500 hover:bg-lime-900' onClick={handleAllClear}>AC</button>
          <button className='bg-red-400	hover:bg-red-900' onClick={handleDelClear}>DEL</button>
          <button onClick={handleBtnClick}>%</button>
          <button onClick={handleBtnClick}>/</button>

          <button onClick={handleBtnClick}>9</button>
          <button onClick={handleBtnClick}>8</button>
          <button onClick={handleBtnClick}>7</button>
          <button onClick={handleBtnClick}>*</button>

          <button onClick={handleBtnClick}>6</button>
          <button onClick={handleBtnClick}>5</button>
          <button onClick={handleBtnClick}>4</button>
          <button onClick={handleBtnClick}>-</button>

          <button onClick={handleBtnClick}>3</button>
          <button onClick={handleBtnClick}>2</button>
          <button onClick={handleBtnClick}>1</button>
          <button onClick={handleBtnClick}>+</button>

          <button onClick={handleBtnClick}>0</button>
          <button onClick={handleBtnClick}>.</button>
          <button onClick={handleMineus}>+/-</button>
          <button className='bg-emerald-500	hover:bg-emerald-900' onClick={handleEval}>=</button>
        </div>
      </div>

    </>
  )
}

export default App
