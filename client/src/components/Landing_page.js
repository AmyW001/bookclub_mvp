import MainPage from "./Main_page";
import AccessForm from "./Create_form";
import FindAClub from "./Find_club";
import SignIn from "./Sign_in";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div id="landing-page-div">
      <div className="row no-gutters">
        <h2 className="headers landing-page-h2">Welcome to</h2>
        <h1 className="headers landing-page-h1">The Book Club Collective!</h1>

        <section>
          <Link to="search">
            <button className="btn btn-dark btn-lg">Find a Club</button>
          </Link>
          <Link to="create-a-club">
            <button className="btn btn-dark btn-lg">Create a Club</button>
          </Link>
          <p>
            or <Link to="sign-in">sign in</Link>
          </p>
        </section>
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
