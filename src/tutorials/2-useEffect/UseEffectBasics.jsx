import { useEffect, useState } from "react"

export default function UseEffectBasics() {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log("call effect")
    if (value > 1) {
      document.title = `New Messages(${value})`
    }
  }, [value])

  function btnAdd() {
    setValue(value + 1)
  }

  console.log("render component")
  return (
    <>
      <h1>UseEffect Basics</h1>
      <h2>{value}</h2>
      <button className="btn" onClick={btnAdd}>click me</button>
    </>
  )
}