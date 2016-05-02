/**
* Publicacion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	publicacionTitulo:{
  		type: 'string'
  	},
  	publicacionContenido:{
  		type: 'string',
      size: '52000'
  	},
  	publicacionDescripcion:{
  		type: 'string'
  	},
    publicacionEtiqueta:{
      type: 'string'
    },
    publicacionAdjuntoUrl1:{
      type: 'string'
    },
    publicacionAdjuntoFd1:{
      type: 'string'
    },
    publicacionAdjuntoPath1:{
      type: 'string'
    },
  	publicacionAdjuntoUrl2:{
      type: 'string'
    },
    publicacionAdjuntoFd2:{
      type: 'string'
    },
    publicacionAdjuntoPath2:{
      type: 'string'
    },
  	publicacionDifusion:{
  		type: 'integer'
  	},
  	publicacionTipo:{
  		type: 'integer'
  	},
  	publicacionHabilitarLectura:{
  		type: 'boolean',
  		defaultsTo: true
  	},
  	idArea:{
  		type: 'integer'
  	},
  	idCategoria:{
  		type: 'integer'
  	},
    autor: {
      model: 'usuario'
    },
    comentarios: {
      collection: 'comentario',
      via: 'publicacion'
    }
  }
};

