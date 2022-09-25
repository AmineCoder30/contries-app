import React,{useState} from 'react'
import {MdDarkMode} from 'react-icons/md'
import {BsSun} from 'react-icons/bs'

 function Header() {
  const [mode,setMode] = useState(true)
  const changeMode = ()=>{
    setMode(!mode)
    if(mode){
       document.body.classList.remove('light-theme')
      document.body.classList.add('dark-theme')
    }
    else{
      document.body.classList.remove('dark-theme')
      document.body.classList.add('light-theme')
    }
  
  }
  return (
    <div className='header'>
        <h2>where in the world?</h2>
        <div onClick={changeMode}  className='icon-theme'>
            <BsSun/>
            <MdDarkMode/>
            <span className={mode?'light':''}></span>
        </div>
       
    </div>
  )
}
export default Header