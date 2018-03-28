'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _people = require('./people');

var _people2 = _interopRequireDefault(_people);

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _auth3 = require('../middleware/auth.mw');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
// import usersRouter from './classes';

router.use('/auth', _auth2.default);
router.use('/users', _users2.default);

router.route('*').post(_auth3.tokenMiddleware, _auth3.isLoggedIn).put(_auth3.tokenMiddleware, _auth3.isLoggedIn).delete(_auth3.tokenMiddleware, _auth3.isLoggedIn);

router.use('/people', _people2.default);
// router.use('/users', usersRouter);

exports.default = router;