import React, { useState } from 'react'

export default function Create_access_form() {
  
    const [error, setError] = useState("");
    const [details, setDetails] = useState({
      name: "",
      password: "",
      clubname: ""
    });

    //add in get/fetch requests here.
    //match to the 'Route' that's been set up

    const handleInputChange = (event) => {
    // handle key presses
    const value = event.target.value;
    const name = event.target.name;

    setDetails((state) => ({ //state means "current state" here
      ...state,
      [name]: value,
      
    }));
    };

    const handleSubmit = async e => {
    // handle form submit
    e.preventDefault();
    console.log("form button clicked!");

    console.log(details);
    try {
      let response = await fetch("/create-a-club", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ name: details.name, password: details.password, description: details.clubname })
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        return data;
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
        }
      }
      catch (err) {
        setError("Network error:", err.message)
      }

      return null;
    };

    return (
    <div>
        <form>
                <label for="name">Name</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Jane Doe"
                  name="name"
                  value={details.adminName}
                  onChange={(e) => handleInputChange(e)}
                  />
                <label for="password">Password</label>
                <input 
                  type="password" 
                  id="password"
                  name="password"
                  value={details.password}
                  onChange={(e) => handleInputChange(e)}

                  />
                <label for="club-name">Club Name</label>
                <input 
                  type="text" 
                  id="club-name"
                  name="clubname"
                  value={details.clubName}
                  onChange={(e) => handleInputChange(e)}
                  />
                <button type="submit" onClick={handleSubmit}>Submit</button>
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