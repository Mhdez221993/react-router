import "./App.css";

import { Route, Routes } from "react-router-dom";

import { About } from "./components/About";
import { Features } from "./components/ProductFeatures";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { New } from "./components/ProductNew";
import { NotMatch } from "./components/NotMatch";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} com />
        <Route path="about" element={<About />} com />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<Features />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
