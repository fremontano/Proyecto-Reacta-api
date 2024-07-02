
//Context
import { CharactersContextProvider } from "./context/charactersContext";

// libraries and components
import { useState } from 'react'
import { Character } from './components/Character'




function App() {

  return (
    <div className='container-xxl'>
      <h1 className='alert alert-success text-center'>Rick And Morty App</h1>
      <CharactersContextProvider>
        <Character />
      </CharactersContextProvider>
    </div>
  )
}


export default App
