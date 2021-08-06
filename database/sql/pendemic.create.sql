CREATE DATABASE IF NOT EXISTS pendemic;
USE pendemic;
CREATE TABLE IF NOT EXISTS `writer` (
  `writer_id` INT PRIMARY KEY AUTO_INCREMENT,
  `firebase_id` VARCHAR(255) UNIQUE NOT NULL,
  `username` VARCHAR(255) UNIQUE NULL,
  `name` VARCHAR(255) NULL
);
CREATE TABLE IF NOT EXISTS `story` (
  `writer_id` INT NOT NULL,
  `story_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT
);
CREATE TABLE IF NOT EXISTS `plot` (
  `story_id` INT NOT NULL,
  `plot_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `order` INT NOT NULL
);
CREATE TABLE IF NOT EXISTS `plotpoint` (
  `story_id` INT NOT NULL,
  `plot_id` INT NOT NULL,
  `plotpoint_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `order` INT NOT NULL
);
CREATE TABLE IF NOT EXISTS `character` (
  `story_id` INT NOT NULL,
  `character_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `order` INT NOT NULL
);
CREATE TABLE IF NOT EXISTS `characterrelationship` (
  `character_id_1` INT NOT NULL,
  `character_id_2` INT NOT NULL,
  `relationship_1_to_2` VARCHAR(255) NOT NULL,
  `relationship_2_to_1` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`character_id_1`, `character_id_2`)
);
CREATE TABLE IF NOT EXISTS `setting` (
  `story_id` INT NOT NULL,
  `setting_id` INT PRIMARY KEY AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT,
  `order` INT NOT NULL
);
CREATE TABLE IF NOT EXISTS `chapter` (
  `story_id` INT NOT NULL,
  `chapter_id` INT PRIMARY KEY AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `content_url` TEXT NOT NULL,
  `order` INT NOT NULL
);
CREATE TABLE IF NOT EXISTS `plotpointchapter` (
  `plotpoint_id` INT NOT NULL,
  `chapter_id` INT NOT NULL,
  PRIMARY KEY (`plotpoint_id`, `chapter_id`)
);
CREATE TABLE IF NOT EXISTS `plotpointcharacter` (
  `plotpoint_id` INT NOT NULL,
  `character_id` INT NOT NULL,
  PRIMARY KEY (`plotpoint_id`, `character_id`)
);
CREATE TABLE IF NOT EXISTS `plotpointsetting` (
  `plotpoint_id` INT NOT NULL,
  `setting_id` INT NOT NULL,
  PRIMARY KEY (`plotpoint_id`, `setting_id`)
);
ALTER TABLE
  `story`
ADD
  FOREIGN KEY (`writer_id`) REFERENCES `writer` (`writer_id`);
ALTER TABLE
  `plot`
ADD
  FOREIGN KEY (`story_id`) REFERENCES `story` (`story_id`);
ALTER TABLE
  `plotpoint`
ADD
  FOREIGN KEY (`story_id`) REFERENCES `story` (`story_id`);
ALTER TABLE
  `plotpoint`
ADD
  FOREIGN KEY (`plot_id`) REFERENCES `plot` (`plot_id`);
ALTER TABLE
  `character`
ADD
  FOREIGN KEY (`story_id`) REFERENCES `story` (`story_id`);
ALTER TABLE
  `characterrelationship`
ADD
  FOREIGN KEY (`character_id_1`) REFERENCES `character` (`character_id`);
ALTER TABLE
  `characterrelationship`
ADD
  FOREIGN KEY (`character_id_2`) REFERENCES `character` (`character_id`);
ALTER TABLE
  `setting`
ADD
  FOREIGN KEY (`story_id`) REFERENCES `story` (`story_id`);
ALTER TABLE
  `chapter`
ADD
  FOREIGN KEY (`story_id`) REFERENCES `story` (`story_id`);
ALTER TABLE
  `plotpointchapter`
ADD
  FOREIGN KEY (`plotpoint_id`) REFERENCES `plotpoint` (`plotpoint_id`);
ALTER TABLE
  `plotpointchapter`
ADD
  FOREIGN KEY (`chapter_id`) REFERENCES `chapter` (`chapter_id`);
ALTER TABLE
  `plotpointcharacter`
ADD
  FOREIGN KEY (`plotpoint_id`) REFERENCES `plotpoint` (`plotpoint_id`);
ALTER TABLE
  `plotpointcharacter`
ADD
  FOREIGN KEY (`character_id`) REFERENCES `character` (`character_id`);
ALTER TABLE
  `plotpointsetting`
ADD
  FOREIGN KEY (`plotpoint_id`) REFERENCES `plotpoint` (`plotpoint_id`);
ALTER TABLE
  `plotpointsetting`
ADD
  FOREIGN KEY (`setting_id`) REFERENCES `setting` (`setting_id`);
ALTER TABLE
  `plot`
ADD
  INDEX `plot_index_0` (`story_id`, `order`);
ALTER TABLE
  `plotpoint`
ADD
  INDEX `plotpoint_index_0` (`story_id`, `order`);
ALTER TABLE
  `character`
ADD
  INDEX `character_index_0` (`story_id`, `order`);