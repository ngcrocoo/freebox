
--\c _name database_ verbindet zur datenbank in sqlshell
IF NOT EXISTS(
	CREATE TABLE standort(
	id BIGSERIAL NOT NULL PRIMARY KEY,
	koordinaten VARCHAR(100),
	strasse VARCHAR(50) NOT NULL,
	nummer INT NOT NULL,
	plz INT NOT NULL,
	stadt VARCHAR(50) NOT NULL,
	land VARCHAR(50) NOT NULL)
);

-- INSERT INTO standort (koordinaten, strasse, nummer, plz, stadt, land)
-- VALUES('test', 'test', '1234', '1234', 'test', 'test');

CREATE TABLE person (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	name VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL,
	passwort VARCHAR(50) NOT NULL
);

-- INSERT INTO person (name, email, passwort)
-- VALUES ('test', 'test', 'test');


CREATE TABLE box (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	standort, 
	inhalt VARCHAR(500),
	person,
);

CREATE TABLE box (
	id BIGSERIAL NOT NULL PRIMARY KEY,
	inhalt VARCHAR(500),
);

-- (SELECT koordinaten INTO box FROM standort)

-- (SELECT name INTO box FROM person)

