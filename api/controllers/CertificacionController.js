/**
 * CertificacionController
 *
 * @description :: Server-side logic for managing certificacions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear: function(req, res){
		var objCertificacion={
			certificacionInstituto: req.param("txtCertificacionInstituto"),
			certificacionDesde: req.param("selCertificacionDesde"),
			certificacionHasta: req.param("selCertificacionHasta"),
			certificacionTitulo: req.param("txtCertificacionTitulo"),
			idUsuario: req.session.Usuario.id
		}
		Certificacion.create(objCertificacion,function (err,certificacion){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	},
	actualizar: function(req, res, next){
		var objCertificacion={
			certificacionInstituto: req.param("txtCertificacionInstituto"),
			certificacionDesde: req.param("selCertificacionDesde"),
			certificacionHasta: req.param("selCertificacionHasta"),
			certificacionTitulo: req.param("txtCertificacionTitulo"),
			idUsuario: req.session.Usuario.id
		}
		Certificacion.update(req.param("id"), objCertificacion, function (err, certificacion){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	}
};

