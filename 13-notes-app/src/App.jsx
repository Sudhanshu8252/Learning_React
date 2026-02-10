import  { useState } from 'react'


const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)
    

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx)=>{
    const copyTask =[...task];

    copyTask.splice(idx,1)
    setTask(copyTask)
    
    

  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}className='flex  p-10 lg:w-1/2 gap-4 items-start flex-col  '>

        <h1 className='text-4xl font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
       
         <input
         type="text" 
         placeholder='Enter Notes Heading'
         className='px-5  py-2 w-full font-medium border-2 outline-none rounded '
         value={title}
         onChange={(e)=>{
          setTitle(e.target.value)
         }}
         />

         {/* DETAILED VALA INPUT */}

         <textarea
         type="text" 
         placeholder='Write details here'
         className='px-5 h-32 w-full py-2 font-medium flex items-start flex-row outline-none border-2 rounded '
         value ={details}
         onChange={(e)=>{
          setDetails(e.target.value)
         }}
         />

         <button className='bg-white font-medium w-full outline-none text-black active:scale-95 px-5 py-2 rounded'> Add Note</button>
       
        
      </form>
      <div className=' lg:w-1/2 lg:border-l-2 p-10'>
      <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto'>
        {task.map(function(elem,idx){

          return <div key={idx} className="flex justify-between flex-col items-start relative h-52 w-40 rounded-xl text-black  bg-cover pt-9 pb-5 px-4 bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')]" >
            <div>

               <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
            <p className='mt-2 leading-tight font-semibold text-xm text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-400 py-1 text-xs rounded font-bold text-white'> Delete</button>
            
           
            </div>
        })}
       
        </div>

      </div>
      
    </div>
  )
} 

export default App