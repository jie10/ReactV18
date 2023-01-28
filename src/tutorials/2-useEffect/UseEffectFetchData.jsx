import { useEffect, useState } from "react"

const url = "https://api.github.com/users"
export default function UseEffectFetchData() {
  const [users, setUsers] = useState([])
  const [error, setError] = useState()
  /*
    useEffect(() => {
      async function getUsers() {
        const res = await fetch(url)
        const users = await res.json()
        setUsers(users)
        console.log(users)
      }
  
      getUsers()
    }, [])
    */

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await fetch(url)
        const json = await res.json()
        setUsers(json)
      } catch (e) {
        setError(e)
      }
    }

    getUsers()
  }, [])

  console.log("render component")
  if (error) {
    return <h1>Error: {error}</h1>
  }
  if (users) {
    return (
      <>
        <h3>github users</h3>
        <ul className="users">
          {users.map((user) => {
            const {id, avatar_url, login, html_url} = user
            return (
              <li key={id}>
                <img src={avatar_url} alt={login}/>
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}