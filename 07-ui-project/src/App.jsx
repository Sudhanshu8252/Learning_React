import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => {

  const users= [
    {
      img: 'https://plus.unsplash.com/premium_photo-1661630839991-b898e1a0ee76?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29ya2luZyUyMHByb2Zlc3Npb25hbCUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
      intro :'',
      color :'blue',
      tag:'Satisfied'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661505218403-c684557a824d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
      intro :'',
      color :'lightseagreen',
      tag:'Underserved'
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1674055047771-a7658f3f9c23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D',
      intro :'',
      color :'purple',
      tag:'Underbanked'
    },{
      img:'https://images.unsplash.com/photo-1748666948369-d8eb966959c8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvcnBvcmF0ZSUyMGdpcmx8ZW58MHx8MHx8fDA%3D',
      intro:'',
      color :'pink',
      tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users={users}/>
      <Section2/>
      </div>
  )
}

export default App