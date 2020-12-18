import React from "react"

const SearchForm = (props) => {
    return (
      <>
        <h3>Choose your eBird Region</h3>
        <form onSubmit={props.getSightings}>  
          <select name="location">
            <option value = "CA-PE-PR" selected>Prince County, PEI</option>
            <option value = "CA-PE-QU">Queens County, PEI</option>
            <option value = "CA-PE-KI">Kings County, PEI</option>
            <option value = "CA-ON-DR">Durham Region, ON</option>
            <option value = "CA-ON-HT">Halton Region, ON</option>
            <option value = "CA-ON-OT">Ottawa, ON</option>
            <option value = "CA-ON-PL">Peel Region, ON</option>
            <option value = "CA-ON-SC">Simcoe County, ON</option>
            <option value = "CA-ON-TO">Toronto, ON</option>
          </select>  
          <button className="select-button">Find my bird!</button>
        </form>
        <h3>(or enter your region ID below)</h3>
        <form onSubmit = {props.getSightings} className = "search-form">
          <input name="location"  className="user-input" type="text" placeholder="Location: e.g CA-PE-PR" /> 
          <button className="search-button">Find my bird!</button>
        </form>
        <p className = "more-info"><a href="https://ebird.org/canada/region/world/regions?yr=all&m=&hsStats_sortBy=cl&hsStats_o=desc">Visit eBird.org to find your region ID</a></p>
      </>
    )
}

export default SearchForm