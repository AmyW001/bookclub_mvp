DROP TABLE IF EXISTS admins;
CREATE TABLE admins (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) not null, 
    password VARCHAR(255) not null, 
    clubname VARCHAR(255), 
    PRIMARY KEY (id))
);
INSERT INTO admins (name, password, clubname)
    VALUES ('Amy', 'testing', Test Club), ('Ira', 'password', Second Club));
