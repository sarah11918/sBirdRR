import React from "react"
import {useState} from "react"
import Container from "./Container.js"
import RegionsList from "./RegionsList.js"

export default function Regions(){
 
  const [location, setLocation] = useState("CA-ON")
   const[regions, setRegions] = useState([])

    function changeLocation(event){
      event.preventDefault()
      setLocation(event.target.elements.location.value)
    }
    
    function changeCountryLocation(event){
      event.preventDefault()
      setLocation(event.target.elements.country.value)
    }

    
    async function getCountrySightings() {
      const myHeaders = new Headers();
      myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

      const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      const response = await fetch(`https://api.ebird.org/v2/ref/region/list/subnational1/${location}.json`, requestOptions);
      const data = await response.json();
  
      console.log(data)
      setRegions(data)
    }

    async function getSightings() {
      const myHeaders = new Headers();
      myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

      const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };

      
      const response = await fetch(`https://api.ebird.org/v2/ref/region/list/subnational2/${location}.json`, requestOptions);
      const data = await response.json();

      setRegions(data)
    }

  return (
    <Container>
      <h1>List of subregions in {location}</h1>

       <p>For Countries and other "Top Level" areas:</p>
      <form onSubmit={changeCountryLocation}>
        <input name="country" type="text" placeholder="eg. SE, AU, GB"/>
        <button> Set Country </button>
      </form>
      
      <button onClick={getCountrySightings}>... and then get the list of subregions</button>


      
      <p>Further explore subregions (eg. Canadian Provinces/US States, Great Britain: England etc.)</p>
      <form onSubmit={changeLocation}>
        <input name="location" type="text" placeholder="eg. CA-PE, US-MD, GB-ENG"/>
        <button> Set Location </button>
      </form>
            <button onClick={getSightings}>... and then get the list of subregions</button>

    
      <RegionsList regionData={regions} />
    </Container>
  )
}
