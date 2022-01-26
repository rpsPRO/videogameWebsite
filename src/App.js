import './App.css';
import Header from './Components/Header';
import {GameList} from './Components/GameList';
import { useState, useEffect } from 'react';
import GameForm from './Components/GameForm';
import {getApiVideogames, postApiVideogame, deleteApiVideogame} from './Helpers/api';

function App() {

  const [videogames, setVideogames] = useState([]);

  useEffect(
    () => {
      getApiVideogames()
          .then(
            newVideogames => {
              setVideogames(newVideogames);
            }
        ).catch(
            (err) => {
              console.log("Error al descargar la api");
            }
        )
    },
    []
);

  

  const deleteGame = (id) => {
    deleteApiVideogame(id).then(
        () => {
            const newVideogames = videogames.filter(
              videogame => videogame.id !== id
            );
            setVideogames(newVideogames);
        }
      ).catch(err => {
          alert(err);
      });
  }

  const addGame = (game) => {
    postApiVideogame(game).then(
        (savedVideogame) => {
          setVideogames([...videogames,savedVideogame]);
        }
      ).catch(
          err => alert("No se ha podido guardar")
      );
  }


  return (
    <div className="App">
      <Header/>
      <GameForm videogamesList ={videogames} addGame={addGame} />
      <GameList onDeleteGame = {deleteGame} videogamesList ={videogames}/>
    </div>
  );
}

export default App;
