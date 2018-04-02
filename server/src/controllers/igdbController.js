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
    console.log("--server params--", gameString);
    return gameDbClient.games({
        fields: [
            "name",
            "release_dates.date",
            "rating",
            "hypes",
            "cover",
            "summary"
        ],
        limit: 20,
        offset: 0,
        order: 'release_dates.date:desc',
        search: gameString
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