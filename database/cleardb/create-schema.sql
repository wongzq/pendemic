CREATE TABLE `characterrelationship`(
    `character_id_1` INT NOT NULL,
    `character_id_2` INT NOT NULL,
    `relationship_1_to_2` VARCHAR(255) NOT NULL,
    `relationship_2_to_1` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `characterrelationship` ADD PRIMARY KEY `characterrelationship_character_id_1_character_id_2_primary`(`character_id_1`, `character_id_2`);
CREATE TABLE `plotpointchapter`(
    `plotpoint_id` INT NOT NULL,
    `chapter_id` INT NOT NULL
);
ALTER TABLE
    `plotpointchapter` ADD PRIMARY KEY `plotpointchapter_plotpoint_id_chapter_id_primary`(`plotpoint_id`, `chapter_id`);
CREATE TABLE `plotpointsetting`(
    `plotpoint_id` INT NOT NULL,
    `setting_id` INT NOT NULL
);
ALTER TABLE
    `plotpointsetting` ADD PRIMARY KEY `plotpointsetting_plotpoint_id_setting_id_primary`(`plotpoint_id`, `setting_id`);
CREATE TABLE `plotpointcharacter`(
    `plotpoint_id` INT NOT NULL,
    `character_id` INT NOT NULL
);
ALTER TABLE
    `plotpointcharacter` ADD PRIMARY KEY `plotpointcharacter_plotpoint_id_character_id_primary`(`plotpoint_id`, `character_id`);
CREATE TABLE `chapter`(
    `story_id` INT NOT NULL,
    `chapter_id` INT PRIMARY KEY AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `content_url` VARCHAR(255) NOT NULL,
    `order` INT NOT NULL
);
ALTER TABLE
    `chapter` ADD UNIQUE `chapter_story_id_order_unique`(`story_id`, `order`);
ALTER TABLE
    `chapter` ADD UNIQUE `chapter_content_url_unique`(`content_url`);
CREATE TABLE `setting`(
    `story_id` INT NOT NULL,
    `setting_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `order` INT NOT NULL
);
ALTER TABLE
    `setting` ADD UNIQUE `setting_story_id_name_unique`(`story_id`, `name`);
CREATE TABLE `character`(
    `story_id` INT NOT NULL,
    `character_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `order` INT NOT NULL
);
ALTER TABLE
    `character` ADD UNIQUE `character_story_id_order_unique`(`story_id`, `order`);
ALTER TABLE
    `character` ADD UNIQUE `character_story_id_name_unique`(`story_id`, `name`);
CREATE TABLE `plotpoint`(
    `story_id` INT NOT NULL,
    `plot_id` INT NOT NULL,
    `plotpoint_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `order` INT NOT NULL
);
ALTER TABLE
    `plotpoint` ADD UNIQUE `plotpoint_story_id_order_unique`(`story_id`, `order`);
ALTER TABLE
    `plotpoint` ADD UNIQUE `plotpoint_plot_id_name_unique`(`plot_id`, `name`);
CREATE TABLE `plot`(
    `story_id` INT NOT NULL,
    `plot_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,
    `order` INT NOT NULL
);
ALTER TABLE
    `plot` ADD UNIQUE `plot_story_id_order_unique`(`story_id`, `order`);
ALTER TABLE
    `plot` ADD UNIQUE `plot_story_id_name_unique`(`story_id`, `name`);
CREATE TABLE `story`(
    `writer_id` INT NOT NULL,
    `story_id` INT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NULL
);
ALTER TABLE
    `story` ADD UNIQUE `story_writer_id_name_unique`(`writer_id`, `name`);
CREATE TABLE `writer`(
    `writer_id` INT PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(255) NOT NULL,
    `name` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `writer` ADD UNIQUE `writer_username_unique`(`username`);
ALTER TABLE
    `story` ADD CONSTRAINT `story_writer_id_foreign` FOREIGN KEY(`writer_id`) REFERENCES `writer`(`writer_id`);
ALTER TABLE
    `chapter` ADD CONSTRAINT `chapter_story_id_foreign` FOREIGN KEY(`story_id`) REFERENCES `story`(`story_id`);
ALTER TABLE
    `plot` ADD CONSTRAINT `plot_story_id_foreign` FOREIGN KEY(`story_id`) REFERENCES `story`(`story_id`);
ALTER TABLE
    `setting` ADD CONSTRAINT `setting_story_id_foreign` FOREIGN KEY(`story_id`) REFERENCES `story`(`story_id`);
ALTER TABLE
    `character` ADD CONSTRAINT `character_story_id_foreign` FOREIGN KEY(`story_id`) REFERENCES `story`(`story_id`);
ALTER TABLE
    `plotpoint` ADD CONSTRAINT `plotpoint_story_id_foreign` FOREIGN KEY(`story_id`) REFERENCES `story`(`story_id`);
ALTER TABLE
    `plotpoint` ADD CONSTRAINT `plotpoint_plot_id_foreign` FOREIGN KEY(`plot_id`) REFERENCES `plot`(`plot_id`);
ALTER TABLE
    `plotpointcharacter` ADD CONSTRAINT `plotpointcharacter_plotpoint_id_foreign` FOREIGN KEY(`plotpoint_id`) REFERENCES `plotpoint`(`plotpoint_id`);
ALTER TABLE
    `plotpointchapter` ADD CONSTRAINT `plotpointchapter_plotpoint_id_foreign` FOREIGN KEY(`plotpoint_id`) REFERENCES `plotpoint`(`plotpoint_id`);
ALTER TABLE
    `plotpointsetting` ADD CONSTRAINT `plotpointsetting_plotpoint_id_foreign` FOREIGN KEY(`plotpoint_id`) REFERENCES `plotpoint`(`plotpoint_id`);
ALTER TABLE
    `characterrelationship` ADD CONSTRAINT `characterrelationship_character_id_1_foreign` FOREIGN KEY(`character_id_1`) REFERENCES `character`(`character_id`);
ALTER TABLE
    `characterrelationship` ADD CONSTRAINT `characterrelationship_character_id_2_foreign` FOREIGN KEY(`character_id_2`) REFERENCES `character`(`character_id`);
ALTER TABLE
    `plotpointcharacter` ADD CONSTRAINT `plotpointcharacter_character_id_foreign` FOREIGN KEY(`character_id`) REFERENCES `character`(`character_id`);
ALTER TABLE
    `plotpointsetting` ADD CONSTRAINT `plotpointsetting_setting_id_foreign` FOREIGN KEY(`setting_id`) REFERENCES `setting`(`setting_id`);
ALTER TABLE
    `plotpointchapter` ADD CONSTRAINT `plotpointchapter_chapter_id_foreign` FOREIGN KEY(`chapter_id`) REFERENCES `chapter`(`chapter_id`);