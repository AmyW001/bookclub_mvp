import React, { useState } from 'react'


// add state to this page so it's possible to create an admin and user view. Admin will be able to amend
// club description and change the book.

export default function Main_page() {

  const [error, setError] = useState("");
  const [book, setBook] = useState("");
  const [query, setQuery] = useState({
    bookName: "",
    author: ""
  });

  const handleInputChange = (event) => {
    // handle key presses
    const value = event.target.value;
    const name = event.target.name;

    setQuery((state) => ({ //state means "current state" here
      ...state,
      [name]: value,
      
    }));
    };

  const handleSubmit = async e => {
    // handle form submit
    e.preventDefault();
    console.log("form button clicked!");

    let book = await getBook();
    setBook(book);
    };    

    const getBook= async () => {
    // call Google Books API
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query.author}+${query.bookName}`;

    try {
      let response = await fetch (url);
      if (response.ok) {
        let data = await response.json();
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
        <h1>Welcome to "Club Name"</h1>
            <h3>We are currently reading:</h3>
                <section>
                    
                      {book && <div>
                      <img src={book.items[0].volumeInfo.imageLinks.smallThumbnail}/>
                      <h4>{book.items[0].volumeInfo.title}</h4>
                      <p>{book.items[0].volumeInfo.description}</p>
                      </div>}
                    
                    {/* Form only viewable as admin: */}
                    <label for="book_name">Book name:</label>
                      <input 
                          type="text" 
                          id="bookName" 
                          placeholder="Book name" 
                          name="bookName"
                          value={query.bookName}
                          onChange={(e) => handleInputChange(e)}>
                      </input>
                      {/* take in first name and last name */}
                    <label for="author">Author:</label>
                      <input 
                        type="text" 
                        id="author" 
                        placeholder="Author" 
                        name="author"
                        value={query.author}
                        onChange={(e) => handleInputChange(e)}
                        >
                      </input>
                    <button type="submit" onClick={handleSubmit}>Change book</button>
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
