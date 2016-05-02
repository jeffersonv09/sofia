/**
 * EtiquetaController
 *
 * @description :: Server-side logic for managing etiquetas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	listado: function(res,req){
		Etiqueta.find({etiquetaHabilitarLectura:1}).populateAll().exec(function (err, etiqueta){
			if(err) console.log(err);
		//res.json(etiqueta);
		//return res.jsonp({prueba: 'jeffersonv'});
		console.log(etiqueta.etiquetaCategoria);
		});
	},
	listado2: function(res,req){
		Etiqueta.find({etiquetaHabilitarLectura:1},function (err, etiqueta){
			if(err) console.log(err);
		//res.json(etiqueta);
		//return res.jsonp({prueba: 'jeffersonv'});
		console.log(etiqueta);
		});
	}
};

