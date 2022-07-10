var mysql = require('mysql');
 
var con = mysql.createConnection({
    host: 'localhost',
    user: 'username',
    password: '',
});

con.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });
  