import React from "react"
import { useState } from "react"
import Container from "./Container.js"
import NotableBirdList from "./NotableBirdList.js"

export default function Notable() {
    const [notableBirds, setNotableBirds] = useState([{comName:""}])
    const [location, setLocation] = useState("CA-PE-PR")


    function changeLocation(){
      setLocation("CA-ON-TO")
    }

     function changeLocationBack(){
      setLocation("CA-PE-PR")
    }
    
    
    async function getSightings() {
      const myHeaders = new Headers();
      myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

      const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      
      const response = await fetch(`https://api.ebird.org/v2/data/obs/${location}/recent/notable?detail=full&back=30`, requestOptions);
      const data = await response.json();
      
      setNotableBirds(data)
    }
  return (
    <Container>
      <h1>Rare or Unusual birds in {location}</h1>
      <button onClick={getSightings}>Get the list of notable birds</button>
      <br />
      <button className="location-change" onClick={changeLocation}>Change Location to Toronto</button>
      <button className="location-change" onClick={changeLocationBack}>Change Location to PEI</button>
     <NotableBirdList birdList={notableBirds} />
    </Container>
  )
}
