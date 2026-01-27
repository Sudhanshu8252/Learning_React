 import React from 'react'
import Card from './components/Card'
 
 const App = () => {
   return (
     <div className = "parent">
     
     <Card user = 'Manshi' age ={20} img ="https://plus.unsplash.com/premium_photo-1661629259850-9a893425f1f5?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z2lybCUyMGhvdHxlbnwwfHwwfHx8MA%3D%3D"  />
     <Card user = 'Shalini' age ={21} img = "https://images.unsplash.com/photo-1575439462433-8e1969065df7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdpcmwlMjBob3R8ZW58MHx8MHx8fDA%3D"/>
     <Card user = 'Suhani' age ={22} img ="https://images.unsplash.com/photo-1530555328699-3ac77bc66854?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGdpcmwlMjBob3R8ZW58MHx8MHx8fDA%3D"/>
     

     </div>
   )
 }
 
 export default App