/**
 * EtiquetaCategoriaController
 *
 * @description :: Server-side logic for managing etiquetacategorias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nueva:function(req,res){
		res.view();
	},
	crear: function(req,res,next){
		EtiquetaCategoria.create(req.params.all(), function etiquetaCategoriaCreada(err, etiquetaCategoria){
			if(err) next(err);
			res.json(etiquetaCategoria);
		});
	},
	listado: function(req, res, next){
		EtiquetaCategoria.find({etiquetaCategoriaHabilitarLectura:1}).populateAll().exec(function (err, etiquetaCategoria){
          if(err)
          	return next();
          console.log(etiquetaCategoria);
      	  res.view({
      	  	etiquetaCategoria:etiquetaCategoria
      	  });
      	})
	}
};

