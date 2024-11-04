import { useRef, useState } from "react"

const AppHome = () => {
  const [count, setCount] = useState(0);

  const countRef = useRef(0);
  const timerRef = useRef(0);

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      const newCount = count + 1;
      countRef.current++
      setCount(newCount);
      console.log("Getting called", newCount, count, countRef)
      console.log("only ref", countRef, timerRef)
    }, 1000)
  }
  console.log("Check Count", count);

  return [<div key={"first"}>AppHome: {count}</div>,
    <button onClick={startTimer} key={"SecondButton"}>CLickMe</button>,
    <button onClick={() => clearInterval(timerRef.current)} key={"SecondButton1"}>CLickMe</button>,
  ]
}


export default AppHome