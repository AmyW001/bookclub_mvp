import MainPage from './Main_page';
import AccessForm from './Create_access_form';
import FindAClub from './Find_club';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom"

export default function LandingPage() {

  return (
    <div>
      
      <div>
        <h1>Welcome to The Book Club Collective!</h1>

          <section>
            <Link to="search">Find a Club</Link>
            <Link to="create-a-club">Create a Club</Link>
            <p>or <Link to="sign-in">sign in</Link></p>
          </section>
      </div>      

      <Routes>
      <Route path="/club" element={<MainPage />} />
      <Route path="/create-a-club" element={<AccessForm />} />
      <Route path="/sign-in" element={<AccessForm />} />
      <Route path="/search" element={<FindAClub />} />
      </Routes>

    </div>
  );
}