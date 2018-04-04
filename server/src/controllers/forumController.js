import express from "express";
import ForumTable from "../table";

const forumTable = new ForumTable("forums");

function getForums(){
    return forumTable.getAll();
}

function selectForumComments(forumId){
    return forumTable.putOrDeleteProcedure("spSelectForumComments", [forumId]);
}

export {
    getForums,
    selectForumComments
}