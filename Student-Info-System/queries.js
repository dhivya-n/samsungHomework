var promise = require('bluebird');

var options = {
  // Initialization Options
  promiseLib: promise
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/students';
var db = pgp(connectionString);

// add query functions

module.exports = {
  getAllStudents: getAllStudents,
 // insertStudent: insertStudent
  
};

function getAllStudents(req, res, next) {
    db.any('select * from pups')
      .then(function (data) {
        res.status(200)
          .json({
            status: 'success',
            data: data,
            message: 'Retrieved ALL Students'
          });
      })
      .catch(function (err) {
        return next(err);
      });
  }
