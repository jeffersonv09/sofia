/**
 * ExperienciaLaboralController
 *
 * @description :: Server-side logic for managing experiencialaborals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear: function(req, res){
		var objExperienciaLaboral={
			experienciaLaboralEmpresa: req.param("txtExperienciaLaboralEmpresa"),
			experienciaLaboralDesde: req.param("selExperienciaLaboralDesde"),
			experienciaLaboralHasta: req.param("selExperienciaLaboralHasta"),
			experienciaLaboralCargo: req.param("txtExperienciaLaboralCargo"),
			idUsuario: req.session.Usuario.id
		}
		ExperienciaLaboral.create(objExperienciaLaboral,function (err,experiencialaboral){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	},
	actualizar: function(req, res, next){
		var objExperienciaLaboral={
			experienciaLaboralEmpresa: req.param("txtExperienciaLaboralEmpresa"),
			experienciaLaboralDesde: req.param("selExperienciaLaboralDesde"),
			experienciaLaboralHasta: req.param("selExperienciaLaboralHasta"),
			experienciaLaboralCargo: req.param("txtExperienciaLaboralCargo"),
			idUsuario: req.session.Usuario.id
		}
		ExperienciaLaboral.update(req.param("id"), objExperienciaLaboral, function (err, experiencialaboral){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	}
};

