import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Create_form() {
  
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
      name: "",
      password: "",
      clubname: ""
    });
  const navigate = useNavigate();


    //This could be improved by adding an if/else that checks whether the data already exists
    //so duplicates aren't created.

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
        body: JSON.stringify({ name: details.name, password: details.password, clubname: details.clubname })
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        // return data;
        navigate("/club");
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
                  value={details.name}
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
                  value={details.clubname}
                  onChange={(e) => handleInputChange(e)}
                  />
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
    </div>
  )
}
