var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/interviews';

exports.submit = (data, cb) => {

  data['fullName'] = `${data.firstName} ${data.lastName}`;

  pg.connect(connectionString, (err, client, done) => {
    client.query(
      'INSERT INTO submissions("firstName", "lastName", "fullName", "email", "satisfaction", "explanation") '+
      'VALUES ($1, $2, $3, $4, $5, $6)',
      [data.firstName, data.lastName, data.fullName, data.email, data.satisfaction, data.explanation || null]
    );

    var output;
    var query = client.query(
      'SELECT * FROM submissions ORDER BY id DESC LIMIT 1;'
    );
    query.on('row', row => {
      output = row;
    });

    query.on('end', () => {
      client.end();
      cb(null, output);
    })

  });
}
