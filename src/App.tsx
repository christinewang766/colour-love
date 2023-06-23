import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Palette } from "./pages/Palette";
import { Saved } from "./pages/Saved";
import { Login } from "./pages/Login";
import LoginRegister from "./pages/LoginRegister";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/loginregister" element={<LoginRegister />} />
      <Route path="/home" element={<Home />} />
      <Route path="/home/palette" element={<Palette />} />
      <Route path="/home/saved" element={<Saved />} />
    </Routes>
  );
}

export default App;
