/* GET users listing. */
require( '../config.db.js' )
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
