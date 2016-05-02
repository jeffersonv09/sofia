/**
 * CursoController
 *
 * @description :: Server-side logic for managing cursoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear: function(req, res){
		var objCurso={
			cursoInstituto: req.param("txtCursoInstituto"),
			cursoDesde: req.param("selCursoDesde"),
			cursoHasta: req.param("selCursoHasta"),
			cursoTitulo: req.param("txtCursoTitulo"),
			idUsuario: req.session.Usuario.id
		}
		Curso.create(objCurso,function (err,curso){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	},
	actualizar: function(req, res, next){
		var objCurso={
			cursoInstituto: req.param("txtCursoInstituto"),
			cursoDesde: req.param("selCursoDesde"),
			cursoHasta: req.param("selCursoHasta"),
			cursoTitulo: req.param("txtCursoTitulo"),
			idUsuario: req.session.Usuario.id
		}
		Curso.update(req.param("id"), objCurso, function (err, curso){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	}
};

