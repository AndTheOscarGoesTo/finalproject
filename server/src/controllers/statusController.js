require("dotenv").config();
import express from "express";
import mysql from 'mysql';
import StatusTable from "../table";
import { executeQuery } from "../config/db";

const statusTable = new StatusTable("status");

function getStatuses(ids, limit = 10, offset = 0){
    // dbRef.executeQuery
    return executeQuery(`select SQL_CALC_FOUND_ROWS s.*, u.handle, u.avatar from status s join users u on s.userid = u.id where userid in (?) LIMIT ? OFFSET ?; select found_rows() as 'count';`, [ids, limit, offset]);
}

getStatuses([81, 111, 121, 131, 1])
.then((results) => {
    console.log(results);
})
.catch(err => {
    console.error(err);
});




// function getStatuses(ids, offset, limit) {
// 	select SQL_CALC_FOUND_ROWS s.*, u.handle, u.avatar from status s join users u on s.userid = u.id where userid in (81, 111, 121, 131, 1) LIMIT 10 OFFSET 0;
//     select 
// 		found_rows() as 'count';

//     select * from status;
// }

export {
    getStatuses
}