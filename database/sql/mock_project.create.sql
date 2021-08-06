CREATE DATABASE IF NOT EXISTS mock_project;
USE mock_project;
SET
  FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS Scholarship;
DROP TABLE IF EXISTS Course;
DROP TABLE IF EXISTS University;
DROP TABLE IF EXISTS Country;
DROP TABLE IF EXISTS EducationLevel;
CREATE TABLE Country (
    country_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    country_name VARCHAR(255) NOT NULL,
    currency VARCHAR(3)
  );
CREATE TABLE University (
    university_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    university_name VARCHAR(255) NOT NULL,
    country_id INT NOT NULL,
    FOREIGN KEY (country_id) REFERENCES Country(country_id)
  );
CREATE TABLE EducationLevel (
    level_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    level_name VARCHAR(255) NOT NULL
  );
CREATE TABLE Course (
    course_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    course_name VARCHAR(255) NOT NULL,
    annual_tuition INT,
    university_id INT NOT NULL,
    level_id INT NOT NULL,
    FOREIGN KEY (level_id) REFERENCES EducationLevel(level_id)
  );
CREATE TABLE Scholarship (
    scholarship_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    scholarship_name VARCHAR(255),
    university_id INT NOT NULL,
    level_id INT NOT NULL,
    FOREIGN KEY (level_id) REFERENCES EducationLevel(level_id)
  );
INSERT INTO
  Country (country_name, currency)
VALUES
  ("United States of America", "USD"),
  ("United Arab Emirates", "AED"),
  ("India", "INR");
INSERT INTO
  EducationLevel (level_name)
VALUES
  ("Diploma"),
  ("Undergraduate"),
  ("Postgraduate");
INSERT INTO
  University(university_name, country_id)
VALUES
  -- America
  ("University 1 Lorem ipsum dolor sit amet", 1),
  ("University 2 Lorem ipsum", 1),
  ("University 3 Lorem ipsum", 1),
  ("University 4 Lorem ipsuem dolor sit", 1),
  -- Dubai
  ("University 5 Lorem", 2),
  ("University 6 Lorem ipsum dolor sit amet", 2),
  ("University 7 Lorem", 2),
  -- India
  ("University 8 Lorem ipsum dolor", 3),
  ("University 9 Lorem ipsum", 3),
  ("University 10 Lorem ipsum", 3);
INSERT INTO
  Course (
    course_name,
    annual_tuition,
    university_id,
    level_id
  )
VALUES
  -- America
  (
    "Course 1 1 Lorem ipsum dolor sit amet",
    20000,
    1,
    1
  ),
  (
    "Course 1 2 Lorem ipsum dolor sit amet, consectetur adipiscing",
    20000,
    1,
    1
  ),
  (
    "Course 1 3 Lorem ipsum dolor sit amet, consectetur adipiscing",
    40000,
    1,
    2
  ),
  (
    "Course 2 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    130000,
    2,
    1
  ),
  (
    "Course 2 5 Lorem ipsum dolor sit amet, consectetur adipiscing",
    360000,
    2,
    2
  ),
  (
    "Course 2 6 Lorem ipsum dolor sit amet",
    16000,
    2,
    1
  ),
  (
    "Course 3 7 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    18000,
    3,
    1
  ),
  (
    "Course 3 8 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    44000,
    3,
    2
  ),
  (
    "Course 3 9 Lorem ipsum dolor sit amet, consectetur adipiscing",
    45000,
    3,
    2
  ),
  (
    "Course 4 10 Lorem ipsum dolor sit amet",
    50000,
    4,
    2
  ),
  (
    "Course 4 11 Lorem ipsum dolor sit amet",
    27000,
    4,
    1
  ),
  (
    "Course 4 12 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    24000,
    4,
    1
  ),
  -- Dubai
  (
    "Course 5 13 Lorem ipsum dolor sit amet, consectetur adipiscing",
    120000,
    5,
    2
  ),
  (
    "Course 5 14 Lorem ipsum dolor sit amet, consectetur adipiscing",
    870000,
    5,
    1
  ),
  (
    "Course 5 15 Lorem ipsum dolor sit amet",
    110000,
    5,
    2
  ),
  (
    "Course 6 16 Lorem ipsum dolor sit amet",
    115000,
    6,
    2
  ),
  (
    "Course 6 17 Lorem ipsum dolor sit amet, consectetur adipiscing",
    125000,
    6,
    2
  ),
  (
    "Course 6 18 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    110000,
    6,
    1
  ),
  (
    "Course 7 19 Lorem ipsum dolor sit amet",
    130000,
    7,
    2
  ),
  (
    "Course 7 20 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    90000,
    7,
    1
  ),
  (
    "Course 7 21 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    1140000,
    7,
    2
  ),
  -- India
  (
    "Course 8 22 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    250000,
    8,
    1
  ),
  (
    "Course 8 23 Lorem ipsum dolor sit amet",
    320000,
    8,
    1
  ),
  (
    "Course 8 24 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    500000,
    8,
    2
  ),
  (
    "Course 9 25 Lorem ipsum dolor sit amet, consectetur adipiscing",
    390000,
    9,
    1
  ),
  (
    "Course 9 26 Lorem ipsum dolor sit amet, consectetur adipiscing",
    375000,
    9,
    2
  ),
  (
    "Course 9 27 Lorem ipsum dolor sit amet",
    220000,
    9,
    1
  ),
  (
    "Course 10 28 Lorem ipsum dolor sit amet, consectetur adipiscing",
    425000,
    10,
    2
  ),
  (
    "Course 10 29 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    290000,
    10,
    1
  ),
  (
    "Course 10 30 Lorem ipsum dolor sit amet",
    340000,
    10,
    1
  );
