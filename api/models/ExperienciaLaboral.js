/**
* ExperienciaLaboral.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	experienciaLaboralEmpresa: {
  		type: 'string'
  	},
  	experienciaLaboralDesde: {
  		type: 'string'
  	},
  	experienciaLaboralHasta: {
  		type: 'string'
  	},
  	experienciaLaboralCargo: {
  		type: 'string'
  	},
  	experienciaLaboralHabilitarLectura: {
  		type: 'boolean',
  		defaultsTo: true
  	},
  	idUsuario: {
  		type: 'integer'
  	}

  }
};

