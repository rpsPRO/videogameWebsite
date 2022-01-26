
import { Game } from "./Game";
import './GameList.css';

export function GameList({onDeleteGame, videogamesList}){
    
    return (
        <div className="gameList">
                
                {
                    videogamesList.map(game => {
                        return <Game key = {game.id} onDeleteGame = {onDeleteGame} game={game}/>;
                    })
                }
            
            
        </div>
    );
}

