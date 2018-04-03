DROP PROCEDURE IF EXISTS spSelectGames;

delimiter $$
CREATE PROCEDURE spSelectGames(
	
)
BEGIN

	select * from Games;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectSingleGame;

delimiter $$ 
CREATE PROCEDURE spSelectSingleGame(
	g_id int
)
begin

	select * from Games where id = g_id;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertGameData;

delimiter $$
CREATE PROCEDURE spInsertGameData(
	g_hours int,
    g_games text,
    g_img text
)
BEGIN

	insert into Games (hoursLogged, gameList, gameImage)
    values (g_hours, g_games, g_img);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateGameData;

delimiter $$
CREATE PROCEDURE spUpdateGameData(
	g_id int,
    g_hours int,
    g_game text,
    g_image text
)
BEGIN

	update Games
    
    set
    
    id = coalesce(g_id, id),
    hoursLogged = coalesce(g_hours, hoursLogged),
    gameList = coalesce(g_game, gameList),
    gameImage = coalesce(g_image, gameImage)
    
    where id = g_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteGame;

delimiter $$
CREATE PROCEDURE spDeleteGame (
    g_id int
)

BEGIN

    delete from Games
    where id = g_id;

END $$
delimiter ;