-- CREATE DATABASE MYSQLCHALLENGES;
DROP DATABASE IF EXISTS MYSQLCHALLENGES;
USE MYSQLCHALLENGES;

-- VERY EASY CHALLENGE
CREATE TABLE Cars (
id INT AUTO_INCREMENT PRIMARY KEY,
Make VARCHAR(20),
Model VARCHAR(20),
Model_Year INT
);

SELECT * FROM Cars;

INSERT INTO Cars (Make, Model, Model_Year)
VALUES('Chevrolet', 'Silverado', 2020),
('Tesla', 'Model X', 2018);


-- EASY CHALLENGE
CREATE TABLE Books (
id INT AUTO_INCREMENT PRIMARY KEY,
Title VARCHAR(20),
Publish_Date DATE,
Author VARCHAR(20)
);

SELECT * FROM Books;
INSERT INTO Books (Title, Publish_Date, Author)
Values('The Odyssey', '2006-11-30', ' Homer'),
('Green Eggs and Ham', '1960-03-01', 'Dan Brown');

DELETE FROM Books
WHERE Publish_Date = '1960-03-01';
SELECT COUNT(Title)
FROM Books;




-- MEDIUM CHALLENGE
CREATE TABLE Movies (
id INT AUTO_INCREMENT PRIMARY KEY,
Title VARCHAR (20),
Release_Date DATE,
Rating VARCHAR(10)
);


SELECT * FROM MOVIES ;
INSERT INTO Movies (Title, Release_Date, Rating)
Values ('BLACK PANTHER', '2018-02-16', "PG-13"),
('TOY STORY 4', '2019-03-21', "G"),
('COCO', '2017-11-22', "PG"),
('THE GODFATHER', '1972-03-24', "R"),
('TOY STORY 3', '2010-06-18', "G"),
('SCARFACE', '1983-12-09', "R"),
('BLOOD IN BLOOD OUT', '1993-04-30', "R"),
('BOYZ N THE HOOD', '1991-07-12', "R"),
('GOODFELLAS', '1990-11-21', "R"),
('WAIST DEEP', '2006-06-23', "R");

SELECT * FROM MOVIES 
WHERE Title LIKE '%s%' ORDER BY Release_Date DESC  ;


-- HARD CHALLENGE
CREATE TABLE MoviesCopy (
id INT AUTO_INCREMENT PRIMARY KEY,
Title VARCHAR (20),
Release_Date DATE,
Rating VARCHAR(10)
);

SELECT * FROM MOVIESCOPY ;
INSERT INTO MoviesCopy (Title, Release_Date, Rating)
Values ('BLACK PANTHER', '2018-02-16', "PG-13"),
('TOY STORY 4', '2019-03-21', "G"),
('COCO', '2017-11-22', "PG"),
('THE GODFATHER', '1972-03-24', "R"),
('TOY STORY 3', '2010-06-18', "G"),
('SCARFACE', '1983-12-09', "R"),
('BLOOD IN BLOOD OUT', '1993-04-30', "R"),
('BOYZ N THE HOOD', '1991-07-12', "R"),
('GOODFELLAS', '1990-11-21', "R"),
('WAIST DEEP', '2006-06-23', "R");

ALTER TABLE MoviesCopy
ADD DirectorName VARCHAR(30),
ADD DirectorLastName VARCHAR(30);

UPDATE MoviesCopy
-- SET DirectorName = 'Ryan' , DirectorLastName = 'Coogler'
-- WHERE id = 1 ;
-- SET DirectorName = 'Josh' , DirectorLastName = 'Cooley'
-- WHERE id = 2 ;
-- SET DirectorName = 'Adrian' , DirectorLastName = 'Molina'
-- WHERE id = 3 ;
-- SET DirectorName = 'Francis' , DirectorLastName = 'Ford Coppola'
-- WHERE id = 4 ;
-- SET DirectorName = 'Lee' , DirectorLastName = 'Unkrich'
-- WHERE id = 5 ;
-- SET DirectorName = 'Brian' , DirectorLastName = 'De Palma'
-- WHERE id = 6 ;
-- SET DirectorName = 'Taylor' , DirectorLastName = 'Hackford'
-- WHERE id = 7 ;
-- SET DirectorName = 'John' , DirectorLastName = 'Singleton'
-- WHERE id = 8 ;
-- SET DirectorName = 'Martin' , DirectorLastName = 'Scorsese'
-- WHERE id = 9 ;
SET DirectorName = 'Vondie' , DirectorLastName = 'Hall'
WHERE id = 10 ;

SELECT * ,
 CONCAT(DirectorName,' ', DirectorLastName) AS FullName
FROM MoviesCopy
ORDER BY DirectorLastName ASC;

SELECT DirectorLastName FROM MoviesCopy
WHERE DirectorLastName REGEXP '[abcdefghijklmnopq]$' 
AND DirectorLastName NOT REGEXP '[rstuvwxyz]$'
LIMIT 3;

SELECT * FROM MOVIESCOPY ;


-- VERY HARD CHALLENGE
CREATE TABLE carsCopy (
id INT AUTO_INCREMENT PRIMARY KEY,
Make VARCHAR(20),
Model VARCHAR(20),
Model_Year INT
);

SELECT * FROM carsCopy;

INSERT INTO carsCopy (Make, Model, Model_Year)
VALUES('Nissan', 'Altima', 1993),
('Toyota', 'Tacoma', 1998),
('Acura', 'RDX', 1995);

ALTER TABLE carsCopy ADD Price INT;
ALTER TABLE carsCopy ADD Color VARCHAR(20);

UPDATE carsCopy SET Price = 23748 WHERE Id = 6;

UPDATE carsCopy SET Price = 45736 WHERE Id = 7;

UPDATE carsCopy SET Price = 23173 WHERE Id = 8;

UPDATE carsCopy SET Color = "Black" WHERE Id = 6;

UPDATE carsCopy SET Color = "White" WHERE Id = 7;

UPDATE carsCopy SET Color = "Red" WHERE Id = 8;

SELECT *,
CONCAT (Make, ' ', Model)  AS FULLCARNAME
FROM carsCopy;


SELECT * FROM carsCopy;
SELECT COUNT(Model) as result
FROM carsCopy
GROUP BY Make;

