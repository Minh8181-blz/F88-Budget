var express = require('express');
var router = express.Router();
var db = require('../models/index');
var async = require('async');
var formidable = require('formidable');
//var xlsx = require('xlsx');
var Excel = require('exceljs');
var db = require('../models/index');
var TestExcel = db.TestExcel;

router.post('/upload', function(req, res){
	var form = new formidable.IncomingForm();
    form.uploadDir = __dirname +'/../public/uploads';
    var url = '/uploads/';
      
    form.on ('fileBegin', function(name, file){
    	var filename = 'testFile';
        file.path = form.uploadDir + "/" + filename;   
    });

    form.parse(req, function(err, fields, files) {
    });

    form.on ('end', function(){
        var workbook = new Excel.Workbook();
        workbook.xlsx.readFile(__dirname +'/../public/uploads/testFile')
        .then(function(){
            
            var worksheet = workbook.getWorksheet('AllDepartments');    
            var rows = worksheet._rows;

            async.each(rows, function(row, eachCallback){
                if(Number.isInteger(row.getCell('A').value)){
                    TestExcel.create({
                        cashFlowReport: (row.getCell('B').value) ? row.getCell('B').value : "",
                        feeType: (row.getCell('C').value) ? row.getCell('C').value : "",
                        feeTypeCode: row.getCell('H').value,
                        contractValue: row.getCell('K').value.result
                    })
                }
                eachCallback();
            }, function(err){
                if(err)
                    res.status(400).json(err);
                else
                    res.status(200).json('insert ok');
            })
        })
        .catch(function(err){
            return res.status(400).json(err);
        })
    });
})

module.exports = router;