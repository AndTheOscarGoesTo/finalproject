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