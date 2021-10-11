import React from "react"
import { useState } from "react"
import Container from "./Container.js"
import SearchForm from "./SearchForm.js"
import BirdData from "./BirdData.js"
import ErrorMessage from "./ErrorMessage.js"

export default function Home() {
  const [errorMessage, setErrorMessage] = useState(false)
  const [bird, setBird] = useState([{comName: "", locName:"", obsDt:""}])
  
  async function getSightings(event) {
    event.preventDefault()
   const location = event.target.elements.location.value
    
    if (location.length > 0)  {
      const myHeaders = new Headers();
      myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

      const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      try {
      const response = await fetch(`https://api.ebird.org/v2/data/obs/${location}/recent?back=30`, requestOptions);
      const data = await response.json();
        if (data.length > 0) {
          setBird(data[0])
          setErrorMessage(false)
          
        } else {
          setBird({comName: "No bird!", locName:"", obsDt:""})
          setErrorMessage(true)
        }

      } catch (error) {
          alert("I don't think that's a valid Location code. Please refresh the page and try again.")
          
      }
     
    } else {
      setErrorMessage(true)
      setBird({comName:"No bird!", locName:"", obsDt:""}) 
    }
  }
  return (
    <Container>
      <h1>Last Bird Spotted</h1>
      <SearchForm getSightings={getSightings} />
      <BirdData birdData={bird} />
      {errorMessage && <ErrorMessage />}
    </Container>
  )

}


      //       else {
      //   setBird({comName:"No bird!", locName:"", obsDt:""}) 
      //   setErrorMessage(true)
      // }