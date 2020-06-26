CREATE DATABASE HIMYM_db;

USE HIMYM_db;

CREATE TABLE show_info (
  id INT AUTO_INCREMENT NOT NULL,
  cast_member VARCHAR(30) NOT NULL,
  coolness INT NOT NULL,
  attitude VARCHAR(50) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO show_info (cast_member, coolness, attitude)
VALUES ("Robin Scherbatsky", 10, "Confident");

INSERT INTO show_info (cast_member, coolness, attitude)
VALUES ("Barney Stinson", 6, "Arrogant");

INSERT INTO show_info (cast_member, coolness, attitude)
VALUES ("Marshall Eriksen", 8, "Ambitious");

INSERT INTO show_info (cast_member, coolness, attitude)
VALUES ("Lilly Aldrin", 9, "Adventurous");

INSERT INTO show_info (cast_member, coolness, attitude)
VALUES ("Ted Mosby", 7, "Optimistic");
