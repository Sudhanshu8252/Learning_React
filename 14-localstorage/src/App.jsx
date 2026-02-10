import React from 'react'

const App = () => {

//   localStorage.setItem('user' ,'Sudhanshu')
//  localStorage.setItem('age',18)
//    const age =localStorage.getItem('age')
//   const user= localStorage.getItem('user')

//   localStorage.removeItem('user')
//   localStorage.removeItem('age')

//   console.log(age,user);

// const user={
//   username:'Sudhanshu',
//   age:23,
//   city:'Ranchi'
// }

// localStorage.setItem('user',JSON.stringify(user))

const user = JSON.parse(localStorage.getItem('user'))

console.log(user)


 
  return (
    <div>

    </div>
  )
}

export default App