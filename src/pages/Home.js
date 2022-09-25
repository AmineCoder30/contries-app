import React from 'react'
import Form from '../component/Form'
import Header from '../component/Header'
import {Link} from 'react-router-dom'

function Home({country,setCountry,setInput,input,region,setRegion,setFiltered,filtered,filterByRegion,filterByName,isLoading}) {
    
  return (
 <>
    <Header/>
    <Form
     input={input} 
    setInput={setInput} 
     region={region}
    setRegion={setRegion}
    setFiltered={setFiltered} 
    country={country}
    filtered={filtered}
    filterByRegion={filterByRegion}
    filterByName={filterByName}/>
   
        <div>
            <div className='home row'>
            {
                isLoading?<div className="lds-roller"><div></div><div></div><div>
                </div><div></div><div></div><div></div><div></div><div></div></div>
                :filtered.map(el => <div key={el.name.common} className='col-15 col-md-6 col-lg-3'>
              
              <div className='country'>
              <Link to={'/Info/'+ el.cca2} >
                <img src={el.flags.png} alt='mg-countries'/>
              </Link>
             
            
              <ul>
                  <li><h4>{el.name.common}</h4></li>
                  <li>Population:<div>{el.population}</div></li>
                  <li>Region:<div>{el.region}</div></li>
                  <li>Capital:<div>{el.capital}</div></li>
              </ul>
              </div>
            
                    
                    
                    
                    </div>)
            }
            </div>
        </div>
      
 </>
  )
}

export default Home