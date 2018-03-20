"use strict";
var util = require("util");
var md5 = require("md5");
var moment = require("moment");
module.exports = function(Authapi) {
  Authapi.getdata = function(req, cb) {
    console.log(req);
    var app = require("../../server/server");
    var AUTH_SERVER = app.models.AUTH_SERVER;
    var PK_POST = app.models.PK_POST;
    var pwMd5 = md5(req.password.trim());
    var authData;

    AUTH_SERVER.findOne(
      {
        where: {
          and: [{ USERNAME: req.username.trim() }, { PASSWORD: pwMd5 }]
        }
      },
      (err, res) => {
        console.log("sampesini" + err);
        console.log(res);
        if (util.isNullOrUndefined(res)) {
          var data = {
            statusCode: "404",
            message: "You dont have permission to access this service"
          };

          cb(data);
        } else {
          Authapi.find((error, data) => {
            console.log(error);
            console.log(data);
            // var data = {
            //   status: "200",
            //   message: "Koneksi OK",
            //   data: PK_POST
            // };

            authData = data;
            // cb(null, data);

            PK_POST.find((error, data) => {
              console.log(error);
              console.log(data);
              var ret = {
                status: "200",
                message: "Koneksi OK",
                data: [{ AUTH_API: authData }, { PK_POST: data }]
              };
              cb(null, ret);
            });
          });
        }
      }
    );
  };
  Authapi.remoteMethod("getdata", {
    accepts: [
      {
        arg: "cekkomunikasi",
        type: "Object",
        http: { source: "body" }
      }
    ],
    http: {
      path: "/getall",
      verb: "post"
    },
    returns: {
      arg: "data",
      type: "object"
    }
  });
};
