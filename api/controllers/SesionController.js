/**
 * SesionController
 *
 * @description :: Server-side logic for managing sesions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	iniciosesion: function(req,res){
		res.view({layout:'layoutLogin'});
	},crearsesion: function(req, res, next){
		var varUsuario= req.param('txtUsuario');
		var varContrasena= req.param('txtContrasena');
		if(!varUsuario || !varContrasena){
			var varError=[{msj:'Debe ingresar usuario y contraseña'}]
			req.session.flash={
				err: varError
			}
			return res.redirect('/');
		}
		Usuario.findOneByUsuario(varUsuario,function usuarioEncontrado(err, usuario){
			if(err){
				req.session.flash={
					err:err
				}
				return res.redirect('/');
			} 
			if(!usuario){
				var varError=[{msj:'El usuario no se encuentra registrado'}]
				req.session.flash={
					err: varError
				}
				return res.redirect('/');
			}
			if(varContrasena != String(usuario.contrasena)){
				var varError=[{msg:'El usuario o contraseña es invalido'}]
				req.session.flash={
					err: varError
				}		
				return res.redirect('/');
			}
			/*res.redirect('/usuario/miperfil/'+usuario.id);*/
			req.session.Usuario= usuario;
			res.redirect('/descubre');
		});
	},
	destruir: function(req, res, next){
		req.session.destroy();
		res.redirect('sesion/iniciosesion');
	}
};

