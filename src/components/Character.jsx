import React, { useContext } from 'react';
import CharactersContext from '../context/charactersContext';

export const Character = () => {
    const valor = useContext(CharactersContext);

    return (
        <div className="row">
            <div className="col-4">
                <p>Imagen</p>
                <h2>{valor}</h2>
            </div>
        </div>
    );
};
