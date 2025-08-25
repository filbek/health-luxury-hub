import React, { useState } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ar', name: 'Arabic', flag: '🇦🇪' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' }
];

const LanguageSelector = ({ isScrolled }) => {
  const [currentLanguage, setCurrentLanguage] = useState(languages[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setCurrentLanguage(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button 
        className={`flex items-center space-x-1 ${isScrolled ? 'text-neutral-darkest' : 'text-white'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <i className="bi bi-chevron-down text-xs"></i>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
          {languages.map((language) => (
            <button
              key={language.code}
              className="w-full text-left px-4 py-2 hover:bg-primary-light flex items-center"
              onClick={() => handleLanguageChange(language)}
            >
              <span className="mr-2">{language.flag}</span>
              <span>{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
