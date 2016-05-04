$(document).ready(function(){

		$('#tab-file-content').hide(); 
		$('#fil-item-add-img').hide(); 
		$('#fil-item-upload').hide();
		$('.item-controls').hide();
		$('#tab-file-content').hide();
		$('#tab-item-content').hide();


		$("#tab-file,#tab-image").on( "click", function() {
			$('#tab-file-content').show(); 
			$('#tab-item-content').hide(); 
		});
		$("#tab-file").on( "click", function() {
			$('#fil-item-image').hide();
			$('#fil-item-upload').show();
			$('#tab-file').addClass("active");
			$('#tab-item').removeClass();
			$('#tab-image').removeClass();
			$('#tab-msg').removeClass();
			$('#fil-item-add-file').hide(); 
			$('#fil-item-add-img').show();
			$('#tab-file-msg').hide(); 
			$('#hfPublicacionTipo').val(3); 
			$('.item-controls').show();
		});
		$("#tab-image").on( "click", function() {
			$('#fil-item-upload').hide();
			$('#fil-item-image').show(); 
			$('#tab-image').addClass("active");
			$('#tab-item').removeClass();
			$('#tab-file').removeClass();
			$('#tab-msg').removeClass();
			$('#tab-file-msg').hide(); 
			$('#fil-item-add-file').show(); 
			$('#fil-item-add-img').hide();
			$('#hfPublicacionTipo').val(2);
			$('.item-controls').show(); 
		});
		$("#tab-item").on( "click", function() {
			$('#fil-item-image').hide();
			$('#fil-item-upload').show();
			$('#tab-file-content').hide(); 
			$('#tab-item').addClass("active");
			$('#tab-image').removeClass();
			$('#tab-file').removeClass();
			$('#tab-msg').removeClass();
			$('#tab-file-msg').hide(); 
			$('#tab-item-content').show(); 
			$('#fil-item-add-file').hide(); 
			$('#fil-item-add-img').show();
			$('#hfPublicacionTipo').val(1); 
			$('.item-controls').show();
		 });
		$("#tab-msg").on( "click", function() {
			$('#tab-file-content').hide();
			$('#hfPublicacionTipo').val(4); 
			$('#tab-item-content').hide();
			$('.item-controls').hide();
			$('#tab-msg').addClass("active");
			$('#tab-image').removeClass();
			$('#tab-file').removeClass();
			$('#tab-item').removeClass();
			$('#tab-file-msg').show();
			$('#fil-item-add-file').show(); 
			$('#fil-item-add-img').hide(); 
		 });

		$("#everyone").click(function(event){
			event.preventDefault();
			$('#hfPublicacionDifusion').val(1);
			$('#hfArticuloPrivacidad').val(1);
		});
		$("#target").click(function(event){
			event.preventDefault();
			$('#hfPublicacionDifusion').val(2);
			$('#hfArticuloPrivacidad').val(2);
		});
		$("#teamwork").click(function(event){
			event.preventDefault();
			$('#hfPublicacionDifusion').val(3);
			$('#hfArticuloPrivacidad').val(3);
		});
		$("#department").click(function(event){
			event.preventDefault();
			$('#hfPublicacionDifusion').val(4);
			$('#hfArticuloPrivacidad').val(4);
		});

		$("#filCategoriaImagen").change(function(){
			$("#txtCategoriaNombreImagen").val($("#filCategoriaImagen").val());
		});

		$("#filPublicacionAdjunto1").change(function(){
			$("#adjunto1").val($("#filPublicacionAdjunto1").val());
		});

		$("#filPublicacionAdjunto2").change(function(){
			$("#adjunto2").val($("#filPublicacionAdjunto2").val());
		});

		$("#filAreaImagen").change(function(){
			$("#txtAreaNombreImagen").val($("#filAreaImagen").val());
		});

		$("#media-footer-like").on( "click", function() {
			$('#media-footer-like').addClass("media-footer-liked");
		});

		$(function () {
		  $('[data-toggle="tooltip"]').tooltip();
		});


	var engine = new Bloodhound({
	  local: [{value: 'inteligencia emocional'}, {value: 'teleoperacion'}, {value: 'atencion al cliente'} , {value: 'atc'}, {value: 'nivel de servicio'}, {value: 'calidad'}, {value: 'indicadores de gestion'}, {value: 'televentas'}, {value: 'white'}],
	  datumTokenizer: function(d) {
	    return Bloodhound.tokenizers.whitespace(d.value);
	  },
	  queryTokenizer: Bloodhound.tokenizers.whitespace
	});

	engine.initialize();

	$('#txtPublicacionEtiqueta').tokenfield({
	  typeahead: [null, { source: engine.ttAdapter() }]
	});

	$('#txtArticuloEtiqueta').tokenfield({
	  typeahead: [null, { source: engine.ttAdapter() }]
	});
	
	// instantiate the bloodhound suggestion engine
	/*var countries = new Bloodhound({  
	  datumTokenizer: function(countries) {
	      return Bloodhound.tokenizers.whitespace(countries.value);
	  },
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  remote: {
	    url: "http://vocab.nic.in/rest.php/country/json",
	    filter: function(response) {      
	      return response.countries;
	    }
	  }
	});

	// initialize the bloodhound suggestion engine
	countries.initialize();

	// instantiate the typeahead UI
	$('#txtPublicacionEtiqueta').typeahead(
	  { hint: true,
	    highlight: true,
	    minLength: 1
	  }, 
	  {
	  name: 'countries',
	  displayKey: function(countries) {
	    return countries.country.country_name;        
	  },
	  source: countries.ttAdapter()
	});
*/
	var usuarioEtiquetasBuscar = new Bloodhound({
	  local: [{value: 'red'}, {value: 'blue'}, {value: 'green'} , {value: 'yellow'}, {value: 'violet'}, {value: 'brown'}, {value: 'purple'}, {value: 'black'}, {value: 'white'}],
	  datumTokenizer: function(d) {
	    return Bloodhound.tokenizers.whitespace(d.value);
	  },
	  queryTokenizer: Bloodhound.tokenizers.whitespace
	});

	usuarioEtiquetasBuscar.initialize();
	$('#txtUsuarioEtiqueta').tokenfield({
	  typeahead: [null, { source: usuarioEtiquetasBuscar.ttAdapter() }]
	});
	$('#txtArticuloEtiqueta').tokenfield({
	  typeahead: [null, { source: usuarioEtiquetasBuscar.ttAdapter() }]
	});

	$("#interestList li").on('click',function(){
	 
	$('#txtUsuarioEtiqueta').tokenfield('createToken', $(this).children(":first").data("name"));
	  //usuarioEtiquetasBuscar.add($(this).children(":first").data("name"));
	});
	
	
	$('#textareaUsuarioEtiqueta').tokenfield('createToken', $('#hfUsuarioEtiqueta').val());

	var btnCust = '<button type="submit" class="btn btn-light-blue" title="Guardar" >' +
	    '<i class="glyphicon glyphicon-send"></i>' +
	    '</button>'; 
	$("#avatar").fileinput({
	    overwriteInitial: true,
	    maxFileSize: 8000,
	    showClose: false,
	    showCaption: false,
	    browseLabel: '',
	    removeLabel: '',
	    browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
	    removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
	    removeTitle: 'Cancel or reset changes',
	    elErrorContainer: '#kv-avatar-errors',
	    msgErrorClass: 'alert alert-block alert-danger',
	    defaultPreviewContent: '<img src="/images/avatar/default-avatar.png" alt="Your Avatar" style="width:160px">',
	    layoutTemplates: {main2: '{preview} ' +  btnCust + ' {remove} {browse}'},
	    allowedFileExtensions: ["jpg", "png", "gif"]
	});


	$("#change-my-profile").hide();

	$("#my-profile").on("click", function(event){
		event.preventDefault();
		$("#change-my-profile").show("slow");
		$("#my-profile").hide();
	});

	$("#close-change-my-profile").on("click", function(event){
		event.preventDefault();
		$("#my-profile").show("slow");
		$("#change-my-profile").hide();
	});

	// panel de control

	 var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        var randomScalingFactor = function() {
            return Math.round(Math.random() * 50 * (Math.random() > 0.5 ? 1 : 1)) + 50;
        };
        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function(opacity) {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',' + (opacity || '.3') + ')';
        };

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                    fill: false,
                    borderDash: [5, 5],
                }, {
                    label: "My Second dataset",
                    data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()],
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:"Chart.js Line Chart - X-Axis Filter"
                },
                scales: {
                    xAxes: [{
                        display: true,
                        ticks: {
                            userCallback: function(dataLabel, index) {
                                return index % 2 === 0 ? dataLabel : '';
                            }
                        }
                    }],
                    yAxes: [{
                        display: true,
                        beginAtZero: false
                    }]
                }
            }
        };

       $.each(config.data.datasets, function(i, dataset) {
            dataset.borderColor = randomColor(0.4);
            dataset.backgroundColor = randomColor(0.5);
            dataset.pointBorderColor = randomColor(0.7);
            dataset.pointBackgroundColor = randomColor(0.5);
            dataset.pointBorderWidth = 1;
        });

        window.onload = function() {
            var ctx = document.getElementById("canvas").getContext("2d");
            window.myLine = new Chart(ctx, config);
        };
