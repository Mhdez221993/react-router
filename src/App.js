import "./App.css";

import { Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Home } from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} com />
        <Route path="/about" element={<About />} com />
      </Routes>
    </div>
  );
}

export default App;
