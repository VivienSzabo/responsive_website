import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import About from "./components/pages/About";
import ThingsToSee from "./components/pages/ThingsToSee";
import ImageInfo from "./components/inc/ImageInfo";
import enTranslations from "./translations/en.json";
import hunTranslations from "./translations/hun.json";
import Footer from "./components/inc/Footer";

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="App">
      <Navbar
        onSelectLanguage={handleLanguageChange}
        selectedLanguage={selectedLanguage}
        enTranslations={enTranslations}
        hunTranslations={hunTranslations}
      />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                onSelectLanguage={handleLanguageChange}
                selectedLanguage={selectedLanguage}
                enTranslations={enTranslations}
                hunTranslations={hunTranslations}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About
                onSelectLanguage={handleLanguageChange}
                selectedLanguage={selectedLanguage}
                enTranslations={enTranslations}
                hunTranslations={hunTranslations}
              />
            }
          />
          <Route
            path="/thingstosee"
            element={
              <ThingsToSee
                onSelectLanguage={handleLanguageChange}
                selectedLanguage={selectedLanguage}
                enTranslations={enTranslations}
                hunTranslations={hunTranslations}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                onSelectLanguage={handleLanguageChange}
                selectedLanguage={selectedLanguage}
                enTranslations={enTranslations}
                hunTranslations={hunTranslations}
              />
            }
          />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ImageInfo />
    </div>
  );
}

export default App;
