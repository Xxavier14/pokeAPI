import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [click, setClick] = useState(1)
  const [pokemonName, setPokemonName] = useState('')
  const [pokemonImage, setPokemonImage] = useState('')
  const [pokemonSprite, setPokemonSprite] = useState('')

  const handleNextClick = () => {
    setClick(click + 1)
  }

  const handlePrevClick = () => {
    if (click > 1) {
      setClick(click - 1)
    }
  }

  useEffect(
    () => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${click}/`)
        .then(response => response.json())
        .then(data => {
          setPokemonName(data.name)
          setPokemonImage(data.sprites.other['official-artwork'].front_default)
          setPokemonSprite(data.sprites.other.showdown.front_default)
        })

    }
    , [handleNextClick, handlePrevClick])


  return (
    <div className="conteiner">
      <div className='card '>
      <div className="card-top">
        <h1 className='card-top-name'>{pokemonName}</h1>
        <h1 className='card-top-id' > Id : {click}</h1>
      </div>

      <div className="card-images">
        <img src={pokemonSprite} className='card-images-sprite character' />
        <img src={pokemonImage} className='card-images-artwork wrapper'/>
      </div>
      <div className="card-buttons">
        <button onClick={handlePrevClick} className='card-buttons-prev card-button-single'>Previous</button>
        <button onClick={handleNextClick} className='card-buttons-next card-button-single'>Next</button>
      </div>
    </div>

    </div>
  )
}

export default App