/* 
        var MONTHS = ["January", "February"];

        var randomScalingFactor = function() {
            return (Math.random() > 1.0 ? 1.0 : 1.0) * Math.round(Math.random() * 100);
        };
        var randomColorFactor = function() {
            return Math.round(Math.random() * 255);
        };
        var randomColor = function() {
            return 'rgba(' + randomColorFactor() + ',' + randomColorFactor() + ',' + randomColorFactor() + ',.7)';
        };

        var barChartData = {
            labels: ["January", "February"],
            datasets: [{
                label: 'Dataset 1',
                backgroundColor: "rgba(220,220,220,0.5)",
                data: [randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor(), randomScalingFactor()]
            }]

        };

        window.onload = function() {
            var ctx = document.getElementById("canvas2").getContext("2d");
            window.myBar = new Chart(ctx, {
                type: 'bar',
                data: barChartData,
                options: {
                    // Elements options apply to all of the options unless overridden in a dataset
                    // In this case, we are setting the border of each bar to be 2px wide and green
                    elements: {
                        rectangle: {
                            borderWidth: 2,
                            borderColor: 'rgb(0, 255, 0)',
                            borderSkipped: 'bottom'
                        }
                    },
                    responsive: true,
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Chart.js Bar Chart'
                    }
                }
            });

        }; */

        $('#randomizeData').click(function() {
            $.each(config.data.datasets, function(i, dataset) {
                dataset.data = dataset.data.map(function() {
                    return randomScalingFactor();
                });

            });

            window.myLine.update();
        });

        $('#addDataset').click(function() {
            var newDataset = {
                label: 'Dataset ' + config.data.datasets.length,
                borderColor: randomColor(0.4),
                backgroundColor: randomColor(0.5),
                pointBorderColor: randomColor(0.7),
                pointBackgroundColor: randomColor(0.5),
                pointBorderWidth: 1,
                data: [],
            };

            for (var index = 0; index < config.data.labels.length; ++index) {
                newDataset.data.push(randomScalingFactor());
            }

            config.data.datasets.push(newDataset);
            window.myLine.update();
        });

        $('#addData').click(function() {
            if (config.data.datasets.length > 0) {
                var month = MONTHS[config.data.labels.length % MONTHS.length];
                config.data.labels.push(month);

                for (var index = 0; index < config.data.datasets.length; ++index) {
                    config.data.datasets[index].data.push(randomScalingFactor());
                }

                window.myLine.update();
            }
        });

        $('#removeDataset').click(function() {
            config.data.datasets.splice(0, 1);
            window.myLine.update();
        });

        $('#removeData').click(function() {
            config.data.labels.splice(-1, 1); // remove the label first

            config.data.datasets.forEach(function(dataset, datasetIndex) {
                dataset.data.pop();
            });

            window.myLine.update();
        });
        /*********************************  fin panel control **********************************/
		
}); //fin custom.js