import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import Liked from "./Liked/Liked";
import Login from "./Sign/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </BrowserRouter>
  );
}
