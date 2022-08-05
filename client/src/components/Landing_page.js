import MainPage from "./Main_page";
import AccessForm from "./Create_form";
import FindAClub from "./Find_club";
import SignIn from "./Sign_in";
import { useNavigate } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              src="https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1970&q=80"
              className="img-fluid"
            />
          </div>

          <div className="col-6">
            <h2>Welcome to</h2>
            <h1>The Book Club Collective!</h1>
          </div>
        </div>
      </div>

      <section>
        <Link to="search">Find a Club</Link>
        <Link to="create-a-club">Create a Club</Link>
        <p>
          or <Link to="sign-in">sign in</Link>
        </p>
      </section>

      {/* why do we have two routes? */}
      <Routes>
        <Route path="/club" element={<MainPage />} />
        <Route path="/create-a-club" element={<AccessForm />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/search" element={<FindAClub />} />
      </Routes>
    </>
  );
}
