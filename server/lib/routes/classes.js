'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
var classTable = new _table2.default('Users');

router.get('/', function (req, res) {
    console.log(req.user);
    classTable.getAll().then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

router.post('/', function (req, res) {
    classTable.insert(req.body).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

router.get('/:id', function (req, res) {
    classTable.getOne(req.params.id).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

router.put('/:id', function (req, res) {
    classTable.update(req.params.id, req.body).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

router.delete('/:id', function (req, res) {
    classTable.delete(req.params.id).then(function (results) {
        res.json(results);
    }).catch(function (err) {
        console.log(err);
        res.sendStatus(500);
    });
});

exports.default = router;