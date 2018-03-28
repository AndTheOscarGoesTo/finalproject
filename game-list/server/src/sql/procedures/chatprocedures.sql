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