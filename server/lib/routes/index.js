'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _auth = require('./auth');

var _auth2 = _interopRequireDefault(_auth);

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _status = require('./status');

var _status2 = _interopRequireDefault(_status);

var _games = require('./games');

var _games2 = _interopRequireDefault(_games);

var _relationships = require('./relationships');

var _relationships2 = _interopRequireDefault(_relationships);

var _auth3 = require('../middleware/auth.mw');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/auth', _auth2.default);
router.use('/users', _users2.default);
router.use('/status', _status2.default);
router.use("/games", _games2.default);
router.use('/relationships', _relationships2.default);

router.route('*').post(_auth3.tokenMiddleware, _auth3.isLoggedIn).put(_auth3.tokenMiddleware, _auth3.isLoggedIn).delete(_auth3.tokenMiddleware, _auth3.isLoggedIn);

exports.default = router;