"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function(PK_POST) {
  PK_POST.inputdata = function(req, cb) {
    var encMd5 = md5(req.username.trim() + req.password.trim() + moment());
    var pwMd5 = md5(req.password.trim());
    PK_POST.create(
      {
        KODEH2H: encMd5,
        USERNAME: req.username.trim(),
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
        DATE_MODIFIED: moment(),
        NO: req.no
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
            statusCode: "404",
            message: "You dont have permission to access this service"
          };

          cb(data);
        }
      }
    );
  };

  PK_POST.remoteMethod("inputdata", {
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

  PK_POST.getall = function (cb) {


    PK_POST.find({}, function (err, data) {
      cb(null, data)
      
    })
  };


  PK_POST.remoteMethod(
    'getall', {
      http: {
        path: '/all',
        verb: 'get'
      },
      returns: {
        arg: 'data',
        type: 'object'
      }
    }
  )
};
