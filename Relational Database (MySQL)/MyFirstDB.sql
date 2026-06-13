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

select name , followers
from user
where followers >= 200;

select name, age , followers
from user
where age > 15
Limit 1;

delete from user
where age = 14;

insert into user
(id,age,name,email,followers , following )
values
(5,19, "Bahubali", "bahubali@gmail.com", 1000, 10),
(6, 20 , "Niak" , "Niak@gmail.com", 900, 20);

select * from user;

update user
set followers = 600
where age = 16;

set sql_safe_updates = 0;

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

select * from user
order by followers ; 

select max(followers)
from user;

select count(age)
from user
where age = 14;

select min(age)
from user;

select avg(followers)
from user;

select sum(followers)
from user;

select age,max(followers)
from user 
group by age
having max(followers)>200
order by age desc;


select name from user
where email not in ("messi123@gmail.com");

select * from instaUser;

select id,  name , email from user;

select * from post;

alter table user
add column city varchar(25) default "Delhi";

alter table user
drop column age;

alter table instauser
rename to User;

alter table User
change column followers subs int default 0;

select * from user;

alter table user
modify subs int default 1000;

insert into user
(id , name, email, following)
values
(10,"niku", "niku@gmail.com",  12);

truncate table post;
drop table post;

truncate table user;
drop table user;

select * from user;
 
