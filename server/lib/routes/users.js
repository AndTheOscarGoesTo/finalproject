'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _auth = require('../middleware/auth.mw');

var _userController = require('../controllers/userController');

var userController = _interopRequireWildcard(_userController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.get('/me', _auth.tokenMiddleware, _auth.isLoggedIn, function (req, res) {
    console.log("routing");
    res.json(req.user);
});

router.get("/", function (req, res, body) {
    userController.getUsers().then(function (Response) {
        res.send(Response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(400);
    });
});

router.get("/:id", function (req, res, body) {
    userController.getUser(req.params.id).then(function (Response) {
        res.send(Response);
    }).catch(function (err) {
        console.log(err);
        res.send(404);
    });
});

router.post("/newuser", function (req, res, body) {
    // console.log(req.body);
    // res.send("stuff");
    // userController.addUser(req.body)
    userController.addUser([req.body.fname, req.body.lname, req.body.email, req.body.password, req.body.handle, req.body.avatar]).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(403);
    });
});

router.delete("/:id", function (req, res, body) {
    userController.deleteUser(req.params.id).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(403);
    });
});

exports.default = router;