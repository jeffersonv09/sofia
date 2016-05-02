/**
* Categoria.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	idArea:{
  		type: 'string'
  	},
    idUsuario:{
      type: 'integer'
    },
  	categoriaNombre:{
  		type: 'string'
  	},
    categoriaImagenFd:{
      type: 'string'
    },
    categoriaImagenUrl:{
      type: 'string'
    },
    categoriaImagenPath:{
      type: 'string'
    },
  	categoriaHabilitarLectura:{
  		type: 'boolean',
      defaultsTo: true
  	}
  }
};

