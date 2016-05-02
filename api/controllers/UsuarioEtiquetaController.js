/**
 * UsuarioEtiquetaController
 *
 * @description :: Server-side logic for managing usuarioetiquetas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	crear: function(req, res){
		var array= req.param("txtUsuarioEtiqueta").split(",");
		array.forEach(function(etiqueta) { 
			Etiqueta.findOne({etiquetaNombre:etiqueta.trim()}).exec(function (err, etiquetaEncontrada) {
				if(err) console.log(err);
				UsuarioEtiqueta.findOrCreate({idEtiqueta:etiquetaEncontrada.id,idUsuario:req.session.Usuario.id},{idEtiqueta:etiquetaEncontrada.id,idUsuario:req.session.Usuario.id}).exec(function creadoOencontrado(error, createdOrFoundRecords){
					if(err) console.log(err);
				});
			});
		});
		res.redirect('/usuario/miperfil');
	}
};

