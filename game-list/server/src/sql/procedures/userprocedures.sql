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