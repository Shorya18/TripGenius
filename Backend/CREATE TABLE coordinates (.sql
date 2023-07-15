/*list of all the commands required to create the database*/
/*five tables are used*/

CREATE TABLE coordinates (
  id VARCHAR(255) PRIMARY KEY,
  lon FLOAT,
  lat FLOAT
);

CREATE TABLE images (
  id VARCHAR(255) PRIMARY KEY,
  url VARCHAR(255)
);

CREATE TABLE locations (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  user VARCHAR(255)
);

CREATE TABLE user (
  id VARCHAR(255) PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255)
);

CREATE TABLE ratings (
  rating VARCHAR(255),
  username VARCHAR(255),
  ratingDesc TEXT,
  locID INT
);

/*ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysql@1234';*/