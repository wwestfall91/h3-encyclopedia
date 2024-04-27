import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Soundbites from "./Pages/SoundBitesPage/SoundBitesPage";
import Iceberg from "./Pages/Iceberg/IcebergPage";
import ComingSoon from "./Pages/ComingSoonPage";
import CrewPage from "./components/Crew/CrewPage/CrewPage";
import ButtonPage from "./Pages/ButtonPage/ButtonPage";

function App() {
  return (
    <>
      <Router>
        <div className="soundbite-navigation"></div>
        <Routes>
          <Route path="/" Component={Soundbites} />
          <Route path="/comingSoon" Component={ComingSoon} />
          <Route path="/iceberg" Component={Iceberg} />
          <Route path="/crew" Component={CrewPage} />
          <Route path="/button" Component={ButtonPage} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
