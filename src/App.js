import "./App.css";

import { Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { NotMatch } from "./components/NotMatch";
import { OrderSummary } from "./components/OrderSummary";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} com />
        <Route path="/about" element={<About />} com />
        <Route path="/order-summary" element={<OrderSummary />} />
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
