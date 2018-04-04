DROP PROCEDURE IF EXISTS spSelectAllChat;

delimiter $$
CREATE PROCEDURE spSelectAllChat (

)

BEGIN 

    select * from Chat;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneChat;

delimiter $$
CREATE PROCEDURE spSelectOneChat (
    c_id int
)

BEGIN

    select * from Chat
    where id = c_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertChat;

delimiter $$
CREATE PROCEDURE spInsertChat (
    c_body text,
    c_to int,
    c_from int
)

BEGIN

    insert into Chat (body, userto, userfrom)
    values (c_body, c_to, c_from);

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteChat;

delimiter $$
CREATE PROCEDURE spDeleteChat (
    c_id int
)

BEGIN 

    delete from Chat 
    where id = c_id;

END $$
delimiter ;
DROP PROCEDURE IF EXISTS spSelectCommentList;

delimiter $$
CREATE PROCEDURE spSelectCommentList(

)
begin 

	select * from CommentList;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectListComment;

delimiter $$
CREATE PROCEDURE spSelectListComment(
	c_id int
)
begin 

	select * from CommentList
    where id = c_id;
    
end $$
delimiter ;


DROP PROCEDURE IF EXISTS spSelectComments;

delimiter $$
CREATE PROCEDURE spSelectComments(
	
)
BEGIN

	select * from Comments;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneComment;

delimiter $$
CREATE PROCEDURE spSelectOneComment(
	c_id int
)
BEGIN

	select * from Comments where id = c_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertComment;

delimiter $$
CREATE PROCEDURE spInsertComment(
	c_userid int,
    c_newcomment text
)
BEGIN

	insert into Comments (userid, newcomment)
    values (c_userid, c_newcomment);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateComment;

delimiter $$
CREATE PROCEDURE spUpdateComment(
	c_id int,
    c_userid int,
    c_comment text
)
BEGIN

	update Comments
    
    set
    
    id = coalesce(c_id, id),
    userid = coalesce(c_userid, userid),
    newcomment = coalesce(c_comment, newcomment)
    
    where id = c_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteComment;

delimiter $$
CREATE PROCEDURE spDeleteComment (
    c_id int
)

BEGIN   

    delete from Comments
    where id = c_id;

END $$
delimiter ;
DROP PROCEDURE IF EXISTS spSelectForums;

delimiter $$
CREATE PROCEDURE spSelectForums(

)
BEGIN

	select * from Forums;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneForum;

delimiter $$
CREATE PROCEDURE spSelectOneForum(
    f_id int
)
BEGIN

	select * from Forums
    where id = f_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertForum;

delimiter $$
CREATE PROCEDURE spInsertForum(
	f_commentid int,
    f_title varchar(100),
    f_img text,
    f_text text
)
begin 

	insert into Forums (commentid, title, forumImg, forumText)
    values (f_commentid, f_title, f_img, f_text);
    
    select last_insert_id();
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateForum;

delimiter $$
CREATE PROCEDURE spUpdateForum(
	f_id int,
    f_commentid int,
    f_title varchar(100),
    f_img text,
    f_text text
)
BEGIN

	update Forums
    
    set
    
    id = coalesce(f_id, id),
    commentid = coalesce(f_commentid, commentid),
    title = coalesce(f_title, title),
    forumImg = coalesce(f_img, forumImg),
    forumText = coalesce(f_text, forumText)
    
    where id = f_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteForum;

delimiter $$
CREATE PROCEDURE spDeleteForum (
    f_id int
)

BEGIN

    delete from Forums
    where id = f_id;

END $$
delimiter ;

drop procedure if exists spSelectForumInfo;

delimiter $$
create procedure spSelectForumInfo (
    f_creatorid int
)

begin

    select
        title,
        forumImg as image,
        forumText as text,
        handle as handle,
        avatar as avatar
    from 
        Forums f
    join
        Users u
    where 
        u.id = f_creatorid;

end $$
delimiter ;
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
DROP PROCEDURE IF EXISTS spSelectGamerTag;

delimiter $$
CREATE PROCEDURE spSelectGamerTag(

)
BEGIN

	select * from GamerTags;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneGamerTag;

delimiter $$
CREATE PROCEDURE spSelectOneGamerTag(
	gt_id int
)
BEGIN

	select * from GamerTags where id = gt_id;

END $$
delimiter ;

DROP PROCEDURE spSelectGamerTagAndPlatform;

DELIMITER $$ 
 
 CREATE PROCEDURE spSelectGamerTagAndPlatform(
	u_id int
 )
 
BEGIN
 
	SELECT 
			u.id as userid,
			gt.gamertag as gamertag,
			pf.companyName as company,
			pt.systemName as system,
			pt.platform as platformType
	FROM gamertags gt
	INNER JOIN users u ON gt.userid = u.id
	INNER JOIN platform p ON p.id = gt.platformid
	INNER JOIN platformfamily pf ON pf.id = p.platfamilyid
	INNER JOIN platformtype pt ON pt.id = p.systemid
	WHERE userid = u_id;
 
 END $$
 
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertGamerTag;

