/**
* Curso.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	cursoInstituto: {
  		type: 'string'
  	},
  	cursoDesde: {
  		type: 'string'
  	},
  	cursoHasta: {
  		type: 'string'
  	},
  	cursoTitulo: {
  		type: 'string'
  	},
  	cursoHabilitarLectura: {
  		type: 'boolean',
  		defaultsTo: true
  	},
  	idUsuario: {
  		type: 'integer'
  	}
  }
};

