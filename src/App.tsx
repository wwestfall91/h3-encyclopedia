import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/SoundBitesPage";
import ComingSoon from "./Pages/ComingSoonPage";
import HeaderImage from "./assets/images/H3 Sound Station.png";
import Iceberg from "./Pages/Iceberg/IcebergPage";

function App() {
  return (
    <>
      <div className="header">
        <img className="header-image" src={HeaderImage}></img>
        <div className="header-buttons">
          <button className="button-round">Button</button>
          <button className="button-round">Button</button>
          <button className="button-round">Button</button>
        </div>
      </div>

      <Router>
        <div className="soundbite-navigation"></div>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/comingSoon" Component={Iceberg}></Route>
          <Route path="/iceberg" Component={Iceberg}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
