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
        //body: JSON.stringify({ name: details.name, password: details.password, clubname: details.clubname })
      });
      if (response.ok) {
        let data = await response.json();
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
    <div>
      <h1>Find a club</h1>
      <section>
        <input
          type="text"
          id="searchbar"
          placeholder="Type club name here, e.g. 'The Rapid Readers'"
          name="clubname"
          value={club.clubname}
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={handleSubmit}>Go</button>
      </section>

      <h4>Results</h4>
      <hr />
      <h5>"Club Name "imported from database""</h5>
      <p>"Currently reading blah imported from where?"</p>
      <button>Click here to view</button>
    </div>
  );
}
