import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./LoginPage/LoginPage.js";
import RegisterPage from "./RegisterPage/RegisterPage.js";
import HomePage from "./HomePage/HomePage.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
