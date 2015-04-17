var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/pusheen';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE orders (id SERIAL PRIMARY KEY, name VARCHAR(40) not null, email VARCHAR(40) not null,phone VARCHAR(20) not null,address VARCHAR(100) not null,paid BOOLEAN)');
query.on('end', function() { client.end(); });