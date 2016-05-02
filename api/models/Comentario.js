/**
* Comentario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	cantidadLike:{
  		type: 'integer'
  	},
  	cantidadPin:{
  		type: 'integer'
  	},
  	comentarioContenido:{
  		type: 'string'
  	},
  	comentarioAdjuntoUrl:{
      type: 'string'
    },
    comentarioAdjuntoFd:{
      type: 'string'
    },
    comentarioAdjuntoPath:{
      type: 'string'
    },
    comentarioHabilitarLectura:{
  		type: 'boolean',
  		defaultsTo: true
  	},
    publicacion: {
      model: 'publicacion'
    },
    articulo: {
      model: 'articulo'
    },
    comentarista: {
      model: 'usuario'
    }
  }
};

