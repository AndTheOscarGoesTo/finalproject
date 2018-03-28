DROP PROCEDURE IF EXISTS spGetGames;

delimiter $$
CREATE PROCEDURE spGetGames(
	
)
BEGIN

	select * from Games;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetSingleGame;

delimiter $$ 
CREATE PROCEDURE spGetSingleGame(
	g_id int
)
begin

	select * from Games where id = g_id;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreateGameData;

delimiter $$
CREATE PROCEDURE spCreateGameData(
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