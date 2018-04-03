"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFriends = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _table = require("../table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var friendsTable = new _table2.default("relationships");

function getFriends(userId) {
    return friendsTable.getOne(userId);
}

exports.getFriends = getFriends;