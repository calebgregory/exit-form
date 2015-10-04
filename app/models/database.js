var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/interviews';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query(
  'CREATE TABLE IF NOT EXISTS submissions('+
  '"id" SERIAL PRIMARY KEY, '+
  '"firstName" TEXT NOT NULL, '+
  '"lastName" TEXT NOT NULL, '+
  '"fullName" TEXT NOT NULL, '+
  '"email" TEXT NOT NULL, '+
  '"satisfaction" INT NOT NULL, '+
  '"explanation" TEXT);'
);
query.on('end', function() { client.end(); });
