DROP PROCEDURE IF EXISTS spGetAllChat;

delimiter $$
CREATE PROCEDURE spGetAllChat (

)

BEGIN 

    select * from Chat;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetOneChat;

delimiter $$
CREATE PROCEDURE spGetOneChat (
    c_id int
)

BEGIN

    select * from Chat
    where id = c_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreateChat;

delimiter $$
CREATE PROCEDURE spCreateChat (
    c_body text,
    c_to int,
    c_from int
)

BEGIN

    insert into Chat (body, userto, userfrom)
    values (c_body, c_to, c_from)

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
DROP PROCEDURE IF EXISTS spGetPostList;
DROP PROCEDURE IF EXISTS spGetCommentList;

delimiter $$
CREATE PROCEDURE spGetCommentList(

)
begin 

	select * from CommentList;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetOnePost;
DROP PROCEDURE IF EXISTS spGetListComment;

delimiter $$
CREATE PROCEDURE spGetListComment(
	c_id int
)
begin 

	select * from CommentList
    where id = c_id;
    
end $$
delimiter ;


DROP PROCEDURE IF EXISTS spGetComments;

delimiter $$
CREATE PROCEDURE spGetComments(
	
)
BEGIN

	select * from Comments;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetOneComment;

delimiter $$
CREATE PROCEDURE spGetOneComment(
	c_id int
)
BEGIN

	select * from Comments where id = c_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreateComment;

delimiter $$
CREATE PROCEDURE spCreateComment(
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
DROP PROCEDURE IF EXISTS spGetForms;
DROP PROCEDURE IF EXISTS spGetForums;

delimiter $$
CREATE PROCEDURE spGetForums(

)
BEGIN

	select * from Forums;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetOneForm;
DROP PROCEDURE IF EXISTS spGetOneForum;

delimiter $$
CREATE PROCEDURE spGetForums(

)
BEGIN

	select * from Forums;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreateForm;
DROP PROCEDURE IF EXISTS spCreateForum;

delimiter $$
CREATE PROCEDURE spCreateForum(
	f_postid int,
    f_title varchar(100),
    f_img text,
    f_text text
)
begin 

	insert into Forums (postid, title, forumImg, forumText)
    values (f_postid, f_title, f_img, f_text);
    
    select last_insert_id();
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateForm;
DROP PROCEDURE IF EXISTS spUpdateForum;

delimiter $$
CREATE PROCEDURE spUpdateForm(
	f_id int,
    f_postid int,
    f_title varchar(100),
    f_img text,
    f_text text
)
BEGIN

	update Forums
    
    set
    
    id = coalesce(f_id, id),
    postid = coalesce(f_postid, postid),
    title = coalesce(f_title, title),
    forumImg = coalesce(f_img, forumImg),
    forumText = coalesce(f_text, forumText)
    
    where id = f_id;

END $$
delimiter ;
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
DROP PROCEDURE IF EXISTS spGetPlatformFamily;

delimiter $$
CREATE PROCEDURE spGetPlatformFamily()
begin 

	select * from PlatformFamily;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetAPlatformFamily;

delimiter $$
CREATE PROCEDURE spGetAPlatformFamily(
	p_famid int
)
begin 

	select * from PlatformFamily where id = p_famid;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreatePlatformFamily;

delimiter $$
CREATE PROCEDURE spCreatePlatformFamily(
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


DROP PROCEDURE IF EXISTS spGetPlatformType;

delimiter $$
CREATE PROCEDURE spGetPlatformType()
begin 

	select * from PlatformType;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetAPlatformType;

delimiter $$
CREATE PROCEDURE spGetAPlatformType(
	p_typeid int
)
begin 

	select * from PlatformType where id = p_typeid;
    
end $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreatePlatformType;

delimiter $$
CREATE PROCEDURE spCreatePlatformType(
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
DROP PROCEDURE IF EXISTS spGetAllSocialMedia;

delimiter $$
CREATE PROCEDURE spGetAllSocialMedia (

)

BEGIN

    select * from SocialMedia;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetSocialMedia;

delimiter $$
CREATE PROCEDURE spGetSocialMedia (
    sm_id int
)

BEGIN

    select * from SocialMedia 
    where id = sm_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreateSocialMedia;

delimiter $$
CREATE PROCEDURE spCreateSocialMedia (
    sm_twitter varchar(50),
    sm_instagram varchar(50),
    sm_twitch varchar(50),
    sm_discord varchar(50),
    sm_youtube varchar(50)
)

BEGIN

    insert into SocialMedia (twitter, instagram, twithc, discord, youtube)
    values (sm_twitter, sm_instagram, sm_twitch, sm_discord, sm_youtube);

    select last_insert_id();

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
DROP PROCEDURE IF EXISTS spGetEveryStatus;

delimiter $$
CREATE PROCEDURE spGetEveryStatus (

)

BEGIN

    select * from Status;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetAStatus;

delimiter $$
CREATE PROCEDURE spGetAStatus(
    s_id int
)

BEGIN

    select * from Status where id = s_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreateStatus;

delimiter $$
CREATE PROCEDURE spCreateStatus (
    s_status varchar(280)
)

BEGIN

    insert into Status (status) 
    values (s_status);

    select last_insert_id();

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spUpdateStatus;

delimiter $$
CREATE PROCEDURE spUpdateStatus (
    s_id int,
    s_status varchar(280)
)

BEGIN

    update Status

    set 

    id = coalesce(s_id, id),
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
DROP PROCEDURE IF EXISTS spGetUsers;

delimiter $$
CREATE PROCEDURE spGetUsers(
	
)
BEGIN

	select * from Users;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spGetOneUser;

delimiter $$
CREATE PROCEDURE spGetOneUser(
	u_id int
)
BEGIN

	select * from Users where id = u_id;

END $$
delimiter ;

DROP PROCEDURE IF EXISTS spCreateUser;

delimiter $$
CREATE PROCEDURE spCreateUser(
	u_fname varchar(60),
    u_lname varchar(60),
    u_email varchar(80),
    u_password varchar(256),
    u_handle varchar(70)
    
)
BEGIN

	insert into Users (firstname, lastname, email, password, handle)
    values (u_fname, u_lname, u_email, u_password, u_handle);
    
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
    u_handle varchar(70)
)
BEGIN

	update Users
    
    set
    
    id = coalesce(u_id, id),
    firstname = coalesce(u_firstname, firstname),
    lastname = coalesce(u_lastname, lastname),
    email = coalesce(u_email, email),
    password = coalesce(u_password, password),
    handle = coalesce(u_handle, password)
    
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