INSERT INTO
  Scholarship (
    scholarship_name,
    university_id,
    level_id
  )
VALUES
  -- America
  ("Scholarship 1 1 Lorem ipsum", 1, 1),
  ("Scholarship 1 2 Lorem ipsum", 1, 2),
  (
    "Scholarship 1 3 Lorem ipsum dolor sit amet",
    1,
    2
  ),
  ("Scholarship 2 4 Lorem ipsum dolor", 2, 1),
  ("Scholarship 2 5 Lorem ipsum", 2, 1),
  ("Scholarship 2 6 Lorem ipsum", 2, 1),
  (
    "Scholarship 3 7 Lorem ipsum dolor sit amet",
    3,
    2
  ),
  ("Scholarship 3 8 Lorem ipsum dolor", 3, 2),
  (
    "Scholarship 3 9 Lorem ipsum dolor sit amet",
    3,
    1
  ),
  ("Scholarship 4 10 Lorem ipsum", 4, 2),
  ("Scholarship 4 11 Lorem ipsum", 4, 1),
  (
    "Scholarship 4 12 Lorem ipsum dolor sit amet",
    4,
    1
  ),
  -- Dubai
  (
    "Scholarship 5 13 Lorem ipsum dolor sit amet",
    5,
    2
  ),
  (
    "Scholarship 5 14 Lorem ipsum dolor sit amet",
    5,
    1
  ),
  ("Scholarship 5 15 Lorem ipsum", 5, 1),
  ("Scholarship 6 16", 6, 2),
  (
    "Scholarship 6 17 Lorem ipsum dolor sit amet",
    6,
    2
  ),
  ("Scholarship 6 18 Lorem ipsum", 6, 2),
  (
    "Scholarship 7 19 Lorem ipsum dolor sit amet",
    7,
    2
  ),
  ("Scholarship 7 20 Lorem ipsum dolor", 7, 1),
  ("Scholarship 7 21 Lorem ipsum dolor", 7, 2),
  -- India
  ("Scholarship 8 22 Lorem ipsum dolor", 8, 1),
  ("Scholarship 8 23 Lorem ipsum", 8, 1),
  ("Scholarship 8 24 Lorem ipsum", 8, 1),
  (
    "Scholarship 9 25 Lorem ipsum dolor sit amet",
    9,
    1
  ),
  ("Scholarship 9 26 Lorem ipsum dolor", 9, 2),
  ("Scholarship 9 27 Lorem ipsum dolor", 9, 1),
  (
    "Scholarship 10 28 Lorem ipsum dolor sit amet",
    10,
    2
  ),
  ("Scholarship 10 29 Lorem ipsum dolor", 10, 1),
  (
    "Scholarship 10 30 Lorem ipsum dolor sit amet",
    10,
    2
  );
SET
  FOREIGN_KEY_CHECKS = 1;
