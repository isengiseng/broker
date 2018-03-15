'use strict';
var util = require('util');

module.exports = function (Connection) {
  var app = require('../../server/server');
  Connection.loginuser = function (req, cb) {
    console.log(JSON.stringify(req))
    Connection.find({
      where: {
        KODEH2H: req.kodeh2h,
        USERNAME: req.username,
        PASSWORD: req.password
      }
    }, (err, res) => {
      if (util.isNullOrUndefined(res[0])) {
        var data = {
          name: "error",
          status: "404",
          message: "You dont have permission to access this service"
        }
        cb(data)

      } else {
        var data = {
          status: "200",
          message: "Koneksi OK"
        }

        cb(null, data);
      }
    })
  }

  Connection.remoteMethod(
    'loginuser', {
        accepts: [
            {
          arg: 'cek komunikasi',
          type: 'Object',
          http: { source: 'body' }
        }
      ],
      http: {
        path: '/auth',
        verb: 'post',

      },
      returns: {
        arg: 'data',
        type: 'object'
      }
    }
  )

};
