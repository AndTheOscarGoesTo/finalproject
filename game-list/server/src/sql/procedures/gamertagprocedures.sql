DROP PROCEDURE IF EXISTS spGetGamerTag;

delimiter $$
CREATE PROCEDURE spGetGamerTag(

)
BEGIN

	select * from GamerTags;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetOneGamerTag;

delimiter $$
CREATE PROCEDURE spGetOneGamerTag(
	g_id int
)
BEGIN

	select * from GamerTags where id = g_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreateGamerTag;

delimiter $$
CREATE PROCEDURE spCreateGamerTag(
	g_userid int,
    g_gtag varchar(70),
    g_platformid int
)
BEGIN

	insert into GamerTags (userid, gamertag, platformid)
    values (g_userid, g_gtag, g_platformid);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateGamerTag;

delimiter $$
CREATE PROCEDURE spUpdateGamerTag(
	gt_id int,
    gt_userid int,
    gt_gamertag varchar(70),
    gt_platformid int
)
BEGIN

	update GamerTags
    
    set
    
    id = coalesce(gt_id, id),
    userid = coalesce(gt_userid, userid),
    gamertag = coalesce(gt_gamertag, gamertag),
    platformid = coalesce(gt_platformid, platformid)
    
    where id = gt_id;

END $$
delimiter ;