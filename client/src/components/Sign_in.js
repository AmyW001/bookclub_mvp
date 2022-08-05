import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sign_in() {
  const [error, setError] = useState("");
  const [details, setDetails] = useState({
    name: "",
    password: "",
    clubname: "",
  });
  const navigate = useNavigate();

  //add in get/fetch requests here.
  //match to the 'Route' that's been set up

  const handleInputChange = (event) => {
    // handle key presses
    const value = event.target.value;
    const name = event.target.name;

    setDetails((state) => ({
      //state means "current state" here
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // handle form submit
    e.preventDefault();
    console.log("form button clicked!");
    console.log({ details });
    let data2 = {
      name: details.name,
      password: details.password,
      clubname: details.clubname,
    };
    console.log(data2);
    try {
      let response = await fetch("/sign-in", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data2),
      });

      console.log("***", response);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        navigate(`/club/${data2.clubname}`);
        return data;
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
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}
