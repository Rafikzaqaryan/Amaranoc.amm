import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Liked from "./Liked/Liked";
import Login from "./Sign/Login";
import Discounts from "./discounts/Discounts";
import Services from "./Services/Services";
import AboutAs from "./Components/AboutAs/AboutAs";
import OfferPage from "./OfferPage/OfferPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/liked" element={<Liked />} />
        <Route path="/discount" element={<Discounts />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutAs />} />
        <Route path="/offer/:id" element={<OfferPage />} />
      </Routes>
    </BrowserRouter>
  );
}
