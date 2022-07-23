import logo from './logo.svg';
import './App.css';
import Main_page from './components/Main_page';
import Access_form from './components/Create_access_form';
import Find_a_club from './components/Find_club';

function App() {
  return (
    <div className="App">

      <h1>Welcome to Book Clubs(replace with catchier title!)!</h1>

        <section>
          <button>Find Club</button>
          <button>Create Club</button>
          <p>or <a>sign in</a></p>
        </section>

      <Access_form />
      <Find_a_club />
      <Main_page />

    </div>
  );
}

export default App;


// Building the flow in React:
// Landing page is written in App.js
// buttons contain conditional to determine next page
// "create" or "sign in" components
// "find club" component


