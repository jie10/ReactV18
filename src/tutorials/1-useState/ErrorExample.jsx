export default function ErrorExample() {
  let title = "random title"

  function changeTitle() {
    title = "my title"
    console.log(title)
  }

  console.log(changeTitle)
  return (
    <>
      <h2>{title}</h2>
      <button onClick={changeTitle}>Change title</button>
    </>
  )
}