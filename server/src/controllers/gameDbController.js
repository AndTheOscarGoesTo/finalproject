import express from "express";
import request from 'request';

function getGames(){
    console.log("getting games");
    return new Promise((resolve, reject) => {
        request(`http://thegamesdb.net/api/GetGamesList.php?platform=Sony Playstation 4`,{
            method: "GET",
            mode: "cors",
            gzip: true
        }, (err, response, body) => {
            if (err) reject(err);
            
            resolve(body);
        });
    });
}


/* Gets games from the game api by the id used for their platform
    possible platformIds
        1 - PC (The glorious master race!)
        4919 - Sony Playstation 4
        4971 - Nintendo Switch
        4915 - iOS
        4916 - Android
        4920 - Microsoft Xbox One
*/
function getGamesByPlatformId(platformId){
    return new Promise((resolve, reject) => {
            request(`http://thegamesdb.net/api/GetPlatformGames.php?platform=${platformId}`,{
                method: "GET",
                mode: "cors",
                gzip: true
            }, (err, response, body) => {
                if (err) reject(err);
    
                resolve(body);
            });
        });
}

function getGamesByGenre(){
    return new Promise((resolve, reject) => {
        request(`http://thegamesdb.net/api/GetPlatformGames.php?platform=${platformId}`,{
            method: "GET",
            mode: "cors",
            gzip: true
        }, (err, response, body) => {
            if (err) reject(err);

            resolve(body);
        });
    });
}

export {
    getGames,
    getGamesByPlatformId
}