import React from "react"

export default function NotableBirdList(props){
  let listOfNotableBirds = []

  for (let i = 0; i < props.birdList.length; i++){
    if (!listOfNotableBirds.includes(props.birdList[i].comName)){
      listOfNotableBirds.push(props.birdList[i].comName)
    }
  }

  let birdDivs = listOfNotableBirds.map(bird => <li className="birdItem">{bird}</li>)



  return(
    <>
      <h3>Reported in the last 30 days...</h3>
      <ul>{birdDivs}</ul>
    </>
  )
}