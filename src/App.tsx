import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Soundbites from "./Pages/SoundBitesPage/SoundBitesPage";
import Iceberg from "./Pages/Iceberg/IcebergPage";
import ComingSoon from "./Pages/ComingSoonPage";
function App() {
  return (
    <>
      <Router>
        <div className="soundbite-navigation"></div>
        <Routes>
          <Route path="/" Component={Soundbites} />
          <Route path="/comingSoon" Component={ComingSoon} />
          <Route path="/iceberg" Component={Iceberg} />
          <Route path="/crew" Component={} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
