var connection = require('./connection');
var orm = {
    all: function(tableIpnut, cb){
        connection.query('SELECT * FROM ' + tableIpnut + function(err, result){
            if(err) throw (err);
            cb(result)
        });
    }
}
module.exports = orm;