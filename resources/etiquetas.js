module.exports={
	Etiqueta.find().populateAll().exec(function (err, etiquetas){
		if(err) console.log(err);
		res.json(etiquetas);
	})
};