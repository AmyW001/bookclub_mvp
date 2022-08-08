import MainPage from './Main_page';
import AccessForm from './Create_form';
import FindAClub from './Find_club';
import SignIn from './Sign_in';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom"

export default function LandingPage() {

  return (
    <div id="landing-page-div">

        <div className="row no-gutters">

          <div className="col-6 no-gutters">
            <img id="landing-page-image" className="img-fluid" src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80"/>
          </div>

          <div className="col-6 no-gutters d-flex flex-column justify-content-center">

            <h2 className="headers landing-page-h2">Welcome to</h2>
            <h1 className="headers landing-page-h1">The Book Club Collective!</h1>

          <section>
            <Link to="search"><button className="btn btn-dark btn-lg">Find a Club</button></Link>
            <Link to="create-a-club"><button className="btn btn-dark btn-lg">Create a Club</button></Link>
            <p>or <Link to="sign-in">sign in</Link></p>
          </section>

          </div>

        </div>
            

      <Routes>
      <Route path="/club" element={<MainPage />} />
      <Route path="/create-a-club" element={<AccessForm />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/search" element={<FindAClub />} />
      </Routes>

    </div>
  );
}