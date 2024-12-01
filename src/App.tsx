import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import MovieDetail from "./pages/MovieDetail";
import Compare from "./pages/Compare";

const App: React.FC = () => {
  return (
    <Router>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/compare" element={<Compare />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
