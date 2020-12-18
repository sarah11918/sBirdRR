import React from "react"
//import getSightings from '../utils/getSightings.js'
//import itemDetails from '../utils/details.js'

export default function Recent() {
  // const sightings = await getSightings()
  // const sightingDivs = sightings.map((sighting, i) => itemDetails({ ...sighting, index: i + 1 }));
  //       view.innerHTML = `<div>${sightingDivs.join('')}</div>`;

  //   async function getSightings(path) {
  //       const myHeaders = new Headers();
  //       myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

  //       const requestOptions = {
  //           method: 'GET',
  //           headers: myHeaders,
  //           redirect: 'follow'
  //       };

  //       let requestURL = "https://api.ebird.org/v2/data/obs/CA-PE-PR/recent/";
        
  //       const response = await fetch(requestURL, requestOptions);
  //       const data = await response.json();
  //       console.log(data);
  //       return data; 
  //   }

  return (
    <>
      <h1>Recent</h1>
      <div id="data-container"></div>
    </>
  )
}