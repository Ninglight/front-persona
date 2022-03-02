import { createContext, useContext } from 'react';

export const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {}
};


const AppContext = createContext(initialState);

export function AppWrapper({ children }) {
  let sharedState = {/* whatever you want */}

  return (
    <AppContext.Provider value={sharedState}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}