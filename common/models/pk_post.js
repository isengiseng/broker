"use strict";
var util = require("util");
var moment = require("moment");
var md5 = require("md5");
module.exports = function(PK_POST) {
  PK_POST.inputdata = function(req, cb) {
    var app = require("../../server/server");
    var AUTH_API = app.models.AUTH_API;
    console.log(req);
    var pwMd5 = md5(req.password.trim());

    var filter = {
      and: [
        { KODEH2H: req.kodeh2h.trim() },
        { USERNAME: req.username.trim() },
        { PASSWORD: pwMd5 }
      ]
    };

    var filterWhere = {
      where: {
        and: [
          { KODEH2H: req.kodeh2h.trim() },
          { USERNAME: req.username.trim() },
          { PASSWORD: pwMd5 }
        ]
      }
    };
    var filterWherePost = {
      where: {
        and: [{ PK: req.pk }, { NOREK: req.norek }]
      }
    };

    AUTH_API.findOne(filterWhere, (err, res) => {
      console.log(res);
      if (util.isNullOrUndefined(res)) {
        var data = {
          statusCode: "404",
          message: "You dont have permission to access this service"
        };

        cb(data);
      } else {
        PK_POST.findOne(filterWherePost, (err, res) => {
          if (res != null) {
            console.log("here")
            PK_POST.updateAll({ and: [{ PK: req.pk }, { NOREK: req.norek }]},
              {
                KODEH2H: req.kodeh2h,
                USERNAME: req.username.trim(),
                PASSWORD: pwMd5,
                CAB: req.cab,
                NAMA: req.nama,
                LAHIR: req.lahir,
                BUKA: req.buka,
                TEMPO: req.tempo,
                PLAN: req.plan,
                AMOUNT: Number(req.amount),
                ID_NO: req.id,
                KTP: req.ktp,
                RATE: Number(req.rate),
                SEX: req.sex,
                RATE_ASURANSI: req.rate_asuransi,
                ASURANSI: req.asuransi,
                DATE_CREATED: moment(),
                DATE_MODIFIED: moment()
              },
              (err, res) => {
                if (util.isNullOrUndefined(err)) {
                  var Result = {
                    status: "200",
                    message: "Data sudah di input"
                  };

                  cb(null, Result);
                } else {
                  console.log(err);
                  var Result = {
                    statusCode: "404",
                    message: "You dont have permission to access this service"
                  };

                  cb(Result);
                }
              }
            );
          } else {
            console.log("here2"+ req.pk)
            PK_POST.create(
              {
                KODEH2H: req.kodeh2h,
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
                AMOUNT: Number(req.amount),
                ID_NO: req.id,
                KTP: req.ktp,
                RATE: Number(req.rate),
                SEX: req.sex,
                RATE_ASURANSI: req.rate_asuransi,
                ASURANSI: req.asuransi,
                DATE_CREATED: moment(),
                DATE_MODIFIED: moment()
              },
              (err, res) => {
                if (util.isNullOrUndefined(err)) {
                  var Result = {
                    status: "200",
                    message: "Data sudah di input"
                  };

                  cb(null, Result);
                } else {
                  console.log(err);
                  var Result = {
                    statusCode: "404",
                    message: "You dont have permission to access this service"
                  };

                  cb(Result);
                }
              }
            );
          }
        });
      }
    });
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
      arg: "Result",
      type: "object"
    }
  });

  PK_POST.getall = function(cb) {
    PK_POST.find({}, function(err, data) {
      cb(null, data);
    });
  };

  PK_POST.remoteMethod("getall", {
    http: {
      path: "/all",
      verb: "get"
    },
    returns: {
      arg: "data",
      type: "object"
    }
  });
};
