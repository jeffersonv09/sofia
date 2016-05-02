/**
 * AreaController
 *
 * @description :: Server-side logic for managing areas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nueva: function(req, res){
		res.view();
	},
	crear: function(req, res){
		var objArea={
			areaNombre: req.param("txtAreaNombre"),
			idUsuario: req.session.Usuario.id
		}
		Area.create(objArea, function(err, area){
			if(err){
				req.session.flash={
					err: err
				}
				return redirect('area/nueva');
			} 

			var carpetaDestino='area';
		    var pathString= sails.config.appPath+'/assets/images/'+carpetaDestino+'/';
			req.file('filAreaImagen').upload({
    			dirname: pathString
		    },function (err, areaImagen) {
		      if (err)
		        console.log('err'+err);

		      if (areaImagen.length > 0){
		        Area.update(area.id,{
		          areaImagenUrl: require('util').format('%s/%s/%s', sails.getBaseUrl(), carpetaDestino, areaImagen[0].fd.substring(pathString.length,areaImagen[0].fd.length)),
		          areaImagenFd: areaImagen[0].fd,
		          areaImagenPath: '/images/'+carpetaDestino+'/'+areaImagen[0].fd.substring(pathString.length,areaImagen[0].fd.length)
		        })
		        .exec(function (err){
		          if (err) console.log('err'+err);
		        });
		        console.log('archivo cargado');
		    	}
	      	});
			res.redirect('area/mostrar/'+area.id);
		});
	},
	editar: function(req, res, next){
		console.log(req.param('id'));
		Area.findOne(req.param('id'),function areaEncontrada(err,area){
			if(err)
				console.log('err'+err);
			if(!area)
				console.log('area no encontrada'+err);
			res.view({
				area: area
			});
		});
	},
	actualizar: function(req,res,next){
		var objArea={
			AreaNombre: req.param("txtAreaNombre"),
			idUsuario: req.session.Usuario.id
		}
		Area.update(req.param('id'), objArea, function areaActualizada(err,area){
			if (err){
					req.session.flash={
					err: err
				}
				return res.redirect('area/editar?id='+req.param('id'));			
			}
			res.redirect('area/mostrar/'+req.param('id'));
		});
	},
	mostrar: function(req, res){
		Area.findOne(req.param('id'),function areaEncontrada(err,area){
			if(err)
				console.log('err'+err);
			if(!area)
				console.log('area no encontrada'+err);
			res.view({
				area: area
			});
		});
	},
	listado: function(req, res, next){
		Area.find({areaHabilitarLectura:1}).sort('areaNombre ASC').exec(function areasEncontrada(err,area){
			if(err){
				return next(err);
			}
			res.view({
				area: area
			});
		});
	}
};

