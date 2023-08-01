-- Active: 1690551427412@@127.0.0.1@3306
CREATE TABLE users (
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    name TEXT NOT NULL,
	email TEXT UNIQUE NOT NULL,
	password TEXT NOT NULL,
	created_at TEXT DEFAULT (DATETIME()) NOT NULL
);
drop TABLE users;
INSERT INTO users (id, name, email, password)
VALUES
	('f001', 'Fulano', 'fulano@email.com', 'fulano123'),
	('f002', 'Beltrana', 'beltrana@email.com', 'beltrana00');

SELECT * FROM users;
