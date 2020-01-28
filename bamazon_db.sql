CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT NOT NULL AUTO_INCREMENT,
product_name VARCHAR(100),
department_name VARCHAR(100),
price INT NOT NULL,
stock_quantity INT,
PRIMARY KEY (item_id)
);

USE bamazon_db;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Samsung Galaxy Case", "Tech", 13.95, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bose Noise Cancelling Headphones", "Tech", 125.67, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sony Quad Drone", "Tech", 345.99, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lavazza Espresso Press", "Kitchen", 38.24, 17);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gianni's Pasta Cutter", "Kitchen", 89.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cedar Wood Cutting Boards", "Kitchen", 41.86, 7);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Opal Moon Necklace", "Jewelry", 8.99, 21);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stainless Gold Cuff Earrings", "Jewelry", 12.89, 13);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pearl White Gold Ring", "Jewelry", 9.19, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Infinity Silver Bracelet", "Jewelry", 14.12, 12);