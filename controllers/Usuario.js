'use strict'

const CRUD = {
	cadastro_pasta:function(req, res) {
        let nome_pasta = req.body.nome_pasta?req.body.nome_pasta:'';

    	let mkdirp = require('mkdirp');

		mkdirp('./public/cursos/'+nome_pasta, function (err) {
		    if (err) //console.error(err) 
		    	res.status(300).json({msg:err }); 
		    else{
		    	let fs = require("fs");
		    	fs.writeFile('./public/cursos/'+nome_pasta+'/input.txt', 'Simply Easy Learning!',  function(err) {
				   if (err) {
				       return console.error(err);
				   }
				   fs.readFile('./public/cursos/'+nome_pasta+'/input.txt', function (err, data) {
				      if (err) {
				         return console.error(err);
				      }
				      console.log("Asynchronous read: " + data.toString());
				   });
				});
		    	res.status(200).json({msg:'Pasta criada & arquivo!' }); 
		    } 
		});	
        
    },
};
module.exports = exports = CRUD;