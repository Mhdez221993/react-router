import "./App.css";

import { Route, Routes } from "react-router-dom";

import { Admin } from "./components/Admin";
import { Features } from "./components/ProductFeatures";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { New } from "./components/ProductNew";
import { NotMatch } from "./components/NotMatch";
import { OrderSummary } from "./components/OrderSummary";
import { Products } from "./components/Products";
import React from "react";
import { UserDetails } from "./components/UserDetails";
import { Users } from "./components/Users";

const LazyAbout = React.lazy(() => import("./components/About"));

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loading...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />}>
          <Route path="featured" element={<Features />} />
          <Route index element={<Features />} />
          <Route path="new" element={<New />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route path="*" element={<NotMatch />} />
      </Routes>
    </div>
  );
}

export default App;
