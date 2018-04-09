"use strict";
var util = require("util");
var md5 = require("md5");
var moment = require("moment");
module.exports = function(cek_komunikasi) {
  cek_komunikasi.loginuser = function(req, cb) {
    console.log(req);
    var app = require("../../server/server");
    var AUTH_API = app.models.AUTH_API;

    var pwMd5 = md5(req.password.trim());

    AUTH_API.findOne(
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
        console.log(err);
        if (util.isNullOrUndefined(res)) {
          var Result = {
            statusCode: "404",
            message: "You dont have permission to access this service"
          };

          cb(Result);
        } else {
          AUTH_API.updateAll(
            {
              and: [
                { KODEH2H: req.kodeh2h.trim() },
                { USERNAME: req.username.trim() },
                { PASSWORD: pwMd5 }
              ]
            },
            {
              LAST_ACCESS: moment(),
              DATE_CREATED: moment(),
              DATE_MODIFIED: moment()
            },
            (error, i) => {
              console.log(i);
            }
          );

          var Result = {
            status: "200",
            message: "Koneksi OK"
          };

          cb(null, Result);
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
      arg: "Result",
      type: "object"
    }
  });
};
