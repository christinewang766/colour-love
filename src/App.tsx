import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Palette } from "./pages/Palette";
import { Login } from "./pages/Login";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/palette" element={<Palette />} />
    </Routes>
  );
}

export default App;
