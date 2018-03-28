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