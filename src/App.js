import React,{useEffect, useState} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Info from './pages/Info';
import './App.css'


 function App() {
  const [country,setCountry] = useState([])
  const [region,setRegion]=useState("all")
  const [input,setInput] = useState("")
  const [filtered,setFiltered] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const getData = async ()=>{

   const response = await fetch("https://restcountries.com/v3.1/all")
    const data = await response.json();

    setCountry(data)
   
    setFiltered(data)
  setIsLoading(false)
  }
  const filterByRegion = ()=>{
    setInput("")
    if (region === 'all') {
      setFiltered(country)
    
      
    } else {
      setFiltered(country.filter(el => el.region === region))
   
    }
  }
  const filterByName = ()=>{
    if (input === '') {
      setFiltered(country)
     
      
    } else {
      setRegion("all")
      setFiltered(country.filter(el => el.name.common.toLowerCase().startsWith(input)))
   
    }
  }
  useEffect(
    ()=>{
      getData()
    },[]
  )
  return (

              <div className='container'>

              <Routes>
                <Route exact path="/" element={ <Home country={country}
                setCountry={setCountry}
                input={input}
                setInput={setInput}
                region={region}
                setRegion={setRegion} 
                filtered={filtered} 
                setfiltered={setFiltered}
                filterByRegion={filterByRegion}
                filterByName={filterByName}
                isLoading={isLoading} />}/>
                <Route path="/info/:cca2" element={<Info/>} />
                </Routes>
              </div>
   
  )
}
export default App
