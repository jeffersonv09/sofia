/**
 * CategoriaController
 *
 * @description :: Server-side logic for managing categorias
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	nueva: function(req, res){
		Area.find({areaHabilitarLectura:1},function (err, area){
			if(err)
				console.log("err"+err);
			res.view({ area: area });
		});
		
	},
	crear: function(req, res){
		var objCategoria={
			categoriaNombre: req.param("txtCategoriaNombre"),
			idArea: req.param("selCategoriaIdArea"),
			idUsuario: req.session.Usuario.id
		}
		Categoria.create(objCategoria, function(err, categoria){
			if(err){
				req.session.flash={
					err: err
				}
				return redirect('categoria/nueva');
			} 

			req.file('filCategoriaImagen').upload({
    			dirname: '../../assets/images/categoria'
		    },function (err, categoriaImagen) {
		      if (err)
		        console.log('err'+err);
		      if (categoriaImagen.length > 0){
		      	console.log(categoriaImagen.length);
		        Categoria.update(categoria.id,{
		          categoriaImagenUrl: require('util').format('%s/categoria/%s', sails.getBaseUrl(), categoriaImagen[0].fd.substring(49,categoriaImagen[0].fd.length)),
		          categoriaImagenFd: categoriaImagen[0].fd,
		          categoriaImagenPath: '/images/categoria/'+categoriaImagen[0].fd.substring(49,categoriaImagen[0].fd.length)
		        })
		        .exec(function (err){
		          if (err) console.log('err'+err);
		        });
		        console.log('archivo cargado');
		    	}
	      	});

			Area.findOneById(categoria.idArea,function areaEncontrada(err,area){
				req.session.Area=area;
			});

			res.redirect('categoria/mostrar/'+categoria.id);
		});
	},
	mostrar: function(req, res){
		Categoria.findOne(req.param('id'),function (err,categoria){
			if(err)
				console.log('err'+err);
			if(!categoria)
				console.log('categoria no encontrada'+err);
			res.view({
				categoria: categoria
			});
		});
	},
	listado: function(req, res, next){
		Area.findOneById(req.param('id'),function areaEncontrada(err, area){
			if(err){
				req.session.flash={
					err: err
				}
			}
			req.session.Area= area;
		});
		Categoria.find({idArea:req.param('id'),categoriaHabilitarLectura:1}).sort('categoriaNombre ASC').exec(function categoriasEncontrada(err,categoria){
			if(err){
				return next(err);
			}
			res.view({
				categoria: categoria
			});
		});

	}
};

