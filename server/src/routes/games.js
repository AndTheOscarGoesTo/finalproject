import { Router } from "express";
import * as gamesDbController from "../controllers/igdbController";

const router = Router();

router.get("/", (req, res, body) => {
    gamesDbController.getGames()
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
});

router.get("/:gameString", (req, res, body) => {
    gamesDbController.getGames(req.params.gameString)
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        res.sendStatus(403);
    })
})

router.get("/genre/:genreString", (req, res, body) => {
    console.log("--params--", req.params.genreString)
    gamesDbController.getGameByGenre(req.params.genreString)
    .then((response) => {
        res.send(response)
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

export default router;