drop procedure if exists spSelectFriends;
delimiter $$

create procedure spSelectFriends(
	IN p_userid int
)

BEGIN 

select 
	r.id as 'relationshipid',
    r.user_one_id,
    r.user_two_id,
    r.status_interaction,
    r._created as '_relationship_created',
	u.*
from 
	relationships r
join 
	users u
on 
	u.id != p_userid AND 
    (u.id = r.user_one_id OR 
	u.id = r.user_two_id)
where 
	user_one_id = p_userid OR 
    user_two_id = p_userid AND 
    status_interaction = 1 OR
    status_interaction = 2 OR
    status_interaction = 0;

END $$
delimiter ;

drop procedure if exists spDeleteFriend;

delimiter $$
create procedure spDeleteFriend (
	idtodelete int
)

begin 

	SET SQL_SAFE_UPDATES = 0;
	
	delete from
		Relationships
	where
		user_one_id != idtodelete and
        user_two_id = idtodelete or
        user_two_id != idtodelete and 
        user_one_id = idtodelete;

end $$
delimiter ;

drop procedure if exists spSelectUserFromRelationship;

delimiter $$
create procedure spSelectUserFromRelationship (
	in u_id int
)

begin 

	select * from 
		Relationships
	where
		user_two_id = u_id
	and 
		status_interaction = 0;
        
end $$
delimiter ;