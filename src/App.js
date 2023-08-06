import { Routes, Route } from "react-router-dom";

import MainTemplate from "./Templates/MainTemplate";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<MainTemplate />}>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Route>

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}

export default App;
