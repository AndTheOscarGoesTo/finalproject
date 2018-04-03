'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _auth = require('../middleware/auth.mw');

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();

router.get('/me', _auth.tokenMiddleware, _auth.isLoggedIn, function (req, res) {
    console.log("routing");
    res.json(req.user);
});

var usersTable = new _table2.default('Status');

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

router.delete('/:id', function (req, res) {
    usersTable.delete(req.params.id).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});
exports.default = router;