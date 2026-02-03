import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(20)
  const [username, setUsername] = useState('ujwalla')
  const [numbers,setnumbers] = useState([10,20,30])

  

  function changeNum(){
    setNum(30)
    setUsername('Sudhanshu')
    setnumbers([100,20,30])
  }
  
  return (
    <div>
      <h1>Value of num is{num} <br/> value{numbers} of user is {username}</h1>
    
      <button onClick={changeNum}>Click</button>
    </div>
  )
}

export default App