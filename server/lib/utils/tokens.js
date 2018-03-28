'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.decode = exports.encode = undefined;

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _crypto = require('crypto');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ALGORITHM = 'aes-256-ctr';
var SECRET = 'aardvark';

function encode(value) {
    var cipher = (0, _crypto.createCipher)(ALGORITHM, SECRET);
    var encoded = cipher.update((0, _v2.default)() + '_' + value, 'ascii', 'base64');
    encoded += cipher.final('base64');

    return encoded;
}

function decode(value) {
    var decipher = (0, _crypto.createDecipher)(ALGORITHM, SECRET);
    var decoded = decipher.update(value, 'base64', 'ascii');
    decoded += decipher.final('ascii');
    var split = decoded.split('_');

    split.shift();

    return split.join('_');
}

exports.encode = encode;
exports.decode = decode;