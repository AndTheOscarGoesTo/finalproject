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
    console.log(gameString);
    return gameDbClient.games({
        fields: "*",
        search: gameString,
        limit: 20
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