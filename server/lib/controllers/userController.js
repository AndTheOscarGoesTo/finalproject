"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGamerTagAndPlatform = exports.deleteUser = exports.addUser = exports.getUser = exports.getUsers = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _table = require("../table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var usersTable = new _table2.default("users");

function getUsers() {
    return usersTable.getAll();
}

function getUser(id) {
    return usersTable.getOne(id);
}

function addUser(userParms) {
    return usersTable.postProcedure("spInsertUser", userParms);
}

function deleteUser(userId) {
    return usersTable.putOrDeleteProcedure("spDeleteUser", userId);
}

function getGamerTagAndPlatform(userId) {
    return usersTable.putOrDeleteProcedure("spSelectGamerTagAndPlatform", userId);
}

exports.getUsers = getUsers;
exports.getUser = getUser;
exports.addUser = addUser;
exports.deleteUser = deleteUser;
exports.getGamerTagAndPlatform = getGamerTagAndPlatform;