/**
 * ReconocimientoController
 *
 * @description :: Server-side logic for managing reconocimientoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear: function(req, res){
		var objReconocimiento={
			reconocimientoEmisor: req.param("txtReconocimientoEmisor"),
			reconocimientoFecha: req.param("selReconocimientoFecha"),
			reconocimientoTitulo: req.param("txtReconocimientoTitulo"),
			reconocimientoDescripcion: req.param("txtReconocimientoDescripcion"),
			idUsuario: req.session.Usuario.id
		}
		Reconocimiento.create(objReconocimiento,function (err,reconocimiento){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	},
	actualizar: function(req, res, next){
		var objReconocimiento={
			reconocimientoEmisor: req.param("txtReconocimientoEmisor"),
			reconocimientoFecha: req.param("selReconocimientoFecha"),
			reconocimientoTitulo: req.param("txtReconocimientoTitulo"),
			reconocimientoDescripcion: req.param("txtReconocimientoDescripcion"),
			idUsuario: req.session.Usuario.id
		}
		Reconocimiento.update(req.param("id"), objReconocimiento, function (err, reconocimiento){
			if(err){
				req.session.flash={
					err: err
				}
			}
			res.redirect('usuario/miperfil');
		});
	}
};

