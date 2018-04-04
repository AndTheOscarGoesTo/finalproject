"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllFriends = exports.blockRequest = exports.acceptRequest = exports.getPending = exports.getFriends = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

var _table = require("../table");

var _table2 = _interopRequireDefault(_table);

var _db = require("../config/db");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var friendsTable = new _table2.default("relationships");

function getFriends(userId) {
    return friendsTable.getOne(userId);
}

function getAllFriends(userId) {
    var sql = "SELECT * FROM RELATIONSHIPS WHERE (user_one_id = " + userId + " or user_two_id = " + userId + ") and status_interaction = 1;";
    return (0, _db.executeQuery)(sql);
}
function getPending(userId) {
    // return executeQuery(`CALL spSelectUserFromRelationship(${userId})`);
    return friendsTable.putOrDeleteProcedure("spSelectUserFromRelationship", [userId]);
}

function acceptRequest(id) {
    var sql = "UPDATE RELATIONSHIPS SET status_interaction = 1 WHERE id = " + id + ";";
    return (0, _db.executeQuery)(sql);
}
function blockRequest(id) {
    var sql = "UPDATE RELATIONSHIPS SET status_interaction = 2 WHERE id = " + id + ";";
    return (0, _db.executeQuery)(sql);
}

exports.getFriends = getFriends;
exports.getPending = getPending;
exports.acceptRequest = acceptRequest;
exports.blockRequest = blockRequest;
exports.getAllFriends = getAllFriends;