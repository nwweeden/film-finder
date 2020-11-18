require('dotenv');

const SECRET_KEY = process.env.SECRET_KEY || 'development-secret-key';

const PORT = +process.env.PORT || 3001;

const BCRYPT_WORK_FACTOR = 10;

const DB_URI =

  process.env.NODE_ENV === 'test'
    ? 'postgresql:///film_finder_test'
    : 'postgresql:///film_finder';

module.exports = {
  BCRYPT_WORK_FACTOR,
  SECRET_KEY,
  PORT,
  DB_URI
};
