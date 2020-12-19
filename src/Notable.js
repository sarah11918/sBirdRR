import React from "react"
import Container from "./Container.js"

export default function Notable() {
    async function getSightings() {
    const myHeaders = new Headers();
    myHeaders.append("X-eBirdApiToken", "2ifbkhv7g8ct");

    const requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
      };
    const response = await fetch(`https://api.ebird.org/v2/data/obs/CA-PE-PR/recent/notable?detail=full&back=30`, requestOptions);
    const data = await response.json();
    console.log(data)
    return data
  }
  return (
    <Container>
      <h1>Rare or Unusual birds in Prince County, PEI</h1>
      <button onClick={getSightings}>Get the list of notable birds</button>
      <p>Note: Clicking the button successfully GETS the list of birds from eBird, but doesn't SHOW them yet.  :P</p>
    </Container>
  )
}
