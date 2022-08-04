import logo from './logo.svg';
import './App.css';
import LandingPage from './components/Landing_page';
import MainPage from './components/Main_page';
import AccessForm from './components/Create_form';
import FindAClub from './components/Find_club';
import SignIn from './components/Sign_in';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom"

function App() {

  return (
    <div className="App">


      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/club" element={<MainPage />} />
      <Route path="/create-a-club" element={<AccessForm />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/search" element={<FindAClub />} />
      </Routes>
      
    </div>
  );
}

export default App;


// Try to build this flow in React:
// Landing page is written in App.js
// buttons contain conditional to determine next page
// "create" or "sign in" components
// "find club" component


