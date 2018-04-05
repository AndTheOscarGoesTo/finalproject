import { Router } from "express";
import * as gamesDbController from "../controllers/igdbController";
import * as gameDbController from "../controllers/gameDbController";
import zlib from 'zlib';
import parser from 'xml2json';

const router = Router();

router.get("/", (req, res, body) => {
    // console.log("--by platform id--", req.query.byPlatformId);

    /* 
        Example requests: 
            byPlatformId: localhost:3000/api/games?byPlatformId=1
            byGenre: localhost:3000/api/games?byGenre=action
            byGameName: localhost:3000/api/games?byGameName=call of duty
            byGameId: localhost:3000/api/games?byGameId=1
    */
    if(req.query.byPlatformId && !isNaN(req.query.byPlatformId)){
        // console.log("--by platform id in query--", req.query.byPlatformId);
        // res.send("searching by platform");
        gameDbController.getGamesByPlatformId(req.query.byPlatformId)
        .then((response) => {
            // let parsed = JSON.parse(parser.toJson(response)).Data.Game;
            let parsed = JSON.parse(parser.toJson(response)).Data.Game;
            // console.log(parsed);
            res.send(parsed);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    } else if(req.query.byGenre && isNaN(req.query.byGenre)){
        // res.send(`Genre: ${req.query.byGenre}`);
        gameDbController.getGamesByGenre(req.query.byGenre)
        .then((response) => {
            let parsed = JSON.parse(parser.toJson(response)).Data.Game;
            console.log(parsed);
            res.send(parsed);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    } else if(req.query.byGameName && isNaN(req.query.byGameName)){
        // res.send(`Game Name: ${req.query.byGameName}`);
        gameDbController.getGameByString(req.query.byGameName)
        .then((response) => {
            let parsed = JSON.parse(parser.toJson(response)).Data.Game;
            console.log(parsed);
            res.send(parsed);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    } else if(req.query.byGameId && !isNaN(req.query.byGameId)){
        // res.send(`Game Id: ${req.query.byGameId}`);
        gameDbController.getGameById(req.query.byGameId)
        .then((response) => {
            let parsed = JSON.parse(parser.toJson(response)).Data.Game;
            console.log(parsed);
            res.send(parsed);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    } else {
        console.log("gameDb")
        gameDbController.getGames()
        .then((response) => {
            let parsed = JSON.parse(parser.toJson(response)).Data.Game;
            console.log(parsed);
            res.send(parsed);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    }
})

router.get("/:gameString", (req, res, body) => {
    console.log("--params--", req.params.gameString)
    gamesDbController.getGame(req.params.gameString)
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        res.sendStatus(403);
    })
})

router.get("/genre/:genreString", (req, res, body) => {
    console.log("--params--", req.params.genreString)
    // gamesDbController.getGameByGenre(req.params.genreString)
    gamesDbController.getScrollGamesByGenre(req.params.genreString)
    .then((response) => {
        res.send(response)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

router.get("/test", (req, res, body) => {
    gamesDbController.test()
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        res.sendStatus(403);
    })
})

export default router;