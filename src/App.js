import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/inc/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import ImageInfo from './components/inc/ImageInfo';


import { useState } from 'react';
import enTranslations from './translations/en.json';
import hunTranslations from './translations/hun.json';


function App() {

  const [selectedLanguage, setSelectedLanguage] = useState('en');
  

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };
  
  return (
    <div className="App">
      <Navbar onSelectLanguage={handleLanguageChange} selectedLanguage={selectedLanguage} enTranslations={enTranslations} hunTranslations={hunTranslations}/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home selectedLanguage={selectedLanguage} enTranslations={enTranslations} hunTranslations={hunTranslations}/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    <ImageInfo />
    </div> 
  );
}

export default App;
