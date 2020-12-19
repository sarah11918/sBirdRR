import React from "react"

export default function BaywalkBirdList(props){

  let birdDivs = props.birdList.map(bird => <li className="birdItem">{bird}</li>)

  return(
    <>
      <h3>All species ever recorded (species codes) in a region or at a Personal Checklist location...</h3>
      <p><em>(To do: convert these to common names?)</em></p>
      <ul>{birdDivs}</ul>
    </>
  )
}