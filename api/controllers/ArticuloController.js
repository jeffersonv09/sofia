/**
 * ArticuloController
 *
 * @description :: Server-side logic for managing articuloes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nuevo:function(req,res){
		res.view();	
	},
	crear:function(req,res){
	console.log( 'req'+req.session.Seccion.id);
		var objArticulo={
			articuloTitulo: req.param("txtArticuloTitulo"),
			articuloContenido: req.param("txtArticuloContenido"),
			articuloPrivacidad: req.param("hfArticuloPrivacidad"),
			articuloAutor: req.session.Usuario.id,
			idSeccion: req.session.Seccion.id
		}
		Articulo.create(objArticulo).exec(function (err,articulo){
			if(err){
					req.session.flash={
						err: err
					}
					
				return res.redirect('articulo/nuevo');
			}

			res.redirect('articulo/mostrar/'+articulo.id);

			req.file('filArticuloAdjunto').upload({
    			dirname: '../../assets/articuloAdjunto'
		    },function (err, articuloAdjunto) {
		    	console.log("entro");
		      if (err)
		        console.log('err'+err);

		      if (articuloAdjunto.length > 0){

		        Articulo.update(articulo.id,{
		          articuloAdjuntoUrl: require('util').format('%s/articuloAdjunto/%s', sails.getBaseUrl(), articuloAdjunto[0].fd.substring(48,articuloAdjunto[0].fd.length)),
		          articuloAdjuntoFd: articuloAdjunto[0].fd,
		          articuloAdjuntoPath: '/articuloAdjunto/'+articuloAdjunto[0].fd.substring(48,articuloAdjunto[0].fd.length)
		        })
		        .exec(function (err){
		          if (err) console.log('err'+err);
		        });
		        console.log('archivo cargado');
		    	}
	      	});

	      	var array= req.param("txtArticuloEtiqueta").split(",");
			array.forEach(function(etiqueta) { 
				Etiqueta.findOrCreate({etiquetaNombre:etiqueta.trim()},{etiquetaNombre:etiqueta.trim(),etiquetaCategoria:1}).exec(function createFindCB(error, registroCreadoOEncontrado){
					console.log('Etiquetas'+registroCreadoOEncontrado.etiquetaNombre);
				});
			});
			
		});
	},
	mostrar: function(req, res){
		Articulo.findOne(req.param('id')).populateAll().exec( function (err,articulo){
			if(err)
				return res.redirect('/404');
			res.view({
				articulo: articulo
			});
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
	
	listado: function(req, res, next){
		Articulo.find({idSeccion:req.param('id'),articuloHabilitarLectura:1}).populateAll().sort('articuloTitulo ASC').exec(function (err,articulo){
			if(err){
				return next(err);
			}
			req.session.Seccion.id=req.param('id');
			res.view({
				articulo: articulo
			});
		});
	}

	
};

