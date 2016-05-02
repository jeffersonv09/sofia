/**
* Educacion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	educacionInstituto: {
  		type: 'string'
  	},
  	educacionDesde: {
  		type: 'string'
  	},
  	educacionHasta: {
  		type: 'string'
  	},
  	educacionTitulo: {
  		type: 'string'
  	},
  	educacionHabilitarLectura: {
  		type: 'boolean',
  		defaultsTo: true
  	},
  	idUsuario: {
  		type: 'integer'
  	}
  }
};

