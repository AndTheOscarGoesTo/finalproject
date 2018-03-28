'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _passportLocal = require('passport-local');

var _passportHttpBearer = require('passport-http-bearer');

var _table = require('../table');

var _table2 = _interopRequireDefault(_table);

var _tokens = require('../utils/tokens');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersTable = new _table2.default('Users');
var tokensTable = new _table2.default('Tokens');

function configurePassport(app) {
    _passport2.default.use(new _passportLocal.Strategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false
    }, function (email, password, done) {
        usersTable.find({ email: email }).then(function (results) {
            return results[0];
        }).then(function (user) {
            if (user && user.password && user.password === password) {
                tokensTable.insert({
                    userid: user.id
                }).then(function (idObj) {
                    return (0, _tokens.encode)(idObj.id);
                }).then(function (token) {
                    return done(null, { token: token });
                });
            } else {
                return done(null, false, { message: 'Invalid credentials' });
            }
        }).catch(function (err) {
            return done(err);
        });
    }));

    _passport2.default.use(new _passportHttpBearer.Strategy(function (token, done) {
        var tokenId = (0, _tokens.decode)(token);
        if (!tokenId) {
            return done(null, false, { message: 'Invalid token' });
        }
        tokensTable.getOne(tokenId).then(function (tokenRecord) {
            return usersTable.getOne(tokenRecord.userid);
        }).then(function (user) {
            if (user) {
                delete user.password;
                return done(null, user);
            } else {
                return done(null, false, { message: 'Invalid token' });
            }
        }).catch(function (err) {
            return done(err);
        });
    }));

    app.use(_passport2.default.initialize());
}

exports.default = configurePassport;