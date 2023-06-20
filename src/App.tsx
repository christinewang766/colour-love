import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Palette } from "./pages/Palette";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/palette" element={<Palette />} />
    </Routes>
  );
}

export default App;
