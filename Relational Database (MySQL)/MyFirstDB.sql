Drop Database College;
create database if not exists Instagram;
use instagram;
create table user(
id int  primary key, 
age int ,
name varchar(30),
Email varchar(50) unique,
followers int default 0,
following int,
constraint age_check check(age>=13)

);
insert into user
( id , age , name , email, followers, following)
values
(1,14,"Nik","nik123@gmail.com", 100, 50),
(2,15,"adam","adam123@gmail.com", 150, 100),
(3,16,"eve","eve123@gmail.com", 200, 150),
(4,17,"messi","messi123@gmail.com", 250, 200);


create table Post(
id int  primary key, 
Content varchar (100),
user_id int

);

insert into post
(id, content , user_id)
values
(1,"Nikhil you will achieve freedom",2),
(2," don't fall under distraction of mind and outside distraction",2),
(3,"good going",3);

select id,  name , email from user;
select * from user;
select * from post;