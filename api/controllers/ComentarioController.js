/**
 * ComentarioController
 *
 * @description :: Server-side logic for managing comentarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nuevo: function(req, res){
		objComentario={
			comentarioContenido: req.param("textareaComentarioContenido"),
			publicacion: req.param("hfPublicacion"),
			comentarista: req.session.Usuario
		},
		Comentario.create(objComentario, function (err, comentario){
			if(err) {
				req.session.flash={
					err: err
				}
			}

			var carpetaDestino='comentarioAdjunto';
		    var pathString= sails.config.appPath+'/assets/'+carpetaDestino+'/';
			req.file('filComentarioAdjunto').upload({
    			dirname: pathString
		    },function (err, comentarioAdjunto) {
		      if (err)
		        console.log('err'+err);
			   
			   if (comentarioAdjunto.length > 0){
		        Comentario.update(comentario.id,{
		          comentarioAdjuntoUrl: require('util').format('%s/%s/%s', sails.getBaseUrl(), carpetaDestino, comentarioAdjunto[0].fd.substring(pathString.length,comentarioAdjunto[0].fd.length)),
		          comentarioAdjuntoFd: comentarioAdjunto[0].fd,
		          comentarioAdjuntoPath: '/'+carpetaDestino+'/'+comentarioAdjunto[0].fd.substring(pathString.length,comentarioAdjunto[0].fd.length)	
		        })
		        .exec(function (err){
		          if (err) console.log('err'+err);
		        });
		        console.log('archivo cargado');
		    	}
		    	console.log('file'+comentarioAdjunto);
	      	});

	      	res.redirect('/publicacion/mostrar/'+comentario.publicacion);
		});

	}
};

