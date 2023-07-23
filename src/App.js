import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Posts from "./components/Posts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import PostOverview from "./pages/PostOverview";

import "./App.css";
import Navbar from "./Templates/Navbar";


function App() {
  return (
    <div>
      <Navbar />

      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
          <Route path="/post/:postId" element={<PostOverview />}></Route>
          <Route path="/about" element={<About />}></Route>
          
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
