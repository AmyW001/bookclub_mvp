import React from 'react'




export default function Create_access_form() {
  
    //add in get/fetch requests here.
    //match to the 'Route' that's been set up


    return (
    <div>
        <form>
                <label for="name">Name</label>
                <input type="text" id="name"/>
                <label for="password">Password</label>
                <input type="password" id="password"/>
                <label for="club-name">Club Name</label>
                <input type="text" id="club-name"/>
                <button type="submit">Submit</button>
            </form>
    </div>
  )
}


// This form will be used both to sign in and to create a new club 
// as the exact same information is required for both.
// Is it possible to use this component on two different pages and 
// change what it does? So if it's on the "Create a new club" page it'll 
// create a new club, but if it's on the "Sign In" page it'll take you through to
// the club after validating the details?