'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _auth = require('../middleware/auth.mw');

var router = (0, _express.Router)();

router.get('/me', _auth.tokenMiddleware, _auth.isLoggedIn, function (req, res) {
    console.log("routing");
    res.json(req.user);
});

exports.default = router;