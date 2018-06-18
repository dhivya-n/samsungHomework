DROP DATABASE IF EXISTS students;
CREATE DATABASE students;

\c students;

CREATE TABLE student (
  ID VARCHAR PRIMARY KEY ,
  name VARCHAR,
  class VARCHAR,
  age INTEGER,
  sex VARCHAR
);

INSERT INTO student
  VALUES ('1','Dhivya','10th standard a sec',20, 'F');