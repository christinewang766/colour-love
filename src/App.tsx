import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Palette } from "./pages/Palette";
import { Login } from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/palette" element={<Palette />} />
    </Routes>
  );
}

export default App;
