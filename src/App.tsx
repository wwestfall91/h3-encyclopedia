import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/SoundBitesPage";
import ComingSoon from "./Pages/ComingSoonPage";
import HeaderImage from "./assets/images/H3 Sound Station.png";
function App() {
  return (
    <>
      <img className="header-image" src={HeaderImage}></img>
      <Router>
        <Link to="/">Home</Link>
        <Link to="/comingSoon">Coming Soon</Link>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/comingSoon" Component={ComingSoon}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
