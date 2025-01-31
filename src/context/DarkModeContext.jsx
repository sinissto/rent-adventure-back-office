import { createContext, useContext, useEffect, useState } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState.js";

const initialState = {
  isDarkMode: false,
};

const DarkModeContext = createContext({
  ...initialState,
  toggleDarkMode: () => {},
});

function DarkModeContextProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    initialState,
    "isDarkMode"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
      document.documentElement.classList.remove("light-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
      document.documentElement.classList.add("light-mode");
    }
  }, [isDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((darkState) => !darkState);
  }

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeContextProvider;

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("DarkMode context outside of DarkMode Provider");

  const { isDarkMode, toggleDarkMode } = context;

  return { isDarkMode, toggleDarkMode };
}

export { DarkModeContextProvider, useDarkMode };
