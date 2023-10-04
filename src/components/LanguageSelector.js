// LanguageSelector.js
import React from 'react';


const LanguageSelector = ({ onSelectLanguage, selectedLanguage }) => {
  return (
    <div className='text-center'>
      {selectedLanguage !== 'en' && (
        <button className='btn btn-outline-warning ms-lg-5' onClick={() => onSelectLanguage('en')}>En</button>
      )}
      {selectedLanguage !== 'hun' && (
        <button className='btn btn-outline-warning ms-lg-5' onClick={() => onSelectLanguage('hun')}>Hu</button>
      )}
    </div>
  );
};

export default LanguageSelector;
