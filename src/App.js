import React,{useEffect, useState} from 'react'
<<<<<<< HEAD
import {Routes,Route} from 'react-router-dom'
=======
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
>>>>>>> 4cf593ccdc8ef2ae2e05cdd6a79f1d48f375a5b7
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
<<<<<<< HEAD
  
       
              <div className='container'>
           
=======
    <Router>
       
              <div className='container'>
>>>>>>> 4cf593ccdc8ef2ae2e05cdd6a79f1d48f375a5b7
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
   
<<<<<<< HEAD
   
=======
    </Router>
>>>>>>> 4cf593ccdc8ef2ae2e05cdd6a79f1d48f375a5b7
  )
}
export default App
