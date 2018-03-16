"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function(pk_post) {
  pk_post.inputdata = function(req, cb) {
    var encMd5 = md5(req.userid.trim() + req.password.trim() + moment());
    var pwMd5 = md5(req.password.trim());
    pk_post.create(
      {
        KODEH2H: encMd5,
        USER_ID: req.userid.trim(),
        PASSWORD: pwMd5,
        CAB: req.cab,
        PK: req.pk,
        NOREK: req.norek,
        NAMA: req.nama,
        LAHIR: req.lahir,
        BUKA: req.buka,
        TEMPO: req.tempo,
        PLAN: req.plan,
        AMOUNT: req.amount,
        ID: req.id,
        KTP: req.ktp,
        RATE: req.rate,
        SEX: req.sex,
        RATE_ASURANSI: req.rate_asuransi,
        DATE_CREATED: moment(),
        DATE_MODIFIED: moment()
      },
      (err, res) => {
        if (util.isNullOrUndefined(err)) {
          var data = {
            status: "200",
            message: "Data sudah di input"
          };

          cb(null, data);
        } else {
          var data = {
            name: "error",
            status: "404",
            message: "You dont have permission to access this service"
          };
          cb(data);
        }
      }
    );
  };

  pk_post.remoteMethod("inputdata", {
    accepts: [
      {
        arg: "inputdata",
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
