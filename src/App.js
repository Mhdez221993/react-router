import "./App.css";

import { Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} com />
        <Route path="/about" element={<About />} com />
      </Routes>
    </div>
  );
}

export default App;
