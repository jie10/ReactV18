import { useState } from "react"

export default function UseStateObject() {
  const [person, setPerson] = useState({
    name: "Jie",
    age: 26,
    message: "random message",
  })

  function btnMessage() {
    // Preserved previous data
    setPerson({...person, message: "my title"})
  }

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={btnMessage}>change message</button>
    </>
  )
}