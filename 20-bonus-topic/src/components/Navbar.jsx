import React from 'react'

const Navbar = (props) => {

    function changeTheme() {
        console.log('theme changed')
        props.setTheme('dark')
    }


  return (
    <div>
    
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar
