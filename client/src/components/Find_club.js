import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Find_club() {
  const [error, setError] = useState("");
  const [club, setClubname] = useState({ clubname: "" });
  const [searchedClubs, setSearchedClubs] = useState("");
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
        setSearchedClubs(data);
      } else {
        setError(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError("Network error:", err.message);
    }

    return null;
  };

  const handleClickToView = (id) => {
    // handle form submit
    // e.preventDefault();

    navigate(`/club/${id}`);
  };

  return (
    <div className="find-club-div p-4">
      <h1 className="find-club-header">Find a club</h1>

      <div className="find-club-form">
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

        <button className="btn btn-dark btn-s" onClick={handleSubmit}>
          Go
        </button>
      </div>

      {searchedClubs && (
        <div>
          <h2 className="results-header">Results</h2>
          {searchedClubs.map((club) => (
            <section className="container">
              <div className="row">
                <div key={club.id} className="col-6">
                  <h5>{club.clubname}</h5>
                  <p>Currently reading {club.current_book}</p>
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-dark btn-sm results"
                    onClick={handleClickToView(club.id)}
                  >
                    Click here to view
                  </button>
                </div>
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
