import { useState } from "react"

export default function UseStateBasics() {
  const [title, setTitle] = useState("random title")

  function handlerTitle() {
    if (title === "random title") {
      setTitle("my title")
    } else {
      setTitle("random title")
    }
  }

  return (
    <>
      <h2>{title}</h2>
      <button onClick={handlerTitle}>Change title</button>
    </>
  )
}