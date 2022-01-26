import './App.css';
import Header from './Components/Header';
import {GameList} from './Components/GameList';
import { useState, useEffect } from 'react';
import GameForm from './Components/GameForm';
import {getApiVideogames, postApiVideogame, deleteApiVideogame} from './Helpers/api';

function App() {
  const [loading,setLoading] = useState([]); 
  const [error,setError] = useState(false);
  const [videogames, setVideogames] = useState([]);

  useEffect(
    () => {
      getApiVideogames()
          .then(
            newVideogames => {
              setVideogames(newVideogames);
              setLoading(false);
            }
        ).catch(
            (err) => {
              setLoading(false);
              setError(true);
              alert("Error al descargar la api");
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

  const getLoadingOrList = ()=>{
    return loading?
    <img src = "loading.gif"/>:
    (<GameList onDeleteGame = {deleteGame} videogamesList ={videogames}/>)
  }

  return (
    <div className="App">
      <Header/>
      <GameForm videogamesList ={videogames} addGame={addGame}/>
      {
      error?
      <img src="guaton-computadora.gif"/>:
      getLoadingOrList()
      }
       
    </div>
  );
}

export default App;
