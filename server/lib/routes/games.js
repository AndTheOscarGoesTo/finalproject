"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require("express");

var _igdbController = require("../controllers/igdbController");

var gamesDbController = _interopRequireWildcard(_igdbController);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var router = (0, _express.Router)();

router.get("/", function (req, res, body) {
    gamesDbController.getGames().then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(403);
    });
});

router.get("/:gameString", function (req, res, body) {
    console.log("--params--", req.params.gameString);
    gamesDbController.getGame(req.params.gameString).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        res.sendStatus(403);
    });
});

router.get("/genre/:genreString", function (req, res, body) {
    console.log("--params--", req.params.genreString);
    gamesDbController.getGameByGenre(req.params.genreString).then(function (response) {
        res.send(response);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(403);
    });
});

exports.default = router;