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

var _auth3 = require('../middleware/auth.mw');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = (0, _express.Router)();
router.use('/auth', _auth2.default);
router.use('/users', _users2.default);
router.use('/status', _status2.default);

router.route('*').post(_auth3.tokenMiddleware, _auth3.isLoggedIn).put(_auth3.tokenMiddleware, _auth3.isLoggedIn).delete(_auth3.tokenMiddleware, _auth3.isLoggedIn);

exports.default = router;