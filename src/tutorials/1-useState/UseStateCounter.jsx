import { useState } from "react"

export default function UseStateCounter() {
  const [number, setNumber] = useState(0)

  function btnAdd() {
    setNumber(number + 1)
  }

  function btnMinus() {
    if (number >= 1) {
      setNumber(number - 1)
    }
  }

  function btnReset() {
    setNumber(0)
  }

  function addDelay() {
    setTimeout(() => {
      setNumber(number + 1)
    }, 2000)
  }

  return (
    <>
      <h1>regular counter</h1>
      <h2>{number}</h2>
      <button className="btn" onClick={btnAdd}>Add</button>
      <button className="btn" onClick={btnMinus}>Minus</button>
      <button className="btn" onClick={btnReset}>Reset</button>

      <h1>more complex counter</h1>
      <h2>{number}</h2>
      <button className="btn" onClick={addDelay}>add later</button>
    </>
  )
}