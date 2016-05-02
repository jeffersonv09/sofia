/**
* Usuario.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	usuario:{
  		type: 'string'
  	},
  	contrasena:{
  		type: 'string'
  	},
    usuarioNombre:{
      type: 'string'
    },
    usuarioApellido:{
      type: 'string'
    },
    usuarioActivo:{
      type: 'boolean',
      defaultsTo: true
    },
    avatarUrl:{
      type: 'string',
      defaultsTo: '/images/avatar/default-avatar.png'
    },
    avatarFd:{
      type: 'string',
      defaultsTo: 'C:\Users\Jefferson\sofia\assets\images\avatar\default-avatar.png'
    },
  	usuarioRol:{
  		type: 'integer'
  	},
  	usuarioDepartamento:{
  		type: 'integer'
  	},
  	usuarioCampana:{
  		type: 'integer'
  	},
    usuarioCorreo:{
      type: 'email',
      unique: true
    },
    usuarioTelefono1:{
      type: 'string',
      size: 15
    },
    usuarioTelefono2:{
      type: 'string',
      size: 15
    },
    publicaciones: {
      collection: 'publicacion',
      via: 'autor'
    },
    comentarios: {
      collection: 'comentario',
      via: 'comentarista'
    },
    articulos: {
      collection: 'articulo',
      via: 'articuloAutor'
    }
    /*comentarios: {
      collection: 'comentario',
      via: 'comentarista',
      dominant: true
    }
    comentarios: {
      collection: 'comentario'
    }*/
    
  }
};

