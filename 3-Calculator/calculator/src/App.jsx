import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  return (
    <>
      <h1>This is a title</h1>
      
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <p>Count: {count}</p>

      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <p>Name: {name}</p>
    </>
  )
}

export default App
