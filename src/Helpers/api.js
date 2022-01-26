const url = "http://localhost:3030/videogames";

const getApiVideogames = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

const postApiVideogame = async (videogame) => {
    const options = {
        method: "POST",
        body: JSON.stringify(videogame),
        headers: {
            "Content-Type":"application/json"
        }
    };
    const response = await fetch(url, options);
    const savedVideogame = await response.json();
    if (response.status !== 201) {
        throw Error("No se ha podido guardar el gasto");
    }
    return savedVideogame;
}


const deleteApiVideogame = async (id) => {
    const options = {
        method: "DELETE"
    };
    const deleteEndpoint = url + "/" + id;
    const response = await fetch(deleteEndpoint, options);
    if (response.status !== 200) {
        throw Error("No se ha podido borrar el gasto");
    }
    return true;
}
export {getApiVideogames, postApiVideogame, deleteApiVideogame};