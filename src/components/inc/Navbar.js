import React from "react";
import LanguageSelector from '../LanguageSelector';

function Navbar({ onSelectLanguage, selectedLanguage, enTranslations, hunTranslations}) {

  const navTranslations = selectedLanguage === 'en' ? enTranslations : hunTranslations;

  return (
    
    <nav className="navbar navbar-expand-lg bg-dark sticky-bottom shadow">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          Logo
        </a>
        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-center" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-white" aria-current="page" href="/">
                {navTranslations.nav.home}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/about">
              {navTranslations.nav.about}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/thingstosee">
              {navTranslations.nav.thingsToSee}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contact">
              {navTranslations.nav.contact}
              </a>
            </li>
          </ul>
          
          <LanguageSelector onSelectLanguage={onSelectLanguage} selectedLanguage={selectedLanguage} />
      
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
