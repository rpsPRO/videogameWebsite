import './Game.css';

export function Game(props) {

    const game = props.game;

    const releaseDate = game => {
        let date = new Date(game.releaseDate);
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        return day + "/" + month + "/" + year;
    };

    return (
        <div className="game">
            <div className="gameName">{game.name}</div>
            <div className="gamePrice">Precio: {game.price}€</div>
            <div className="gameReleaseDate">Fecha de lanzamaiento: {releaseDate(game)}</div>
            <div className="gameImage"><img src={game.imageURL} alt={game.name} /></div>
        </div>
    );
}