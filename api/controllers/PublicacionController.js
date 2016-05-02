/**
 * PublicacionController
 *
 * @description :: Server-side logic for managing publicacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nueva:function(req,res){
		Area.find({areaHabilitarLectura:1},function (err, area){
			if(err)
				console.log("err"+err);
			Categoria.find({categoriaHabilitarLectura:1},function (err, categoria){
				if(err)
					console.log("err"+err);

				res.view({ area: area, categoria:categoria });
			});
		});
	},
	crear:function(req,res){

		var objPublicacion={
			publicacionTitulo: req.param("txtPublicacionTitulo"),
			publicacionContenido: req.param("txtPublicacionContenido"),
			publicacionDescripcion: req.param("txtPublicacionDescripcion"),
			publicacionDifusion: req.param("hfPublicacionDifusion"),
			publicacionTipo: req.param("hfPublicacionTipo"),
			idArea: req.param("selPublicacionArea"),
			idCategoria: req.param("selPublicacionCategoria"),
			autor: req.session.Usuario.id
		}
		Publicacion.create(objPublicacion).exec(function(err,publicacion){
			if(err){
					req.session.flash={
						err: err
					}
					
				return res.redirect('publicacion/nueva');
			}

			res.redirect('publicacion/mostrar/'+publicacion.id);

			

			req.file('filPublicacionAdjunto1').upload({
    			dirname: sails.config.appPath+'/assets/adjunto1'
		    },function (err, adjunto1) {
		      if (err)
		        console.log('err'+err);

		    var carpetaDestino='adjunto1';
		    var pathString= sails.config.appPath+'/assets/'+carpetaDestino+'/';

		      if (adjunto1.length > 0){
		        Publicacion.update(publicacion.id,{
		          publicacionAdjuntoUrl1: require('util').format('%s/%s/%s', sails.getBaseUrl(), carpetaDestino,adjunto1[0].fd.substring(pathString.length,adjunto1[0].fd.length)),
		          publicacionAdjuntoFd1: adjunto1[0].fd,
		          publicacionAdjuntoPath1: '/'+carpetaDestino+'/'+adjunto1[0].fd.substring(pathString.length,adjunto1[0].fd.length)
		        })
		        .exec(function (err){
		          if (err) console.log('err'+err);
		        });
		        console.log('archivo cargado');
		    	}
	      	});

	      	

	      	req.file('filPublicacionAdjunto2').upload({
	    		dirname: sails.config.appPath+'/assets/adjunto2'
		    },function (err, adjunto2) {
		      if (err)
		        console.log('err'+err);

		    var carpetaDestino='adjunto2';
		    var pathString= sails.config.appPath+'/assets/'+carpetaDestino+'/';

		      if (adjunto2.length > 0){
		        Publicacion.update(publicacion.id,{
		          publicacionAdjuntoUrl2: require('util').format('%s/%s/%s', sails.getBaseUrl(), carpetaDestino, adjunto2[0].fd.substring(pathString.length,adjunto2[0].fd.length)),
		          publicacionAdjuntoFd2: adjunto2[0].fd,
		          publicacionAdjuntoPath2: '/'+carpetaDestino+'/'+adjunto2[0].fd.substring(pathString.length,adjunto2[0].fd.length)
		        })
		        .exec(function (err){
		          if (err) console.log('err'+err);
		        });
		        console.log('archivo cargado');
		       }
	      	});

	      	var array= req.param("txtPublicacionEtiqueta").split(",");
			array.forEach(function(etiqueta) { 
				Etiqueta.findOrCreate({etiquetaNombre:etiqueta.trim()},{etiquetaNombre:etiqueta.trim(),etiquetaCategoria:1}).exec(function createFindCB(error, registroCreadoOEncontrado){
					console.log('Etiquetas'+registroCreadoOEncontrado.etiquetaNombre);
				});
			});
			
		});
	},
	mostrar: function(req, res, next){
		var publicacionId = req.param("id");
		Publicacion
		.findOneById(publicacionId)
		.populateAll()      
		.then(function (publicacion){
		    var comentarios = Comentario.find({
		        "publicacion": publicacionId
		    })
		    .populateAll()
		    .then(function (comentarios){
		        return comentarios;
		    });
		    return [publicacion, comentarios];
		})
		.spread(function (publicacion, comentarios){
		    publicacion = publicacion.toObject() // <- HERE IS THE CHANGE!
		    publicacion.comentarios = comentarios; // It will work now
		    res.view({
				publicacion: publicacion
			});
		}).catch(function (err){
		    if (err) return res.serverError(err);
		});
	},
	editar: function(req, res, next){
		Publicacion.findOne(req.param('id'),function publicacionEncontrada(err,publicacion){
			if(err)
				return next(err);
			if(!publicacion)
				return next();
			res.view({
				publicacion: publicacion
			});
		});
	},
	actualizar: function(req,res,next){
		var objPublicacion={
			publicacionTitulo: req.param("txtPublicacionTitulo"),
			publicacionContenido: req.param("txtPublicacionContenido").replace(new RegExp("\n","g"), "<br>"),
			publicacionDescripcion: req.param("txtPublicacionDescripcion"),	
			publicacionEtiqueta: req.param("txtPublicacionEtiqueta"),
			publicacionDifusion: req.param("hfPublicacionDifusion"),
			publicacionTipo: req.param("hfPublicacionTipo"),
			idArea: req.param("selPublicacionArea"),
			idCategoria: req.param("selPublicacionCategoria"),
			idUsuario: req.session.Usuario.id
		}
		Publicacion.update(req.param('id'), objPublicacion, function publicacionActualizada(err,publicacion){
			if (err){
					req.session.flash={
					err: err
				}
				return res.redirect('publicacion/editar?id='+req.param('id'));			
			}
			res.redirect('publicacion/mostrar?id='+req.param('id'));
		});
	},
	misaportes: function(req, res, next){
		Publicacion.find({autor:req.session.Usuario.id,publicacionHabilitarLectura:1}).sort('updatedAt DESC').exec(function publicacionEncontrada(err, publicacion){
			if (err){
				return next(err);
			}
			res.view({ publicacion: publicacion });
		});
	},
	listado: function(req, res, next){
		Publicacion.find({idArea:req.session.Area.id,idCategoria:req.param('id'),publicacionHabilitarLectura:1}).sort('updatedAt DESC').exec(function publicacionesEncontrada(err,publicacion){
			if(err){
				return next(err);
			}
			res.view({
				publicacion: publicacion
			});
		});
	},
	muro: function(req, res, next){
		Publicacion.find({publicacionHabilitarLectura:1}).populateAll().sort('updatedAt DESC').exec(function publicacionesEncontrada(err,publicacion){
			if(err){
				return next(err);
			} 
			res.view({
				publicacion: publicacion
			});
		});

		/*var _ = require('lodash');


		Publicacion
		.find()
		.populateAll()      
		.then(function (publicacion){
		    var comentarios = Comentario.find({
		        "publicacion": publicacion.id
		    })
		    .populateAll()
		    .then(function (comentarios){
		        return comentarios;
		    });
		    return [publicacion, comentarios];
		})
		.spread(function (publicacion, comentarios){
		    publicacion = publicacion.toObject() // <- HERE IS THE CHANGE!
		    publicacion.comentarios = comentarios; // It will work now
		    res.view({
				publicacion: publicacion
			});
		}).catch(function (err){
		    if (err) return res.serverError(err);
		});*/
	},
	editar: function(req, res, next){
		Publicacion.findOne(req.param('id'),function publicacionEncontrada(err,publicacion){
			if(err)
				return next(err);
			if(!publicacion)
				return next();
			res.view({
				publicacion: publicacion
			});
		});

			

	},
	busquedaavanzada:function(req,res){
		res.view();
	}
};

