import React from "react"
import {useState} from "react"
//import getSightings from '../utils/getSightings.js'
import itemDetails from './utils/details.js'
import LocationInput from "./LocationInput.js"
import RecentBirdList from "./RecentBirdList.js"
import Container from "./Container.js"

export default function Recent() {
  const [recentBirds, setRecentBirds] = useState([{comName:""}])
  async function getSightings() {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
    const response = await fetch(`https://api.ebird.org/v2/data/obs/CA-PE-PR/recent?back=14`, requestOptions);
    const data = await response.json();
    setRecentBirds(data)
  }
  
  return (
    <Container>
      <h1>Recent birds in Prince County, PEI</h1>
      <button onClick={getSightings}>Get the list of recent birds</button>
      <RecentBirdList birdList={recentBirds} />
    </Container>
  )
}

//export default function Recent(event) {
  //  const [errorMessage, setErrorMessage] = useState(false)
  // const [birds, setBirds] = useState([{comName: "", locName:"", obsDt:""}])
  
  // async function getSightings(event) {
  //  event.preventDefault()
  //  const location = event.target.elements.location.value
    
  //   if (location.length > 0)  {
  //     const myHeaders = new Headers();
  //     myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

  //     const requestOptions = {
  //       method: 'GET',
  //       headers: myHeaders,
  //       redirect: 'follow'
  //     };
      
  //     try {
  //     const response = await fetch(`https://api.ebird.org/v2/data/obs/${location}/recent?back=30`, requestOptions);
  //     const data = await response.json();
  //       if (data.length > 0) {
  //         setBirds(data)
  //         setErrorMessage(false)
          
  //       } else {
  //         setBirds({comName: "No bird!", locName:"", obsDt:""})
  //         setErrorMessage(true)
  //       }

  //     } catch (error) {
  //         alert("I don't think that's a valid Location code. Please refresh the page and try again.")
          
  //     }
     
  //   } else {
  //     setErrorMessage(true)
  //     setBirds({comName:"No bird!", locName:"", obsDt:""}) 
  //   }
  
  // }


//return (
  //  <>
  //     <h1>Recent</h1>
  //     <LocationInput getSightings = {getSightings}/>
  //     <RecentBirdList birdData = {birds}/>
  //     <div id="data-container"></div>
  //   </>
//)
//}