delimiter $$
CREATE PROCEDURE spInsertGamerTag(
	gt_userid int,
    gt_gtag varchar(70),
    gt_platformid int
)
BEGIN

	insert into GamerTags (userid, gamertag, platformid)
    values (gt_userid, gt_gtag, gt_platformid);
    
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

DROP PROCEDURE IF EXISTS spDeleteGamerTag;

delimiter $$
CREATE PROCEDURE spDeleteGamerTag (
    gt_id int
)

BEGIN 

    delete from GamerTags
    where id = gt_id;

END $$
delimiter ;
DROP PROCEDURE IF EXISTS spSelectPlatformFamily;

delimiter $$
CREATE PROCEDURE spSelectPlatformFamily()
begin 

	select * from PlatformFamily;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectAPlatformFamily;

delimiter $$
CREATE PROCEDURE spSelectAPlatformFamily(
	p_famid int
)
begin 

	select * from PlatformFamily where id = p_famid;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertPlatformFamily;

delimiter $$
CREATE PROCEDURE spInsertPlatformFamily(
	p_coname varchar(75)
)
BEGIN

	insert into PlatformFamily (companyName)
    values (p_coname);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdatePlatformFamily;

delimiter $$
CREATE PROCEDURE spUpdatePlatformFamily(
	pf_id int,
    pf_company varchar(75)
)
BEGIN

	update PlatformFamily
    
    set
    
    id = coalesce(pf_id, id),
    companyName = coalesce(pf_company, companyName)
    
    where id = pf_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeletePlatformFamily;

delimiter $$
CREATE PROCEDURE spDeletePlatformFamily (
    pf_id int
)

BEGIN 

    delete from PlatformFamily
    where id = pf_id;

END $$
delimiter ;
DROP PROCEDURE IF EXISTS spSelectPlatforms;

delimiter $$
CREATE PROCEDURE spSelectPlatforms(
	
)
BEGIN

	select * from Platform;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectSinglePlatform;

delimiter $$
CREATE PROCEDURE spSelectSinglePlatform(
	p_id int
)
BEGIN

	select * from Platform where id = p_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeletePlatform;

delimiter $$
CREATE PROCEDURE spDeletePlatform (
	p_id int
)

BEGIN

	delete from Platform
	where id = p_id;

END $$
delimiter ;
DROP PROCEDURE IF EXISTS spSelectPlatformType;

delimiter $$
CREATE PROCEDURE spSelectPlatformType()
begin 

	select * from PlatformType;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectAPlatformType;

delimiter $$
CREATE PROCEDURE spSelectAPlatformType(
	p_typeid int
)
begin 

	select * from PlatformType where id = p_typeid;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertPlatformType;

delimiter $$
CREATE PROCEDURE spInsertPlatformType(
	p_name varchar(75),
    p_systemName varchar(75)
)
BEGIN

	insert into PlatformType (platform, systemName)
    values (p_name, p_systemName);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdatePlatformType;

delimiter $$
CREATE PROCEDURE spUpdatePlatformType(
	pt_id int,
    pt_platform varchar(75),
    pt_system varchar(75)
)
BEGIN

	update PlatformType
    
    set
    
    id = coalesce(pt_id, id),
    platform = coalesce(pt_platform, platform),
    systemName = coalesce(pt_system, systemName)
    
    where id = pt_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeletePlatformType;

delimiter $$
CREATE PROCEDURE spDeletePlatformType (
    pt_id int
)

BEGIN


    delete from PlatformType
    where id = pt_id;

END $$  
delimiter ;
drop procedure if exists spSelectFriends;
delimiter $$

create procedure spSelectFriends(
	IN p_userid int
)

BEGIN 

select 
	r.id as 'relationshipid',
    r.user_one_id,
    r.user_two_id,
    r.status_interaction,
    r._created as '_relationship_created',
	u.*
from 
	relationships r
join 
	users u
on 
	u.id != p_userid AND 
    (u.id = r.user_one_id OR 
	u.id = r.user_two_id)
where 
	user_one_id = p_userid OR 
    user_two_id = p_userid AND 
    status_interaction = 1 OR
    status_interaction = 2 OR
    status_interaction = 0;

END $$
delimiter ;

drop procedure if exists spDeleteFriend;

delimiter $$
create procedure spDeleteFriend (
	idtodelete int
)

begin 

	SET SQL_SAFE_UPDATES = 0;
	
	delete from
		Relationships
	where
		user_one_id != idtodelete and
        user_two_id = idtodelete or
        user_two_id != idtodelete and 
        user_one_id = idtodelete;

end $$
delimiter ;

drop procedure if exists spSelectUserFromRelationship;

delimiter $$
create procedure spSelectUserFromRelationship (
	in u_id int
)

