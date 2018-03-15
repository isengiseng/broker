'use strict';
var util = require('util');

module.exports = function (Inputdata) {
  Inputdata.InputData = function (req, cb) {
    console.log(JSON.stringify(req))
    Inputdata.upsert({
        "KODEH2H": req.KODEH2H,
        "USER_ID": req.USER_ID,
        "PASSWORD": req.PASSWORD,
        "CAB": req.CAB,
        "PK": req.PK,
        "NOREK": req.NOREK,
        "NAMA": req.NAMA,
        "LAHIR": req.LAHIR,
        "BUKA": req.BUKA,
        "TEMPO": req.TEMPO,
        "PLAN": req.PLAN,
        "AMOUNT": req.AMOUNT,
        "ID": req.ID,
        "KTP": req.KTP,
        "RATE": req.RATE,
        "SEX": req.SEX,
        "RATE_ASURANSI": req.RATE_ASURANSI,
      
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

  Inputdata.remoteMethod(
    'input', {
        accepts: [
            {
          arg: 'cek komunikasi',
          type: 'Object',
          http: { source: 'body' }
        }],
      http: {
        path: '/auth',
        verb: 'post'
      },
      returns: {
        arg: 'data',
        type: 'object'
      }
    }
  )

};
