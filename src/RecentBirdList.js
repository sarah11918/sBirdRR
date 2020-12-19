import React from "react"
import itemDetails from "./utils/details.js"

export default function RecentBirdList() {
    // function itemDetails(sighting,index) {
      
    //   return(
    //     <div class="sighting">
    //       <div><span class="bird-name">${sighting.comName}</span></div>
    //       <div class="recent-bird">
    //         ${sighting.locName}
    //         <div class="observation-time">${sighting.obsDt}</div>
    //       </div>
    //     </div>
    //   )
    // } 
    
    // const sightingDivs = props.birdData.map( (sighting, i) => itemDetails({...sighting, index: i+1}) )

    // console.log(sightingDivs)

  return (
    <div className="bird-data">
      <h3>Bird reported most recently in the area:</h3> 
    </div>
  )
}


      // const sightings = await getSightings();
  // const sightingDivs = sightings.map((sighting, i) => itemDetails({ ...sighting, index: i + 1 }));
  //       view.innerHTML = `<div>${sightingDivs.join('')}</div>`;

