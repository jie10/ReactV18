import { useState } from "react"

export default function UseStateArray({data}) {
  const [people, setPeople] = useState(data)

  function clearHandler() {
    setPeople([])
  }

  function delItem(id) {
    // const newPeople = people.filter((person) => person.id !== id)
    // setPeople(newPeople)
    setPeople((prevPeople) => prevPeople.filter((person) => person.id !== id))
  }

  return (
    <>
      {people.map((person) => {
        const {id, name} = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button className="btn" onClick={() => delItem(id)}>remove</button>
          </div>
        )
      })}
      <button className="btn" onClick={clearHandler}>Clear items</button>
    </>
  )
}