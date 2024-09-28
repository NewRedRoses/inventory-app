#! /usr/bin/env node
const { Client } = require("pg");
require("dotenv").config();
const createBookTableQuery = `
CREATE TABLE IF NOT EXISTS books(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author_first_name TEXT,
    author_last_name TEXT,
    title TEXT,
    year_published INT,
    genre_id INT,
    edition TEXT,
    publisher TEXT
)`;
const createGenreTable = `
CREATE TABLE IF NOT EXISTS genres  (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        name TEXT UNIQUE)`;

const populateGenre = `
INSERT INTO genres (name) values ('science-fiction'), 
('adventure'), 
('unknown'), 
('comedy'),
( 'philosophy'),
('horror'),
('psychology')`;

const populateBooks = `INSERT INTO books (title,genre_id, publisher, year_published, edition, author_first_name, author_last_name)  
VALUES  ('Dune', 1, 'Chilton', 1963, '1st', 'Frank', 'Herbert'),
                  ('Capital Realism', 4, 'Zero book', 2009, '1st', 'Mark', 'Fisher'),
                  ('Uzumaki', 5, 'Viz Media', 2013, '1st', 'Junji', 'Ito'),
                  ('The Stranger', 4, 'Penguin classics', 1942, '1st', 'Albert', 'Camus'),
                  ('The Paradox of Choice: Why More Is Less', 6, 'Ecco press', 2004, '1st', 'Barry', 'Schwartz')`;

async function main() {
  const { DB_HOST, DB_USER, DB, DB_PWD, DB_PORT } = process.env;
  console.log("Seeding....");
  const client = new Client({
    user: DB_USER,
    password: DB_PWD,
    host: DB_HOST,
    port: DB_PORT,
    database: DB,
  });
  await client.connect();
  await client.query(createBookTableQuery);
  await client.query(createGenreTable);
  await client.query(populateGenre);
  await client.query(populateBooks);
  await client.end();
  console.log("Done!");
}
main();
