import { useEffect, useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)


  function numChanging(){
    console.log("num is changing")
  }

  function num2Changing(){
    console.log("num2 is changing")
  }

  useEffect(function(){
    numChanging()
    console.log("Use effect is running....");
  },[num])


  return (
    <div>
      <h1>num is {num}</h1>
      <h1>num2 is {num2}</h1>
      
    <button onClick={()=>{
       setNum(num+1)
      
    }}>Change Num </button>

    <button onClick={()=>{
      setNum2(num2+2)
    }}>Change Num2</button>
    </div>
  )
}

export default App 