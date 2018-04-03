import express from "express";
import FriendsTable from "../table";

const friendsTable = new FriendsTable("relationships");

function getFriends(userId) {
    return friendsTable.getOne(userId);
}

export {
    getFriends
}