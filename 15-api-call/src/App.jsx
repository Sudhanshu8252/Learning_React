//API CALL THROUGH AXIOS
import React from 'react'
import axios from 'axios'
import { useState } from 'react'


const App = () => {

const [data, setdata] = useState([])

  const getData =async()=>{
  
    const response =  await axios.get('https://picsum.photos/v2/list')
    setdata(response.data)
  }

  return ( 
    <div>
      <button onClick={getData}>Get Data</button>
      <div>
        {data.map(function (elem,idx){
          return <h3>Hello,{elem.author} {idx}</h3>
        })}
      </div>
      
    </div>

    
  )
}

export default App



//API CALL THROUGH AXIOS
// import React from 'react'
// import axios from 'axios'


// const App = () => {

//   const getData =async()=>{
//   // const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//   const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
//    //console.log(response);
//    console.log(data);
   
//   }
//   return ( 
//     <div>
//       <button onClick={getData}>Get Data</button>
      
//     </div>
//   )
// }

// export default App


//API CALL THROUGH GET DATA
// import React from 'react'

// const App = () => {

//   async function getData(){
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     console.log(response)
//   }
//   return ( 
//     <div>
//       <button onClick={getData}>Get Data</button>
      
//     </div>
//   )
// }

// export default App





// import React from 'react'


// const App = () => {

//   const getData =async()=>{
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     const data = await response.json()
//     console.log(data)
//   }
//   return ( 
//     <div>
//       <button onClick={getData}>Get Data</button>
      
//     </div>
//   )
// }

// export default App





// import React from 'react'

// const App = () => {
//   return (
//     <div>
//       <button
//         onClick={() => {
//           console.log('Data aa gya')
//         }}
//       >
//         Explore this
//       </button>
//     </div>
//   )
// }

// export default App






// import React from 'react'

// const App = () => {

//   function getData(){
//     console.log('Data aa gya ')
//   }
//   return ( 
//     <div>
//       <button onClick={getData}>Get Data</button>
      
//     </div>
//   )
// }

// export default App
