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
      
      const response = await fetch(`https://api.ebird.org/v2/data/obs/${location}/recent`, requestOptions);
      const data = await response.json();
      setBird(data[0])
      setErrorMessage(false)
     
      
    } else {
      setBirds({comName: "No bird!"})
      setErrorMessage(true)
    }
  }
  return (
    <Container>
      <h1>Home</h1>
      <SearchForm getSightings={getSightings} />
      <BirdData birdData={bird} />
      {errorMessage && <ErrorMessage />}
    </Container>
  )

}


      //       <BirdData birdData={bird} />
      // {errorMessage && <ErrorMessage />}