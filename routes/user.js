/* GET users listing. */
var mysql = require('mysql');

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root'
});

db.query('USE test');

exports.list = function(req, res){
  db.query('SELECT * FROM users', function(err, rows){
  	//console.log(rows);
    res.render('users', {
    	title: 'Express',
    	users : rows
    });
  });
};
