/**
* Area.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
	areaNombre:{
		type: 'string'
	},
	areaImagenFd:{
      type: 'string'
    },
    areaImagenUrl:{
      type: 'string'
    },
    areaImagenPath:{
      type: 'string'
    },
	areaHabilitarLectura:{
		type: 'boolean',
		defaultsTo: true
	},
	idUsuario:{
		type: 'integer'
	}
  }
};

