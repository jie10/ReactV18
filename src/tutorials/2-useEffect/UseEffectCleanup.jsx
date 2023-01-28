import { useEffect, useState } from "react"

export default function UseEffectCleanup() {
  const [size, setSize] = useState(window.innerWidth)
  console.log(size)

  function checkSize() {
    setSize(window.innerWidth)
  }

  useEffect(() => {
    console.log("useEffect")
    window.addEventListener("resize", checkSize)
  }, [])
  console.log("render component")
  return (
    <>
      <h1>window</h1>
      <h2>{size} px</h2>
    </>
  )
}