import { Routes, Route } from "react-router-dom";
import SoundbitesPage from "./Pages/SoundBitesPage/SoundBitesPage";
import Iceberg from "./Pages/Iceberg/IcebergPage";
import CrewPage from "./components/Crew/CrewPage/CrewPage";
import ButtonPage from "./Pages/ButtonPage/ButtonPage";
import PeoplePage from "./Pages/PeoplePage/PeoplePage";
import Homepage from "./Pages/Homepage/Homepage";
import PageHeader from "./Pages/PageHeader/PageHeader";
import GamePage from "./Pages/Game/GamePage";
import "./App.scss";

function App() {
  return (
    <div id="App">
      <PageHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/soundbites" element={<SoundbitesPage />} />
        <Route path="/iceberg" element={<Iceberg />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/people" element={<PeoplePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
