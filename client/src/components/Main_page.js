import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function Main_page() {
  const [error, setError] = useState("");
  const [book, setBook] = useState("");
  const [newBook, setNewBook] = useState("");
  const [query, setQuery] = useState({
    bookName: "",
    author: "",
  });

  useEffect(() => {
    console.log(window.location.href);
    const loadPage = async (e) => {
      try {
        let response = await fetch(window.location.href, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          let data = await response.json();
          console.log("success", data);
          setBook(data);
        } else {
          setError(`Server error: ${response.status} ${response.statusText}`);
        }
      } catch (err) {
        setError("Network error:", err.message);
      }
    };

    loadPage();
  }, []);

  let params = useParams();

  /*save the data entered into the form into state 'query'*/
  const handleInputChange = (event) => {
    // handle key presses
    const value = event.target.value;
    const name = event.target.name;

    setQuery((state) => ({
      //state means "current state" here
      ...state,
      [name]: value,
    }));
  };

  /*take data from the 'change book' form, use this to call on google book api, save data to newBook state*/
  const handleSubmit = async (e) => {
    // handle form submit
    e.preventDefault();
    console.log("form button clicked!");

    let newBook = await getBook();
    setNewBook(newBook);
    console.log("success", newBook);
  };

  const getBook = async () => {
    // call Google Books API
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query.author}+${query.bookName}`;

    try {
      let response = await fetch(url);
      if (response.ok) {
        let data = await response.json();
        console.log("api data", data);
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
    <div className="d-flex flex-column align-items-center main-page-main-div">
      <h3 className="headers welcome-header">Welcome to</h3>
      {book && (
        <h1 className="headers club-name-header"> {book[0].clubname}</h1>
      )}

      <section className="section-main-page">
        {newBook && (
          <div className="book-display-div">
            <h4 className="book-header">We are currently reading:</h4>
            <img src={newBook.items[0].volumeInfo.imageLinks.smallThumbnail} />
            <h2 className="book-title">{newBook.items[0].volumeInfo.title}</h2>
            <p className="book-description">
              {newBook.items[0].volumeInfo.description}
            </p>
          </div>
        )}
        {book && !newBook && (
          <div className="book-display-div">
            <h4 className="book-header">We are currently reading:</h4>
            <img src={book[0].imageurl} />
            <h2 className="book-title">{book[0].current_book}</h2>
            <p className="book-description">{book[0].description}</p>
          </div>
        )}

        <form className="container change-book-form">
          {/* <label for="book_name" className="col-4">
            Book name: */}
          <input
            type="text"
            id="bookName"
            placeholder="Book name"
            className="col-6"
            name="bookName"
            value={query.bookName}
            onChange={(e) => handleInputChange(e)}
          />
          {/* <label for="author" className="col-4">
            Author: */}
          <input
            type="text"
            id="author"
            placeholder="Author"
            className="col-6"
            name="author"
            value={query.author}
            onChange={(e) => handleInputChange(e)}
          />
          {/* </label> */}
          <button
            type="submit"
            className="btn btn-dark btn-s col-11 p-2"
            onClick={handleSubmit}
          >
            Search
          </button>
        </form>

        {newBook && (
          <div>
            <h4>Choose a book</h4>
            <ul>
              <li>
                <strong>{newBook.items[0].volumeInfo.title}</strong> -
                {newBook.items[0].volumeInfo.description}
              </li>
              <li>
                <strong>{newBook.items[1].volumeInfo.title}</strong> -
                {newBook.items[1].volumeInfo.description}
              </li>
              <li>
                <strong>{newBook.items[2].volumeInfo.title}</strong> -
                {newBook.items[2].volumeInfo.description}
              </li>
              <li>
                <strong>{newBook.items[3].volumeInfo.title}</strong> -
                {newBook.items[3].volumeInfo.description}
              </li>
              <li>
                <strong>{newBook.items[4].volumeInfo.title}</strong> -
                {newBook.items[4].volumeInfo.description}
              </li>
            </ul>
          </div>
        )}
      </section>

      <h4>Join the discussion below!</h4>
      <hr />

      <h4>Add your comments:</h4>
      <hr />

      <form>
        <label for="name">Name</label>
        <input type="text" id="name" />
        <label for="comments">Comments</label>
        <input type="text" id="comments" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
