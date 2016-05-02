/**
* Reconocimiento.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	reconocimientoEmisor: {
  		type: 'string'
  	},
  	reconocimientoFecha: {
  		type: 'string'
  	},
  	reconocimientoTitulo: {
  		type: 'string'
  	},
  	reconocimientoDescripcion: {
  		type: 'string'
  	},
  	reconocimientoHabilitarLectura: {
  		type: 'boolean',
  		defaultsTo: true
  	},
  	idUsuario: {
  		type: 'integer'
  	}
  }
};

