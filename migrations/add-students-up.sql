DROP TABLE IF EXISTS subject;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS department;

DROP SEQUENCE IF EXISTS department_ids;
DROP SEQUENCE IF EXISTS user_ids;
DROP SEQUENCE IF EXISTS subject_ids;

CREATE SEQUENCE department_ids;
CREATE TABLE department (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL('department_ids'),
    label character varying(128) not null,
    instructor character varying(128) not null
);

CREATE SEQUENCE user_ids;
CREATE TABLE users (
    id INTEGER PRIMARY KEY DEFAULT NEXTVAL('user_ids'),
    name character varying(128) not null,
    birthday TIMESTAMP with time zone NOT NULL DEFAULT NOW(),
    department bigint not null REFERENCES department (id)
);

CREATE SEQUENCE subject_ids;
CREATE TABLE subject (
    id INTEGER DEFAULT NEXTVAL('subject_ids'),
    user_id	bigint not null REFERENCES users (id),
    label character varying(128) not null
);

INSERT INTO department(label, instructor) VALUES ('КПРИ', 'Иванов И.И.');
INSERT INTO department(label, instructor) VALUES ('РТРО', 'Петров И.И.');

INSERT INTO users(name, birthday, department) VALUES ('Вася', '2001-07-07 06:08:47', 1);
INSERT INTO users(name, birthday, department) VALUES ('Иван', '2006-07-07 06:08:47', 2);

INSERT INTO subject(user_id, label) VALUES (1, 'РОНТ');
INSERT INTO subject(user_id, label) VALUES (1, 'НГТР');

INSERT INTO subject(user_id, label) VALUES (2, 'ЩРПТ');
INSERT INTO subject(user_id, label) VALUES (2, 'НГРЕ');
