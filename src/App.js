
import Hungman from "./components/hungman/hungman"; // Ensure the path to Hungman is correct
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // New navbar component
import Footer from "./components/Footer"; // New footer component
import './App.css'; 
function App() {
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>

      <div className="main-content">
        
          <Hungman />
      
        
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;