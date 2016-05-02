/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req,res){

    res.writeHead(200, {'content-type': 'text/html'});
    res.end(
    '<form action="http://localhost:1337/file/upload" enctype="multipart/form-data" method="post">'+
    '<input type="text" name="title"><br>'+
    '<input type="file" name="avatar" multiple="multiple"><br>'+
    '<input type="submit" value="Upload">'+
    '</form>'
    )
  },
  cargaravatar: function  (req, res) {
    req.file('avatar').upload({
    	//dirname: './assets/images/avatar'
      dirname: require('path').resolve(sails.config.appPath, '/assets/images')
    },function (err, avatarCargado) {
      if (err)
        return res.serverError(err);

      if (avatarCargado.length === 0){
          return res.badRequest('Archivo no cargado');
        }
        Usuario.update(req.session.Usuario.id,{
          avatarUrl: require('util').format('%s/usuario/miperfil/%s', sails.getBaseUrl(), req.session.Usuario.id),
          avatarFd: avatarCargado[0].fd
        })
        .exec(function (err){
          if (err) return res.negotiate(err);
          return res.ok();
        });
        return res.redirect('/usuario/miperfil');
      });
  }
};

