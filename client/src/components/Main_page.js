import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import { useEffect } from 'react';


// add state to this page so it's possible to create an admin and user view. Admin will be able to amend
// club description and change the book.

export default function Main_page() {

  const [error, setError] = useState("");
  // const [book, setBook] = useState("");
  const [newBook, setNewBook] = useState("");
  const [query, setQuery] = useState({
    bookName: "",
    author: ""
  });



  /*make a request to the backend to get data based on the club name passed in via the URL
  setBook(data) isn't working
  // useEffect(() => {
  //   const loadPage = async e => {
  //     try {
  //       let response = await fetch(`${window.location.href}`, {
  //         method: "GET",
  //         headers: {
  //           "Content-Type":"application/json"
  //         },
  //       });
  //       if (response.ok) {
  //         let data = await response.json();
  //         console.log("success", data)
  //         setBook(data);
  //         await console.log(book);
  //       } else {
  //         setError(`Server error: ${response.status} ${response.statusText}`);
  //         }
  //       }
  //       catch (err) {
  //         setError("Network error:", err.message)
  //       }
  //   }

  // loadPage();
  // }, []);
  */

  let params = useParams();


  /*save the data entered into the form into state 'query'*/
  const handleInputChange = (event) => {
    // handle key presses
    const value = event.target.value;
    const name = event.target.name;

    setQuery((state) => ({ //state means "current state" here
      ...state,
      [name]: value,
      
    }));
    };


    /* NOT WORKING! post request to insert book data from Google API into database. */
    // const updateBookDatabase = async e => {
    // //post request here to save data to backend
    // try {
    //   let response = await fetch(`/club/${params.name}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type":"application/json"
    //     },
    //     body: JSON.stringify({ description: `${newBook.items[0].volumeInfo.description}`, current_book: `${newBook.items[0].volumeInfo.title}`, imageurl: `${newBook.items[0].volumeInfo.imageLinks.smallThumbnail}` })
    //     /* body: JSON.stringify({ description: book.items[0].volumeInfo.description, current_book: book.items[0].volumeInfo.title, imageurl: book.items[0].volumeInfo.imageLinks.smallThumbnail }) */
    //   });
    //   if (response.ok) {
    //     let data = await response.json();
    //     console.log("success", data);
    //     // return data;
    //   } else {
    //     setError(`Server error: ${response.status} ${response.statusText}`);
    //     }
    //   }
    //   catch (err) {
    //     setError("Network error:", err.message)
    //   }
    // }


  /*take data from the 'change book' form, use this to call on google book api, save data to newBook state*/
  const handleSubmit = async e => {
    // handle form submit
    e.preventDefault();
    console.log("form button clicked!");

    let newBook = await getBook();
    /*setBook(book);*/
    setNewBook(newBook);
    console.log("success", newBook);
    // await updateBookDatabase(newBook);
    };    


    const getBook= async () => {
    // call Google Books API
    let url = `https://www.googleapis.com/books/v1/volumes?q=${query.author}+${query.bookName}`;

    try {
      let response = await fetch (url);
      if (response.ok) {
        let data = await response.json();
        console.log("api data", data);
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
    <div className="d-flex flex-column align-items-center">
        <h3 className="headers welcome-header">Welcome to</h3>
        <h1 className="headers club-name-header"> { params.name }</h1>
            
                <section className="section-main-page">

                      {/* Using data straight from the GoogleBooks API call:*/}
                      
                      {newBook && <div>
                        <h4 className="book-header">We are currently reading:</h4>
                      <img src={newBook.items[0].volumeInfo.imageLinks.smallThumbnail}/>
                      <h2 className="book-title">{newBook.items[0].volumeInfo.title}</h2>
                      <p className="book-description">{newBook.items[0].volumeInfo.description}</p>
                      </div>}

                      {/* If 'updateBookDatabase' was working properly then run this:
                      {book && <div>
                      <img src={book.imageurl}/>
                      <h4>{book.current_book}</h4>
                      <p>{book.description}</p>
                      </div>}*/}
                    
                      {/* Otherwise run this: */}
                      {/* {book && <div>
                      <img src={newBook.items[0].volumeInfo.imageLinks.smallThumbnail}/>
                      <h4>{newBook.items[0].volumeInfo.title}</h4>
                      <p>{newBook.items[0].volumeInfo.description}</p>
                      </div>} */}

                    {/* Form only viewable as admin: */}
                    <form className="container change-book-form">
                    <label for="book_name" className="col-3">Book name:</label>
                      <input 
                          type="text" 
                          id="bookName" 
                          placeholder="Book name" 
                          className="col-3"
                          name="bookName"
                          value={query.bookName}
                          onChange={(e) => handleInputChange(e)}>
                      </input>
                    <label for="author" className="col-3">Author:</label>
                      <input 
                        type="text" 
                        id="author" 
                        placeholder="Author" 
                        className="col-3"
                        name="author"
                        value={query.author}
                        onChange={(e) => handleInputChange(e)}
                        >
                      </input>
                    <button type="submit" className="change-book-button btn btn-dark btn-s" onClick={handleSubmit}>Change book</button>
                    </form>
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
