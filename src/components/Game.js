import { useState } from 'react';
import './Game.css';

export function Game({game, onDeleteGame}) {

    const [name, setName] = useState(game.name);


    const releaseDate = game => {
        let date = new Date(game.releaseDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return day + "/" + month + "/" + year;
    };

    function deleteGame(event) {
        console.log(event.target.id);
        onDeleteGame(event.target.id);
    }

    


    return (
        <div className="game">
            <div className="gameName">{name}</div>
            <div className="gamePrice">Price: {game.price}€</div>
            <div className="gameReleaseDate">Release date: {releaseDate(game)}</div>
            <div className="gameImage"><img src={game.imageURL} alt={game.name} /></div>
            <button id={game.id} type='button' onClick={deleteGame}>Delete game</button>
        </div>
    );
}