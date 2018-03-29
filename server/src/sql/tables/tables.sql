DROP TABLE IF EXISTS Users;

CREATE TABLE Users (
  id int(11) NOT NULL AUTO_INCREMENT,
  firstname varchar(60) DEFAULT NULL,
  lastname varchar(60) DEFAULT NULL,
  email varchar(80) NOT NULL,
  password varchar(256) NOT NULL,
  handle varchar(70) NOT NULL,
  _created datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
); 

DROP TABLE IF EXISTS Tokens;

CREATE TABLE Tokens (
  id int NOT NULL AUTO_INCREMENT,
  userid int NOT NULL,
  PRIMARY KEY (id, userid),
  KEY usersFK_idx (userid),
  CONSTRAINT usersFK FOREIGN KEY (userid) REFERENCES Users(id) ON DELETE NO ACTION ON UPDATE NO ACTION
);

DROP TABLE IF EXISTS Status;

CREATE TABLE Status (
    id int not null auto_increment primary key,
    status varchar(280)
);

DROP TABLE IF EXISTS SocialMedia;

CREATE TABLE SocialMedia (
    id int not null auto_increment primary key,
    twitter varchar(50),
    instagram varchar(50),
    twitch varchar(50),
    discord varchar(50),
    youtube varchar(50)
);

DROP TABLE IF EXISTS PlatformType;

CREATE TABLE PlatformType (
	id int not null auto_increment primary key,
    platform varchar(75) not null,
    systemName varchar(75) not null,
    _created datetime default current_timestamp
);

DROP TABLE IF EXISTS Platform;

CREATE TABLE Platform (
	id int not null auto_increment primary key,
    systemid int not null,
    platfamilyid int not null, 
    _created datetime default current_timestamp
);

DROP TABLE IF EXISTS PlatformFamily;

CREATE TABLE PlatformFamily (
	id int not null auto_increment primary key,
    companyName varchar(75) not null,
    _created datetime default current_timestamp
);

DROP TABLE IF EXISTS Games;

CREATE TABLE Games (
	id int not null auto_increment primary key,
    hoursLogged int not null,
    gameList varchar(200),
    gameImage text,
    _current datetime default current_timestamp
);

DROP TABLE IF EXISTS GamerTags;

CREATE TABLE GamerTags (
	id int not null auto_increment primary key,
    userid int not null,
    gamertag varchar(70) not null,
    platformid int not null,
    _created datetime default current_timestamp
);

DROP TABLE IF EXISTS Forums;

CREATE TABLE Forums (
	id int not null auto_increment primary key,
    postid int not null,
    title varchar(100),
	forumImg text,
    forumText text,
    _created datetime default current_timestamp
);


DROP TABLE IF EXISTS CommentList;

CREATE TABLE CommentList (
	id int not null auto_increment primary key,
    commentid int not null
);


DROP TABLE IF EXISTS Comments;

CREATE TABLE Comments (
	id int not null auto_increment primary key,
    userid int not null,
    newcomment text,
    _created datetime default current_timestamp
);

