import React from 'react'

export default function Create_club() {
  return (
    <div>
        <h1>Create a Club</h1>
        <form>
            <label for="name">Name</label>
            <input type="text" id="name" required></input>
            <label for="password">Create password</label>
            <input type="password" id="password" required></input>
            <label for="club_name">Club name</label>
            <input type="text" id="club_name" required></input>
        </form>
    </div>
  )
}
