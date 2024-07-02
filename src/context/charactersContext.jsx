import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

// Crear el Contexto
const CharactersContext = createContext();


// Crear el Proveedor del Contexto
export const CharactersContextProvider = ({ children }) => {
    // State y Funciones
    const [characters, setCharacters] = useState([]);




    // useEffect
    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/character')
            .then(response => {
                if (response.status === 200) {
                    setCharacters(response.data.results)
                }
            })

    }, []);




    return (
        <CharactersContext.Provider value={{
            characters
        }}>

            {children}
        </CharactersContext.Provider>
    );
};

// Exportar el Contexto
export default CharactersContext;
