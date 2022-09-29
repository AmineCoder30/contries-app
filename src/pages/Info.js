import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import { useParams,useNavigate,Link } from 'react-router-dom'


 function Info() {
  let params = useParams();
  const [details,setDetails] = useState([])
  const [isLoading,setIsLoading] = useState(true)
  const navigate = useNavigate();
  const [clicked,setClicked] = useState(false)
  const getDetails = async ()=>{
   

    const response = await fetch(`https://restcountries.com/v3.1/alpha/${params.cca2}`)
     const detailsData = await response.json();

     setDetails(detailsData)
   setIsLoading(false)
 
   }
   const changeClicked = ()=>{
    setClicked(!clicked)
   }
  
   useEffect(()=>{
      getDetails()
       // eslint-disable-next-line react-hooks/exhaustive-deps
   },[clicked])
  return (
    <div>
        <Header/>
        <div className='icon' onClick={() => navigate(-1)}>
              <span>back</span>
        </div>
        <div className='country-searched'>
        { isLoading?<div className="lds-roller"><div></div><div></div><div>
        </div><div></div><div></div><div></div><div></div><div></div></div>
        : details.map(detail => (
            <div className='row img-clicked' key={detail.name.common}>
            <img className='col-12 col-md-5 ' src={detail.flags.png} alt=''/>
              <div className=' col-12 col-md-7 count-info'>
              <h2>{detail.name.common}</h2>
              <div className='list row'>
              <ul className='first-list col-12 col-sm-6'>
                  <li>NativeName:<div>{detail.name.official}</div></li>
                  <li>Population:<div>{detail.population}</div></li>
                  <li>Region:<div>{detail.region}</div></li> 
                  <li>currencies:<div>{detail.currencies ? Object.keys(detail.currencies).map(key => detail.currencies[key].name).join(", ") : "None"}</div></li> 
              </ul>
              <ul className='second-list col-12 col-sm-6'>
                  <li>subregion:<div>{detail.subregion}</div></li>
                  <li>Capital:<div>{detail.capital}</div></li>
                  <li>top level domain :<div>{detail.tld[0]}</div></li>
                  <li>langauges:<div>{detail.languages ? Object.keys(detail.languages).map(key => detail.languages[key]).join(", ") : "None"}</div></li> 
              </ul>
              </div>
              
             
             
              <div className='borders'><span>borders:</span> <div className='border border-0'>{detail.borders.map((border) => <div key={border}>  <Link to={'/Info/'+ border} onClick={changeClicked} > {border}</Link></div>)}</div></div>


              </div>
            </div>
          ))
         }
      
        </div>
        
        </div>
       
    
  )
}
export default Info