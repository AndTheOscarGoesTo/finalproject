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