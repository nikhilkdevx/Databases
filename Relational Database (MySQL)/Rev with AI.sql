use college;
create table student(
id int primary key,
name varchar(50) ,
 marks int default 0 ,
 city varchar(50)
);
select * from student;

insert into student
(id , name , marks , city)
values
(1, 'Rahul', 85, 'Patna'),
(2, 'Aman', 72, 'Delhi'),
(3, 'Priya', 91, 'Patna'),
(4, 'Neha', 67, 'Mumbai'),
(5, 'Rohit', 78, 'Patna'),
(6, 'Anjali', 95, 'Delhi'),
(7, 'Vikas', 88, 'Kolkata'),
(8, 'Pooja', 60, 'Mumbai'),
(9, 'Karan', 82, 'Patna'),
(10, 'Sneha', 99, 'Delhi');

alter table student
add column city varchar(50);

select *  from student
where marks > 70;

select * from student 
where city = "Patna";

select * from student
where marks > 70 and city = "Patna";

select *
from student
where marks = (
select max(marks)
from student
);

select marks , name  
from student
order by marks desc
limit 3; 

select avg(marks) 
from student ;

select count(*)
from student;

select *
from student
order by marks asc;

select *
from student
order by  marks desc;

select city , count(*) 
from student
group by city;

alter table student
add column age int;

select * from student;

alter table student
modify column city varchar(100);

alter table student 
drop column age;

alter table student
add column country varchar(50) default "INDIA";

alter table student
modify column country varchar(50) default "NEPAL";

update student
set marks = 95
where name = "Rahul";

set sql_safe_updates = 0;

update student
set marks = 100
where name = "Rahul";

select * from student;

update student
set city = "Delhi"
where name = "Neha";

update student
set marks = 100;

delete from student
where name = "Rahul";

truncate student;

alter table student
modify column city varchar(100);

alter table student
drop column city;

select city , count(*)
from student
group by city;


