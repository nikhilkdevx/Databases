create database if not exists college;
use college;

create table Teacher(
id int primary key,
name varchar(50),
subject varchar(50),
salary int
);

insert into Teacher
(id , name , subject , salary)
values
(23,"ajay", "math", 50000),
(47,"bharat", "english", 60000),
(18,"chetan", "chemistry", 45000),
(9,"divya", "physics", 75000);

Drop Table teacher;
select * from teacher;

select * from teacher
where salary > 55000; 

alter table teacher
change column salary  ctc int ;
select * from teacher;

update teacher
set ctc = ctc + ctc*0.25;

alter table teacher
modify column city varchar(50) default "patna";

insert into teacher
(id , name , subject)
values
(22, "Nik", "math" ); 

alter table teacher
drop column ctc;

