import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Palette } from "./pages/Palette";
import { Login } from "./pages/Login";
import LoginRegister from "./pages/LoginRegister";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loginregister" element={<LoginRegister />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/palette" element={<Palette />} />
    </Routes>
  );
}

export default App;
