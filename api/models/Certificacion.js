/**
* Certificacion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	certificacionInstituto: {
  		type: 'string'
  	},
  	certificacionDesde: {
  		type: 'string'
  	},
  	certificacionHasta: {
  		type: 'string'
  	},
  	certificacionTitulo: {
  		type: 'string'
  	},
  	certificacionHabilitarLectura: {
  		type: 'boolean',
  		defaultsTo: true
  	},
  	idUsuario: {
  		type: 'integer'
  	}
  }
};

