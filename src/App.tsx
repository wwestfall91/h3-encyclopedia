import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/SoundBitesPage";
import Iceberg from "./Pages/Iceberg/IcebergPage";
import PageHeader from "./Pages/PageHeader/PageHeader";

function App() {
  return (
    <>
      <PageHeader />
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
