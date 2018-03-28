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