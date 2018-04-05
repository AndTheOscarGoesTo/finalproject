import { Router } from "express";
import * as gamesDbController from "../controllers/igdbController";
import * as gameDbController from "../controllers/gameDbController";
import zlib from 'zlib';
import parser from 'xml2json';

const router = Router();

router.get("/", (req, res, body) => {
    // console.log("--by platform id--", req.query.byPlatformId);
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

// router.get("/", (req, res, body) => {
//     gamesDbController.getGames()
//     .then(response => response.json())
//     .then((response) => {
//         res.send(response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(403);
//     })
// });

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