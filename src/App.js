import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Products from "./components/Products/Products";
import ContactUs from "./components/ContactUs";
import TopMenu from "./components/TopMenu";
import NotFound from "./components/NotFound";
import NewProducut from "./components/Products/NewProduct";
import UpdateProduct from "./components/Products/UpdateProduct";

function App() {
  // const navigate = useNavigate();
  return (
    <BrowserRouter>
      <div>
        <TopMenu />
        <div style={{ padding: "30px" }}>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/new" element={<NewProducut />} />
            <Route path="/product/update/:id" element={<UpdateProduct />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/not-found" element={<NotFound />} />
            {/* <Navigate to="not-found" /> */}
          </Routes>{" "}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
