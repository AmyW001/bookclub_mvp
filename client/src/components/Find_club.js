import React from 'react'

export default function Find_club() {
  return (
    <div>
        <h1>Find a club</h1>
        <section>
            <input type="text" id="searchbar" placeholder="Type club name here, e.g. 'The Rapid Readers'"/>
            <button>Go</button>
        </section>

        <h4>Results</h4>
        <hr/>
        <h5>"Club Name imported from database"</h5>
        <p>"Currently reading blah imported from where?"</p>
        <button>Click here to view</button>
    </div>
  )
}
