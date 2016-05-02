/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  nuevo: function(req, res){
    res.view();
  },
  crear: function(req, res, next){
    var objUsuario={
      usuario: req.param("txtUsuario"),
      contrasena: req.param("txtUsuarioContrasena"),
      usuarioNombre: req.param("txtUsuarioNombre"), 
      usuarioApellido: req.param("txtUsuarioApellido")
    }
    Usuario.create(objUsuario, function (err, usuario){
      if(err) next(err);
      res.redirect('/usuario/perfil/' + usuario.id);
    });
  },
  perfil: function(req, res, next){
    Usuario.find(req.param('id'),function (err, usuario){
      if(err) next(err);
      res.view({
        usuario: usuario
      });
    });
  },
	miperfil: function(req, res){
		Usuario.findOneById(req.session.Usuario.id,function usuarioEncontrado(err,usuario){
			if(err)
				return next(err);

        Educacion.find({idUsuario:req.session.Usuario.id}, function (err, educacion){
          if(err)
            console.log("err"+err);

            ExperienciaLaboral.find({idUsuario:req.session.Usuario.id}, function (err, experienciaLaboral){
            if(err)
              console.log("err"+err);

              Certificacion.find({idUsuario:req.session.Usuario.id}, function (err, certificacion){
              if(err)
                console.log("err"+err);

                Curso.find({idUsuario:req.session.Usuario.id}, function (err, curso){
                if(err)
                  console.log("err"+err);

                  Reconocimiento.find({idUsuario:req.session.Usuario.id}, function (err, reconocimiento){
                  if(err)
                    console.log("err"+err);

                    Etiqueta.find({etiquetaHabilitarLectura:1},function (err, etiqueta){
                      if(err)
                        console.log("err"+err);

                      UsuarioEtiqueta.find({idUsuario:req.session.Usuario.id},function (err, usuarioetiqueta){
                      if(err)
                        console.log("err"+err);
                          /*if(err)
                            console.log("err"+err);
                          console.log(usuarioEtiqueta);
                          
                            var nombreEtiqueta
                            _.each(usuarioEtiqueta,function(etiqueta){
                              Etiqueta.find({id:usuarioEtiqueta.idEtiqueta},function (err, etiqueta){
                                console.log(etiqueta.etiquetaNombre);
                              });
                              
                            });
                            Etiqueta.find({id:usuarioEtiqueta.idEtiqueta},function (err, etiqueta){
                              nombreEtiqueta= nombreEtiqueta.','.etiqueta.etiquetaNombre
                              console.log(nombreEtiqueta);
                            });
                          
                        EtiquetaCategoria.find({etiquetaCategoriaHabilitarLectura:1}).populateAll().exec(function (err, etiquetaCategoria){
                          if(err)
                            console.log("err"+err);

                      Etiqueta.find({etiquetaHabilitarLectura:1}, function (err, etiqueta){
                        if(err)
                        console.log("err"+err);  */     

                        res.view({
                          usuario: usuario, educacion: educacion, experienciaLaboral: experienciaLaboral
                          , certificacion: certificacion, curso: curso, reconocimiento: reconocimiento
                          , etiqueta: etiqueta, usuarioetiqueta: usuarioetiqueta
                        });

                        }); //usuarioetiqueta
                     }); //etiqueta
                    /* }); //etiquetacategoria */
                    //}); //usuarioInteres
                  });//reconocimiento
                }); //curso
                
              });//certificacion
          });//experiencialaboral

        });//educacion

		});//usuario
	},
  listado: function(req, res, next){
    Usuario.find({usuarioActivo:1},function (err, usuarios){
      if(err) next(err);
      res.view({
        usuarios: usuarios
      });
    });
  },
	avatar: function(req, res){
		Usuario.findOneById(req.session.Usuario.id,function usuarioEncontrado(err,usuario){
			if(err)
				return next(err);
			res.view({
				usuarios: usuarios
			});
		});
	},
	cargaravatar: function  (req, res) {
    var carpetaDestino='/images/avatar';
    var pathString=sails.config.appPath+carpetaDestino+'/'
    console.log(pathString);
    req.file('avatar').upload({
    	//dirname: require('path').resolve(sails.config.appPath, '/assets/images/avatar')
      dirname: pathString
    },function (err, avatarCargado) {
      if (err)
        return res.serverError(err);

      if (avatarCargado.length === 0){
          return res.badRequest('Archivo no cargado');
        }
        Usuario.update(req.session.Usuario.id,{
          avatarUrl: require('util').format('%s/%s', carpetaDestino, avatarCargado[0].fd.substring(pathString.length,avatarCargado[0].fd.length)),
          avatarFd: avatarCargado[0].fd
        })
        .exec(function (err){
          if (err) return res.negotiate(err);
          return res.ok();
        });
      });

    Usuario.findOneById(req.session.Usuario.id).exec(function usuarioEncontrado(err, usuario){
          if(err) console.log(err);
          console.log(usuario);
          req.session.Usuario= usuario;
        });
        return res.redirect('/usuario/miperfil');
  }
   
   


};

