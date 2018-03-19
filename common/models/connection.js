"use strict";
var util = require("util");
var md5 = require("md5");
module.exports = function(cek_komunikasi) {
  cek_komunikasi.loginuser = function(req, cb) {

    var app = require("../../server/server");
    var AUTH_API = app.models.AUTH_API;

    var pwMd5 = md5(req.password.trim());
    
    AUTH_API.find(
      {
        where: {
          and: [
            { KODEH2H: req.kodeh2h.trim() },
            { USERNAME: req.username.trim() },
            { PASSWORD: pwMd5 }
          ]
        }
      },
      (err, res) => {
        if (util.isNullOrUndefined(res[0])) {
          
          var data = {
            statusCode: "404",
            message: "You dont have permission to access this service"
          };
          
          cb(data);
        } else {
          var data = {
            status: "200",
            message: "Koneksi OK"
          };

          cb(null, data);
        }
      }
    );
  };

  cek_komunikasi.remoteMethod("loginuser", {
    accepts: [
      {
        arg: "cekkomunikasi",
        type: "Object",
        http: { source: "body" }
      }
    ],
    http: {
      path: "/auth",
      verb: "post"
    },
    returns: {
      arg: "data",
      type: "object"
    }
  });
  
};
