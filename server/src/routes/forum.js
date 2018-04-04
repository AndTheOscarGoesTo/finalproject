import { Router } from "express";
import * as forumController from "../controllers/forumController";

const router = new Router();

router.get("/:id", (req, res, body) => {
    forumController.selectForumComments(req.params.id)
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

export default router;