begin 

	select * from 
		Relationships
	where
		user_two_id = u_id
	and 
		status_interaction = 0;
        
end $$
delimiter ;
DROP PROCEDURE IF EXISTS spSelectAllSocialMedia;

delimiter $$
CREATE PROCEDURE spSelectAllSocialMedia (

)

BEGIN

    select * from SocialMedia;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneSocialMedia;

delimiter $$
CREATE PROCEDURE spSelectOneSocialMedia (
    sm_id int
)

BEGIN

    select * from SocialMedia 
    where id = sm_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertSocialMedia;

delimiter $$
CREATE PROCEDURE spInsertSocialMedia (
    sm_twitter varchar(50),
    sm_instagram varchar(50),
    sm_twitch varchar(50),
    sm_discord varchar(50),
    sm_youtube varchar(50)
)

BEGIN

    insert into SocialMedia (twitter, instagram, twitch, discord, youtube)
    values (sm_twitter, sm_instagram, sm_twitch, sm_discord, sm_youtube);

    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateSocialMedia;

delimiter $$
CREATE PROCEDURE spUpdateSocialMedia (
    sm_id int,
    sm_twitter varchar(50),
    sm_instagram varchar(50),
    sm_twitch varchar(50),
    sm_discord varchar(50),
    sm_youtube varchar(50)
)

BEGIN

    update SocialMedia

    set

    id = coalesce(sm_id, id),
    twitter = coalesce(sm_twitter, twitter),
    instagram = coalesce(sm_instagram, instagram),
    twitch = coalesce(sm_twitch, twitch),
    discord = coalesce(sm_discord, discord),
    youtube = coalesce(sm_youtube, youtube)

    where id = sm_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteSocialMedia;

delimiter $$
CREATE PROCEDURE spDeleteSocialMedia (
    sm_id int
)

BEGIN

    delete from SocialMedia
    where id = sm_id;

END $$
delimiter ;
DROP PROCEDURE IF EXISTS spSelectEveryStatus;

delimiter $$
CREATE PROCEDURE spSelectEveryStatus (

)

BEGIN

    select * from Status;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectAStatus;

delimiter $$
CREATE PROCEDURE spSelectAStatus(
    s_id int
)

BEGIN

    select * from Status where id = s_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertStatus;

delimiter $$
CREATE PROCEDURE spInsertStatus (
    s_userid int,
    s_status varchar(280)
)

BEGIN

    insert into Status (userid, status) 
    values (s_userid, s_status);

    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateStatus;

delimiter $$
CREATE PROCEDURE spUpdateStatus (
    s_id int,
    s_userid int,
    s_status varchar(280)
)

BEGIN

    update Status

    set 

    id = coalesce(s_id, id),
    userid = coalesce(s_userid, userid),
    status = coalesce(s_status, status)

    where id = s_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteStatus;

delimiter $$
CREATE PROCEDURE spDeleteStatus (
    s_id int
)

BEGIN

    delete from Status where id = s_id;

END $$
delimiter ;

drop procedure if exists spSelectStatusInfo;

delimiter $$
create procedure spSelectStatusInfo (
    s_userid int
)

begin
	select
		status s,
        handle h,
        avatar a
	from 
		Status s
	join 
		Users u
	where
		u.id = s_userid;
        
end $$
delimiter ;
DROP PROCEDURE IF EXISTS spSelectUsers;

delimiter $$
CREATE PROCEDURE spSelectUsers(
	
)
BEGIN

	select * from Users;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spSelectOneUser;

delimiter $$
CREATE PROCEDURE spSelectOneUser(
	u_id int
)
BEGIN

	select * from Users where id = u_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spInsertUser;

delimiter $$
CREATE PROCEDURE spInsertUser(
	u_fname varchar(60),
    u_lname varchar(60),
    u_email varchar(80),
    u_password varchar(256),
    u_handle varchar(70),
    u_avatar text
    
)
BEGIN

	insert into Users (firstname, lastname, email, password, handle, avatar)
    values (u_fname, u_lname, u_email, u_password, u_handle, u_avatar);
    
    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateUser;

delimiter $$
CREATE PROCEDURE spUpdateUser(
	u_id int,
    u_firstname varchar(60),
    u_lastname varchar(60),
    u_email varchar(80),
    u_password varchar(256),
    u_handle varchar(70),
    u_avatar text
)
BEGIN

	update Users
    
    set
    
    id = coalesce(u_id, id),
    firstname = coalesce(u_firstname, firstname),
    lastname = coalesce(u_lastname, lastname),
    email = coalesce(u_email, email),
    password = coalesce(u_password, password),
    handle = coalesce(u_handle, password),
    avatar = coalesce(u_avatar, avatar)
    
    where id = u_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spDeleteUser;

delimiter $$
CREATE PROCEDURE spDeleteUser (
	u_id int
)
BEGIN

	delete from Users
    where id = u_id;

END $$
delimiter ;