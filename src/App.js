import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products/Products";
import ContactUs from "./components/ContactUs";
import TopMenu from "./components/TopMenu";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopMenu />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/not-found" element={<NotFound />} />
          {/* <Navigate to="not-found" /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
