import React, { useState, useContext } from 'react';
import ThemeContext from '../context/ThemeContext';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext);

  const handleClick = () => {
    setDarkMode(!darkMode);
    if(theme === "bg-light"){
      setTheme('bg-dark')
    }else{
      setTheme('bg-light')
    }
  }

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>{darkMode ? 'Dark Mode' : 'Light Mode'}</button>
      {/* <button type="button" onClick={() => setDarkMode
        (!darkMode)}>{darkMode ? 'Dark Mode 2' : 'Light Mode 2'}</button> */}
    </div>
  );
}

export default Header;