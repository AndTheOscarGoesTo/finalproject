import { Router } from "express";
import * as gameListController from '../controllers/gameListController';

const router = Router();

router.get("/:id", (req, res, body) => {
    console.log("--params--", req.params.id);

    gameListController.selectGameList(req.params.id)
    .then((resposne) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.send(403);
    })
})

router.delete("/:id", (req, res, body) => {
    console.log("--params--", req.params.id);

    gameListController.deleteFromGameList(req.params.id)
    .then((resposne) => {
        res.sendStatus(202);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

router.post("/", (req, res, body) => {
    gameListController.insertGameToList(req.body.userId, req.body.gameId, req.body.systemId, req.body.gameTitle, req.body.gameImg, req.body.hoursLogged, req.body.gameCompleted)
    .then((response) => {
        console.log(resposne);
        res.sendStatus(202);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

export default router;