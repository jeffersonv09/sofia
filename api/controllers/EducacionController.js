/**
 * EducacionController
 *
 * @description :: Server-side logic for managing educacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear: function(req, res){
		var objEducacion={
			educacionInstituto: req.param("txtEducacionInstituto"),
			educacionDesde: req.param("selEducacionDesde"),
			educacionHasta: req.param("selEducacionHasta"),
			educacionTitulo: req.param("txtEducacionTitulo"),
			idUsuario: req.session.Usuario.id
		}
		Educacion.create(objEducacion,function (err,educacion){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	},
	actualizar: function(req, res, next){
		var objEducacion={
			educacionInstituto: req.param("txtEducacionInstituto"),
			educacionDesde: req.param("selEducacionDesde"),
			educacionHasta: req.param("selEducacionHasta"),
			educacionTitulo: req.param("txtEducacionTitulo"),
			idUsuario: req.session.Usuario.id
		}
		Educacion.update(req.param("id"), objEducacion, function (err, educacion){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	}
	
};

