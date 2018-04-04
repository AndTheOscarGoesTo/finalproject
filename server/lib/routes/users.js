'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _auth = require('../middleware/auth.mw');

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _userController = require('../controllers/userController');

var userController = _interopRequireWildcard(_userController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/me', _auth.tokenMiddleware, _auth.isLoggedIn, function (req, res) {
    console.log("routing");
    res.json(req.user);
});

var usersTable = new _table2.default('Users');

router.get('/', function (req, res) {
    console.log(req.user);
    usersTable.getAll().then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/', function (req, res) {
    usersTable.insert(req.body).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:id', function (req, res) {
    usersTable.getOne(req.params.id).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/:id', function (req, res) {
    usersTable.update(req.params.id, req.body).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

// controllers
// router.delete('/:id', (req, res) => {
//     usersTable.delete(req.params.id)
//     .then((results) => {
//         res.json(results);
//     }).catch((err) => {
//         console.log(err);
//         res.sendStatus(500);
//     });
// });
// router.get("/", (req, res, body) => {
//     userController.getUsers()
//     .then((Response) => {
//         res.send(Response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(400);
//     })
// })

// router.get("/:id", (req, res, body) => {
//     userController.getUser(req.params.id)
//     .then((Response) => {
//         res.send(Response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.send(404);
//     })
// })

// router.post("/newuser", (req, res, body) => {
//     // console.log(req.body);
//     // res.send("stuff");
//     // userController.addUser(req.body)
//     userController.addUser([req.body.fname, req.body.lname, req.body.email, req.body.password, req.body.handle, req.body.avatar])
//     .then((response) => {
//         res.send(response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(403);
//     })
// })

// router.get("/gamertagandplat/:id", (req, res, body) => {
//     userController.getGamerTagAndPlatform([req.params.id])
//     .then((response) => {
//         res.send(response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(404);
//     })
// })

// router.delete("/:id", (req, res, body) => {
//     userController.deleteUser([req.params.id])
//     .then((response) => {
//         res.send(response);
//     })
//     .catch((err) => {
//         console.log(err);
//         res.sendStatus(403);
//     })
// })

exports.default = router;