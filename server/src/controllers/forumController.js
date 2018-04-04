import express from "express";
import ForumTable from "../table";

const forumTable = new ForumTable("forums");

function selectForumComments(forumId){
    return forumTable.putOrDeleteProcedure("spSelectForumComments", [forumId]);
}

export {
    selectForumComments
}