import './App.css'
import Cards from './components/cards/Cards';
import Nav from './components/nav/Nav';
import { useState } from 'react';
import axios from 'axios';



const App = () => {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } 

   })
    .catch(() => {
      alert('¡No hay personajes con este ID!');
    })
    
   setCharacters([...characters, example])
  }

  const onClose = (id) => {
      const characterFiltered = characters.filter((character) => {
        return character.id !== id
      })

      setCharacters(characterFiltered);
  }

  return (
    <div className='App'>
        <Nav onSearch={onSearch}/>
         <Cards characters={characters} onClose={onClose} />
      </div>
  )
}

export default App
