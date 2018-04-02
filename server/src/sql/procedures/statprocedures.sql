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
		u.id = s.userid;
        
end $$
delimiter ;