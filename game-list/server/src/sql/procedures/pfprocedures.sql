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