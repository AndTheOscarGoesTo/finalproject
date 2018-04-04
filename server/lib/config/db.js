"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generatePlaceholders = exports.executeQuery = exports.empty = exports.rows = exports.row = undefined;

var _mysql = require("mysql");

var _mysql2 = _interopRequireDefault(_mysql);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require("dotenv").config();


console.log(process.env.DB_HOST);
console.log(process.env.DB_PASSWORD);

var pool = _mysql2.default.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

function executeQuery(sql) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    return getConnection().then(function (connection) {
        return new Promise(function (resolve, reject) {
            connection.query(sql, args, function (err, result) {
                connection.release();
                if (err) {
                    reject(err);
                } else {
                    resolve(result);
                }
            });
        });
    });
}

function callProcedure(procedureName) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    // let placeholders = (args.length === 1 && !isNaN(args[0])) ? args[0] : generatePlaceholders(args);
    var placeholders = !args.some(isNaN) ? args : generatePlaceholders(args);
    console.log("--procedure args--", placeholders);
    var callString = "CALL " + procedureName + "(" + placeholders + ");"; // CALL GetChirps();, or CALL InsertChirp(?,?,?);
    return executeQuery(callString, args);
}

function rows(procedureName) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    return callProcedure(procedureName, args).then(function (resultsets) {
        return resultsets[0];
    });
}

function row(procedureName) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    console.log("--row args--", args);
    return callProcedure(procedureName, args).then(function (resultsets) {
        return resultsets[0][0];
    });
}

function empty(procedureName) {
    var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    return callProcedure(procedureName, args).then(function () {
        return;
    });
}

function generatePlaceholders() {
    var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    console.log("--placeholders before--", args);
    var placeholders = '';
    if (args.length > 0) {
        for (var i = 0; i < args.length; i++) {
            console.log("--placeholder-" + i + "--", placeholders);
            if (i === args.length - 1) {
                // if we are on the last argument in the array
                placeholders += '?';
            } else {
                placeholders += '?,';
            }
        }
    }

    console.log("--placeholders after--", placeholders);
    return placeholders;
}

function getConnection() {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                reject(err);
            } else {
                resolve(connection);
            }
        });
    });
}

exports.row = row;
exports.rows = rows;
exports.empty = empty;
exports.executeQuery = executeQuery;
exports.generatePlaceholders = generatePlaceholders;