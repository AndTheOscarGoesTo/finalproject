"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGameByGenre = exports.getGame = exports.getGames = undefined;

var _igdbApiNode = require("igdb-api-node");

var _igdbApiNode2 = _interopRequireDefault(_igdbApiNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();


var gameDbClient = new _igdbApiNode2.default(process.env.IGDB_API_KEY);

function getGames() {
    return gameDbClient.games({
        fields: "*",
        limit: 5,
        offset: 15
    });
}

function getGame(gameString) {
    console.log("--server params--", gameString);
    return gameDbClient.games({
        fields: ["name", "release_dates.date", "rating", "hypes", "cover", "summary"],
        limit: 20,
        offset: 0,
        order: 'release_dates.date:desc',
        search: gameString
    });
}

function getGameByGenre(genreString) {
    console.log(genreString);
    return gameDbClient.genres({
        fields: ["name", "games"],
        search: genreString,
        limit: 20
    });
}

exports.getGames = getGames;
exports.getGame = getGame;
exports.getGameByGenre = getGameByGenre;