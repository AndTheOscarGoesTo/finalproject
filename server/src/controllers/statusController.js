import express from "express";
import mysql from 'mysql';
import FriendsTable from "../table";
import { executeQuery } from '../config/db';

const friendsTable = new FriendsTable("status");

function addLike(userId){
    let sql = `UPDATE STATUS SET likes = ${likes} WHERE id = ${id};`;
    return executeQuery(sql);
}

export {
    getFriends,
    getPending,
    acceptRequest,
    blockRequest,
    getAllFriends
}