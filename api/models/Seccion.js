/**
* Seccion.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	seccionNombre:{
		type: 'string'
	},
	seccionHabilitarLectura:{
		type: 'boolean',
		defaultsTo: true
	},
	idUsuario:{
		type: 'integer'
	}
  }
};

