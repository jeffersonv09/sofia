/**
 * SeccionController
 *
 * @description :: Server-side logic for managing seccions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nueva: function(req, res){
		res.view();
	},
	crear: function(req, res){
		var objSeccion={
			seccionNombre: req.param("txtSeccionNombre"),
			idUsuario: req.session.Usuario.id
		}
		Seccion.create(objSeccion, function (err, seccion){
			if(err){
				req.session.flash={
					err: err
				}
				return redirect('seccion/nueva');
			} 
			res.redirect('seccion/listado');
		});
	},
	editar: function(req, res, next){
		Seccion.findOne(req.param('id'),function (err,seccion){
			if(err)
				console.log('err'+err);
			if(!seccion)
				console.log('seccion no encontrada'+err);
			res.view({
				seccion: seccion
			});
		});
	},
	actualizar: function(req,res,next){
		var objSeccion={
			seccionNombre: req.param("txtSeccionNombre"),
			idUsuario: req.session.Usuario.id
		}
		Seccion.update(req.param('id'), objSeccion, function (err,seccion){
			if (err){
					req.session.flash={
					err: err
				}
				return res.redirect('seccion/editar?id='+req.param('id'));			
			}
			res.redirect('seccion/mostrar/'+req.param('id'));
		});
	},
	mostrar: function(req, res){
		Seccion.findOne(req.param('id'),function (err,seccion){
			if(err)
				console.log('err'+err);
			if(!seccion)
				console.log('seccion no encontrada'+err);
			res.view({
				seccion: seccion
			});
		});
	},
	listado: function(req, res, next){
		Seccion.find({seccionHabilitarLectura:1}).sort('seccionNombre ASC').exec(function (err,seccion){
			if(err){
				return next(err);
			}
			req.session.Seccion= seccion;
			res.view({
				seccion: seccion
			});
		});
	},
	ordenar: function(req, res, next){
		Seccion.find({seccionHabilitarLectura:1}).sort(req.param("selArticuloOrdenar")).exec(function (err,seccion){
			if(err){
				return next(err);
			}
			res.view({
				seccion: seccion
			});
		});
	}
};

