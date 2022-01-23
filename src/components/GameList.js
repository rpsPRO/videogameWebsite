import { Game } from "./Game";
import './GameList.css';

export function GameList(props){

    return (
        <div className="gameList">
            {
                props.videogamesList.map(game => {
                    return <Game key={game.id} game={game}/>;
                })
            }
        </div>
    );
}

