import React, {useState} from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './App.css';
import ThemeContext from './context/ThemeContext';
function App() {
  const [theme, setTheme] = useState("bg-light");
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div className={"App "+ theme}>
        <Header />
        <Characters />
        <h1>Hola Mundo</h1>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
