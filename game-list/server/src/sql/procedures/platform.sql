DROP PROCEDURE IF EXISTS spGetPlatforms;

delimiter $$
CREATE PROCEDURE spGetPlatforms(
	
)
BEGIN

	select * from Platform;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetSinglePlatform;

delimiter $$
CREATE PROCEDURE spGetSinglePlatform(
	p_id int
)
BEGIN

	select * from Platform where id = p_id;

END $$
delimiter ;

