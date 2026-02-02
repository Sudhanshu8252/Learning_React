import React from 'react'

const App = () => {

  // function btnClicked(){
  //   console.log('button is clicked');
  // }

//   const mouseEnter = () => {
//   console.log('mouse is entered')
// }

// function inputChanging(val){
//         console.log(val);
//       }


const pageScrolling =(elem)=>{
  if(elem >0){
    console.log('seedha scrolling');
  }else{
    console.log('ulta scrolling');
  }
}


  return (
    <div onWheel={(elem)=>{
      pageScrolling(elem.deltaY)
    }}>

      {/* <button onClick={btnClicked}>Click here</button>
      <button onClick={function(){
        console.log('hello guys');
      }}>Explore this</button>

      <button onClick={() => {
         console.log('hello guys')
      }}>
       Explore this
      </button> */}

    {/* <input onChange={function(elem){
      console.log(elem.target.value);
    }}
      type="text"  placeholder='Enter your name'/> */}
    

    {/* <input 
    onChange={function(elem) {
      inputChanging(elem.target.value);
    }}

    type ="text"
    placeholder='Enter Name'
    
    
    /> */}

    {/* <div onMouseMove={(elem) =>{
        console.log (elem.clientX)
    }} 
    className='box'></div> */}


    <div className='page1'></div>
    <div className='page2'></div>
    <div className='page3'></div>
      


      </div>
  )
  
}

export default App