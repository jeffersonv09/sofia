/**
* Articulo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    idSeccion:{
      type: 'integer'
    },
	  articuloTitulo:{
      type: 'string'
    },
    articuloContenido:{
      type: 'string',
      size: '52000'
    },
  	articuloHabilitarLectura:{
  		type: 'boolean',
      	defaultsTo: true
  	},
    articuloPrivacidad:{
      type: 'integer'
    },
    articuloAdjuntoUrl:{
      type: 'string'
    },
    articuloAdjuntoFd:{
      type: 'string'
    },
    articuloAdjuntoPath:{
      type: 'string'
    },
    articuloAutor: {
      model: 'usuario'
    },
    articuloComentarios: {
      collection: 'comentario',
      via: 'articulo'
    }
  }
};

