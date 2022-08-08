import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Sign_in() {
  
    const [error, setError] = useState("");
    const [details, setDetails] = useState({
      name: "",
      password: "",
      clubname: ""
    });
    const navigate = useNavigate();

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

    try {
      let response = await fetch("/sign-in", {
        method: "POST",
        headers: {
          "Content-Type":"application/json"
        },
        body: JSON.stringify({ name: details.name, password: details.password, clubname: details.clubname })
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        if (data.length > 0) {
          navigate(`/club/${details.clubname}`);
        }
        else {
          console.log("try again!");
        }
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
    <div className="sign-in-div">
      
      <h1 className="sign-in-header">Sign in!</h1>

        <section id="sign-in-section">

        <form className="sign-in-form">

                <div className="container">
                <label for="name" className="col-6">Name:</label>
                <input 
                  type="text" 
                  id="name"
                  placeholder="Jane Doe"
                  className="col-6"
                  name="name"
                  value={details.name}
                  onChange={(e) => handleInputChange(e)}
                  />
              </div>

              <div>
                <label for="password" className="col-6">Password:</label>
                <input 
                  type="password" 
                  id="password"
                  className="col-6"
                  name="password"
                  value={details.password}
                  onChange={(e) => handleInputChange(e)}
                  />
              </div>

              <div>
                <label for="club-name" className="col-4">Club Name:</label>
                <input 
                  type="text" 
                  id="club-name"
                  className="col-8"
                  name="clubname"
                  value={details.clubname}
                  onChange={(e) => handleInputChange(e)}
                  />
              </div>

                <button type="submit" className="btn btn-dark btn-m" onClick={handleSubmit}>Submit</button>
            </form>

        </section>
    </div>
  )
}
