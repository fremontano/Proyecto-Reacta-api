import React, { useContext } from 'react';
import CharactersContext from '../context/charactersContext';

export const Character = () => {
    const { characters } = useContext(CharactersContext);
    // console.log('%c personjes', 'background: blue; font-size: 15px; color: white;')
    // console.log(characters)

    return (
        <div className="row">

            {
                characters.map((character) => (
                    <div className="col-md-3" key={character.id}>
                        <div className="card mb-4">
                            <img src={character.image} className="card-img-top" alt={character.name} />
                            <div className="card-body">
                                <h5 className="card-title">{character.name}</h5>
                                <p className="card-text">Status: {character.status}</p>
                                <p className="card-text">Species: {character.species}</p>
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    );
};
