import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Find_club() {
  const [error, setError] = useState("");
  const [club, setClubname] = useState({ clubname: "" });
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    // handle key presses
    const value = event.target.value;
    const name = event.target.name;

    setClubname((state) => ({
      //state means "current state" here
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // handle form submit
    e.preventDefault();
    console.log("form button clicked!");

    console.log(club);
    try {
      let response = await fetch(`/search/${club.clubname}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        // navigate(`/club/${club}`);
        navigate(`/club/${club.clubname}`);
        // write navigate here to take you to the club page
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError("Network error:", err.message);
    }

    return null;
  };

  return (
    <div className="find-club-div">
      
      <h1 className="find-club-header">Find a club</h1>


      <section id="find-club-top">

        <label for="clubname">Search for clubs here:</label>
        <input
          type="text"
          id="searchbar"
          placeholder="Type club name here, e.g. 'The Rapid Readers'"
          className="club-searchbar"
          name="clubname"
          value={club.clubname}
          onChange={(e) => handleInputChange(e)}
        />
        <button className="btn btn-dark btn-s find-club-button" onClick={handleSubmit}>Go</button>

      </section>

      <section id="find-club-bottom">
      <h4>Results</h4>
      <hr />
      <h5>"Club Name "imported from database""</h5>
      <p>"Currently reading blah imported from where?"</p>
      <button>Click here to view</button>
      </section>

    </div>
  );
}
