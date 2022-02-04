import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const API_ENDPOINT = "https://api.itbook.store/1.0";
  return (
    <AppContext.Provider value={{ API_ENDPOINT }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
