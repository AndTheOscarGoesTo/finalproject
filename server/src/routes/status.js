import { Router } from 'express';
import { tokenMiddleware, isLoggedIn } from '../middleware/auth.mw';
import Table from '../table'
let router = Router();

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
    console.log("routing")
    res.json(req.user);
});

let usersTable = new Table('Status');

router.get('/', (req, res) => {
    console.log(req.user);
    usersTable.getAll()
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    usersTable.insert(req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/friends', (req, res) => {
    usersTable.insert(req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:id', (req, res) => {
    usersTable.getOne(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/:id', (req, res) => {
    usersTable.update(req.params.id, req.body)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/:id', (req, res) => {
    usersTable.delete(req.params.id)
    .then((results) => {
        res.json(results);
    }).catch((err) => {
        console.log(err);
        res.sendStatus(500);
    });
});
export default router;