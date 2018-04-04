"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getGamerTagByPlatform = exports.getGamerTagsAndPlatforms = exports.insertGamerTag = exports.updateGamerTagName = exports.getGamerTags = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _table = require("../table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gamerTagTable = new _table2.default("gamertags");

function getGamerTags() {
    return gamerTagTable.getAll();
}

function updateGamerTagName(tagId, newTag) {
    return gamerTagTable.update(tagId, { gamertag: newTag });
}

function insertGamerTag(userId, newTag, platformId) {
    return gamerTagTable.postProcedure("spInsertGamerTag", [userId, newTag, platformId]);
}

function getGamerTagsAndPlatforms(userId) {
    return gamerTagTable.putOrDeleteProcedure("spSelectGamerTagAndPlatform", [userId]);
}

function getGamerTagByPlatform(userId, platId) {
    return gamerTagTable.putOrDeleteProcedure("spSelectGamerTagByPlatform", [userId, platId]);
}

exports.getGamerTags = getGamerTags;
exports.updateGamerTagName = updateGamerTagName;
exports.insertGamerTag = insertGamerTag;
exports.getGamerTagsAndPlatforms = getGamerTagsAndPlatforms;
exports.getGamerTagByPlatform = getGamerTagByPlatform;