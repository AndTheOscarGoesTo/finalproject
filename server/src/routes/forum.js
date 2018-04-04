import { Router } from "express";
import * as forumController from "../controllers/forumController";

const router = new Router();

router.get("/", (req, res, body) => {
    forumController.selectForums()
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

// query string to get forum info will be used here.
router.get("/:id", (req, res, body) => {

    if(req.query.getForumComments == "true"){
        // res.send("comments here");
        forumController.selectForumComments(req.params.id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            console.log(err);
            res.sendStatus(403);
        })
    } else {
        forumController.selectForumInfo(req.params.id)
        .then((response) => {
            res.send(response);
        })
        .catch((err) => {
            res.sendStatus(403);
        })
    }
})

export default router;