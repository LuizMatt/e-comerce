import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Sobre from "./pages/sobre/Sobre";
import { Contato } from "./pages/contato/Contato";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
