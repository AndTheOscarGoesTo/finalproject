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