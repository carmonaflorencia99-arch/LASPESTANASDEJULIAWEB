import { createContext, useContext } from 'react';

// true cuando la pantalla de carga ha terminado y las fuentes están listas:
// las animaciones de entrada esperan a este momento.
export const ReadyContext = createContext(false);
export const useReady = () => useContext(ReadyContext);
