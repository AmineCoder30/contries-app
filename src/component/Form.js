import React, { useEffect } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'


function Form({setInput,input,region,setRegion,filterByRegion,filterByName}) {

    const inputHandler = (e)=>{
            setInput(e.target.value)

    }

    const optionHanlder = (e)=>{
     
        setRegion(e.target.value)
     

    }
   useEffect(()=>{
    filterByRegion()
   },[region])
   useEffect(()=>{
    filterByName()
   },[input]

   )
  return (
    <form>
    <div className='light-bg search'>
    <AiOutlineSearch />
    <input onChange={inputHandler} value={input} placeholder="type the name of country" aria-label='first letter uppercase please' ></input>
    </div>
   
    <select onChange={optionHanlder}>
            <option value='all'>All</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Oceania'>Oceania</option>

    </select>
    </form>
  )
}
export default Form