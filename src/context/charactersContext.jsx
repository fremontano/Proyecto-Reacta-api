import React, { createContext } from 'react';

// Crear el Contexto
const CharactersContext = createContext();

// Crear el Proveedor del Contexto
export const CharactersContextProvider = ({ children }) => {
    return (
        <CharactersContext.Provider value={'Rick and Morty'}>
            {children}
        </CharactersContext.Provider>
    );
};

// Exportar el Contexto
export default CharactersContext;
