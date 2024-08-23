import { useState } from "react"

function App() {
  // let num = 10
  const [num , setNum] = useState(0)

  function addNum() {
    setNum(num + 1)
  }
  function minusNum() {
    setNum(num - 1)
  }
  return(
    <>
    <h1>Hello World</h1>
    <h1>{num}</h1>
    <button onClick={addNum}>Add</button>
    <button onClick={minusNum}>Minus</button>
    </>
  )
}
export default App