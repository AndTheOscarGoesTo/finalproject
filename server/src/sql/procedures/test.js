select companyName as company, platform, systemName as system from PlatformFamily pf

	inner join Platform p on pf.id = p.platfamilyid
    inner join PlatformType pt on p.systemid = pt.id;
    

    // Here is the stored procedure that joins five tables statically right now. I need it to be dynamic
select
	gt.*,
    pf.companyName as company,
    pt.platform,
    pt.systemName as system
from 
	gamertags gt
join
	PlatformFamily pf
inner join 
	Platform p 
on 
	pf.id = p.platfamilyid
inner join 
	PlatformType pt 
on 
	p.systemid = pt.id
where
	gt.userid = 301;
	
select * from gamertags;
    

delimiter $$

create procedure spGetPlatformDetails (
	
)

BEGIN

	select companyName as company, platform from PlatformFamily pf
		inner join Platform p on pf.id = p.platfamilyid
        inner join PlatformType pt on p.systemid = pt.id;

END $$

delimiter ;





select companyName as company, platform from PlatformFamily pf

	inner join Platform p on pf.id = p.platfamilyid
    inner join PlatformType pt on p.systemid = pt.id;
    

delimiter $$

create procedure spGetPlatformDetails (
	
)

BEGIN

	select companyName as company, platform from PlatformFamily pf
		inner join Platform p on pf.id = p.platfamilyid
        inner join PlatformType pt on p.systemid = pt.id;

END $$

delimiter ;



 FOREIGN KEY (systemid) REFERENCES PlatformType(id),
    FOREIGN KEY (platfamilyid) REFERENCES PlatformFamily(id)


  FOREIGN KEY(userid) REFERENCES Users(id),
    FOREIGN KEY(platformid) REFERENCES Platform(id)

    FOREIGN KEY (postid) REFERENCES PostList(id)

    FOREIGN KEY (commentid) REFERENCES PostComments(id)


    select
	gt.*,
    pf.companyName as company,
    pt.platform,
    pt.systemName as system
from 
	gamertags gt
join
	PlatformFamily pf
inner join 
	Platform p 
on 
	pf.id = p.platfamilyid
inner join 
	PlatformType pt 
on 
	p.systemid = pt.id
where
	gt.userid = 301;
    
drop procedure if exists spSelectGamerTagAndPlatform;    
    

// here is the one we need to work
 delimiter $$ 
 create procedure spSelectGamerTagAndPlatform (
 )
 
 begin 
 
	select
	gt.*,
    pf.companyName as company,
    pt.platform,
    pt.systemName as system
from 
	gamertags gt
join
	PlatformFamily pf
inner join 
	Platform p 
on 
	pf.id = p.platfamilyid
inner join 
	PlatformType pt 
on 
	p.systemid = pt.id
where
	gt.userid = userid;
 
 end $$
 delimiter ;
 
 call spSelectGamerTagAndPlatform();