import './App.css';
import Header from './components/Header';
import {GameList} from './components/GameList';

function App() {

  const videogames = [
    {
      id: "g1",
      name: "New Super Mario Bros",
      price: 35,
      releaseDate: "2006/5/15",
      imageURL: "https://images-na.ssl-images-amazon.com/images/I/51CcAfal2VL.__AC_SY300_SX300_QL70_ML2_.jpg"
    },
    {
      id: "g2",
      name: "Professor Layton and The Curious Village",
      price: 42,
      releaseDate: "2007/2/15",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/1/1b/Professor_Layton_and_the_Curious_Village_NA_Boxart.JPG"
    },
    {
      id: "g3",
      name: "Inazuma Eleven 2 Tormenta de Fuego",
      price: 14.99,
      releaseDate: "2012/3/16",
      imageURL: "https://emu-games.com/wp-content/uploads/2018/12/BEES-420x372.jpg"
    },
    {
      id: "g4",
      name: "Mario Kart DS",
      price: 12.95,
      releaseDate: "2005/11/14",
      imageURL: "https://m.media-amazon.com/images/I/51EyQ8vtdsL._AC_.jpg"
    }
  ];




  return (
    <div className="App">
      <Header/>
      <GameList videogamesList ={videogames}/>
    </div>
  );
}

export default App;
