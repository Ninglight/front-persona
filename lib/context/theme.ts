import { createContext, useContext } from 'react';

export const initialState = {
    dark: false,
    theme: 'light',
    toggle: () => ''
};

const AppContext = createContext(initialState);

export function AppWrapper({ children }) {
    return;
}

export function useAppContext() {
    return useContext(AppContext);
}
