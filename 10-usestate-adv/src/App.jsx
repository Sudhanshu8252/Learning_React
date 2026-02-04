import React,{ useState} from 'react'

const App = () => {

  // const [num, setNum] = useState({user:'Sudhanshu',age:20})

  // const btnClicked = ()=>{
  //   const newNum = {...num};
  //   newNum.user = 'Anshu'
  //   setNum(newNum)
  // }

  // const [num, setnum] = useState([10,20,30])

  // const btnClicked = ()=>{
  //   const newNum = [...num];
  //  newNum.push(99)
  //   setnum(newNum)
  // }

  const [num,Setnum] = useState(10)

  const buttonClicked =()=>{
       Setnum(prev=>(prev+1))
        Setnum(prev=>(prev+1))
         Setnum(prev=>(prev+7))
  }

  return (
    <div>
      {/* <h1 >hello my name is {num.user} & my age is {num.age}</h1>
      <button onClick={btnClicked}>click Me</button> */}

      {/* <h1>{num}</h1>
      <button onClick={btnClicked}>Click</button> */}

      <h1>{num}</h1>
      <button onClick={buttonClicked}>ClickMe</button>
    </div>
  )
}

export default App