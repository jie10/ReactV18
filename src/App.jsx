import Setup from "./tutorials/2-useEffect/UseEffectFetchData"
import "./App.css"

const data = [
  {id: 1, name: "john"},
  {id: 2, name: "peter"},
  {id: 3, name: "susan"},
  {id: 4, name: "anna"},
]

function App() {
  return (
    <div className="container">
      <Setup/>
    </div>
  )
}

export default App
