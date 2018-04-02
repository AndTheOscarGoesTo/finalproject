require("dotenv").config();
import GameDb from "igdb-api-node";

const gameDbClient = new GameDb(process.env.IGDB_API_KEY);

function getGames(){
    return gameDbClient.games({
        fields: "*",
        limit: 5,
        offset: 15,
    });
}

function getGame(gameString){
    console.log(gameString);
    return gameDbClient.games({
        fields: "*",
        search: gameString,
        limit: 20
    })
}

function getGameByGenre(genreString){
    console.log(genreString);
    return gameDbClient.genres({
        fields: [
            "name",
            "games"
        ],
        search: genreString,
        limit: 20
    })
}

export {
    getGames,
    getGame,
    getGameByGenre
}