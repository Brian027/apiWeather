import Accueil from "./pages/Accueil";
import Doc from "./pages/Doc";
import Navbar from "./components/Navbars/Navbar";
import BackHome from "./back_office/pages/BackHome";
import {Routes, Route} from "react-router-dom";
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/documentation" element={<Doc />} />
        <Route path="/manageApi" element={<BackHome />} />
      </Routes>
    </div>
  );
}

export default App;
