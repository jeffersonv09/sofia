/**
* RedSocial.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	redSocialNombre:{
  		type: 'string',
  	},
  	redSocialIconoFd:{
  		type: 'string',
  	},
  	redSocialIconoUrl:{
  		type: 'string',
  	},
  	redSocialIconoPath:{
  		type: 'string',
  	},
  	redSocialHabilitarLectura:{
  		type: 'boolean',
  		defaultsTo: true
  	},
  	idUsuario:{
  		type: 'integer'
  	}

  }
};

