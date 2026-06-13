create database School;
use school;

create table Student(

roll_no int primary key,
name varchar(50),
city varchar(50) , 
marks int

);

insert into student
(roll_no , name , city , marks)
values 
(110 , "adam" , "Delhi" , 76),
(108 , "bob" , "Mumbai" , 65), 
(124 , "casey" , "Pune" , 94),
(112 , "duke" , "Pune" , 80);

select * from student;

select * from student
where marks > 75;

select distinct city from student; 

select city ,max(marks)  
from student
group by city ;

select avg(marks)
from student;

alter table student
add column grade varchar(2);

update student 
set grade = "O"
where marks >= 80;

update student 
set grade = "A"
where marks >= 70 and marks <80;

update student
set grade = "B"
where marks >= 60 AND marks < 70;
select * from student;

