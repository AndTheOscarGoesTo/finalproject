import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from '../table'
import * as userController from "../controllers/userController";

let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    console.log("routing")
    res.json(req.user);
});

let RelationshipsTable = new Table('Relationships');

router.get('/', (req, res) => {
    console.log(req.user);
    RelationshipsTable.getAll()
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    RelationshipsTable.insert(req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    RelationshipsTable.getOne(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    RelationshipsTable.update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});