import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/SoundBitesPage";
import ComingSoon from "./Pages/ComingSoonPage";
import HeaderImage from "./assets/images/H3 Sound Station.png";
import { PageRoute } from "./models/PageRoute";

function App() {
  return (
    <>
      <div className="header">
        <img className="header-image" src={HeaderImage}></img>
        <div className="header-buttons">
          <button>Button</button>
          <button>Button</button>
          <button>Button</button>
        </div>
      </div>

      <Router>
        <div className="soundbite-navigation"></div>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/comingSoon" Component={ComingSoon}></Route>
        </Routes>
      </Router>
    </>
  );
}

export interface Props {
  page: PageRoute;
}

export default App;
