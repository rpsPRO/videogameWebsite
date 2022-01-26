import React, { useState } from 'react';
import "./GameForm.css";

const GameForm = ({videogamesList,addGame}) => {

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [date, setDate] = useState('');
    const [url, setUrl] = useState('');

    const onChangeName = (event) => {
        setName(event.target.value);
    };


    const onChangePrice = (event) => {
        setPrice(event.target.value);
    }

    const onChangeDate = (event) => {
        console.log(event.target.value);
        setDate(event.target.value);
    }

    const onChangeUrl = (event) => {
        setUrl(event.target.value);
    }

    const [numElementosLista, setNumElementosLista] = useState(videogamesList.length);

    const registerGame = () => {
        
        const newGame = {
            id: "g"+(numElementosLista+1),
            name,
            price,
            releaseDate: date,
            imageURL: url
        }

        addGame(newGame);
        setNumElementosLista(numElementosLista+1);
        resetForm();
    }

    const resetForm = () =>{
        setName('');
        setPrice("");
        setDate("");
        setUrl("");
    }

    return (
    <div className="gameForm">
        <p>Form to register new games</p>
        <div className="gameNameInput">
            <label>Name: </label>
            <input type="text" value={name} onChange={onChangeName}></input>
        </div>
        <div className="gamePriceInput">
            <label>Price: </label>
            <input type="number" value={price} onChange={onChangePrice}></input>
        </div>
        <div className="gameDateInput">
            <label>Release Date: </label>
            <input type="date" value={date} onChange={onChangeDate}></input>
        </div>
        <div className="gameUrlInput">
            <label>Image url: </label>
            <input type="url" value={url} onChange={onChangeUrl}></input>
        </div>
        <button type="submit" onClick={registerGame}>Submit</button>
    </div>
    );
};

export default GameForm;
