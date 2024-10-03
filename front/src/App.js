import "./App.css";
import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Swap from "./Components/Swap";
import Token from "./Components/Token";

function App() {
  return (
    <div className="App">
      <Header />

      <div className="mainWindow">
        <Routes>
          <Route path="/" element={<Swap />} />
          <Route path="/tokens" element={<Token />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
