import React from 'react'

export default function Main_page() {
  return (
    <div>
        <h1>Welcome to "Club Name"</h1>
            <h3>We are currently reading:</h3>
                <section>
                    <img/>
                    <h5>Rebecca by Daphne du Maurier</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi repellat vitae ullam quibusdam eius sed, 
                    culpa ab deserunt suscipit voluptatum explicabo tenetur, perferendis odio possimus sint repudiandae temporibus, consequatur neque...</p>

                    {/* Button only viewable as admin: */}
                    <button>Change book</button>
                </section>

        <h4>Join the discussion below!</h4>
        <hr/>
        {/* Comments section:
        added to dynamically when someone writes a comment */}


        {/* Comments form: */}
        {/* Submit button runs function that adds to comments above */}
        <h4>Add your comments:</h4>
        <hr/>

            <form>
                <label for="name">Name</label>
                <input type="text" id="name"/>
                <label for="comments">Comments</label>
                <input type="text" id="comments"/>
                <button type="submit">Submit</button>
            </form>

    </div>
  )
}
