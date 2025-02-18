import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Head";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact_us";
import Home from "./components/Home";
import Donate from "./components/Donate";
import Why from "./components/Why";
import Need from "./components/Need";
import Chat from "./components/Chat";

const App = () => {
  const [donors, setDonors] = useState([]);
  const addDonor = (newDonor) => {
    setDonors((prevDonors) => [...prevDonors, newDonor]);
  };

  return (
    <Router>
      <Header />
      <div className="app-container">
        <div
          id="page-container"
          style={{ marginTop: "50px", position: "relative", minHeight: "84vh" }}
        >
          <div className="container">
            <Routes>
              <Route path="/" element={<Home donors={donors} />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/donate" element={<Donate addDonor={addDonor} />} />
              <Route path="/why" element={<Why />} />
              <Route path="/need" element={<Need />} />
              <Route path="/chat" element={<Chat/>}/>
              <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
