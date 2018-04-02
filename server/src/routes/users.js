import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import * as userController from "../controllers/userController";

let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    console.log("routing")
    res.json(req.user);
});

router.get("/", (req, res, body) => {
    userController.getUsers()
    .then((Response) => {
        res.send(Response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(400);
    })
})

router.get("/:id", (req, res, body) => {
    userController.getUser(req.params.id)
    .then((Response) => {
        res.send(Response);
    })
    .catch((err) => {
        console.log(err);
        res.send(404);
    })
})

router.post("/newuser", (req, res, body) => {
    // console.log(req.body);
    // res.send("stuff");
    // userController.addUser(req.body)
    userController.addUser([req.body.fname, req.body.lname, req.body.email, req.body.password, req.body.handle, req.body.avatar])
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

router.get("/gamertagandplat/:id", (req, res, body) => {
    userController.getGamerTagAndPlatform(req.params.id)
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(404);
    })
})

router.delete("/:id", (req, res, body) => {
    userController.deleteUser(req.params.id)
    .then((response) => {
        res.send(response);
    })
    .catch((err) => {
        console.log(err);
        res.sendStatus(403);
    })
})

export default router;