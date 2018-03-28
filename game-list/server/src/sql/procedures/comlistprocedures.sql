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

