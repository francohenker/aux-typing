CREATE TABLE IF NOT EXISTS users (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  nickname VARCHAR,
  password VARCHAR
);

CREATE TABLE IF NOT EXISTS typing_phrase (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  phrase VARCHAR,
  created_by INTEGER
);

CREATE TABLE IF NOT EXISTS users_to_phrase (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  completed BOOLEAN,
  user INTEGER,
  phrase INTEGER,
  wpm INTEGER,
  FOREIGN KEY (user) REFERENCES users (id),
  FOREIGN KEY (phrase) REFERENCES typing_phrase (id)
);

CREATE TABLE IF NOT EXISTS users_typing_phrase (
  user_id INTEGER,
  phrase_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users (id),
  FOREIGN KEY (phrase_id) REFERENCES typing_phrase (id)
);
