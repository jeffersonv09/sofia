/**
* EtiquetaCategoria.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	etiquetaCategoriaNombre: {
  		type: 'string'
  	},
  	etiquetaCategoriaHabilitarLectura: {
  		type: 'boolean',
  		defaultsTo: true
  	},
  	etiquetas:{
  		collection: 'etiqueta',
  		via: 'etiquetaCategoria'
  	}
  }
};

