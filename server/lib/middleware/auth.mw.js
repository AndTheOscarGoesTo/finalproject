'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isLoggedIn = exports.tokenMiddleware = undefined;

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function tokenMiddleware(req, res, next) {
    _passport2.default.authenticate('bearer', { session: false })(req, res, next);
}

function isLoggedIn(req, res, next) {
    console.log("----In mw-auth-isloggedin");
    if (req.user) {
        next();
    } else {

        res.sendStatus(401);
    }
}

exports.tokenMiddleware = tokenMiddleware;
exports.isLoggedIn = isLoggedIn;