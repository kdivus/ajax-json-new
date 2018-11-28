var handleContent = function(){
	var preloader = $('.preloader');
	var ajaxLoader = '<img class = "ajax-loader" src = "/img/ajax-loader.gif" />';
	$('.btn').click(function(e){
		e.preventDefault();
		
		$.ajax({
			url: "data/users.json",
			type: "GET",
			data: {
				"id" : 1
			},
			beforeSend: function(){
				preloader.empty();
				preloader.append(ajaxLoader);
			},		
			success: function(result, status, xhr){
				/* Ponekad je potrebno parsirati JSON koji dobijemo u rezultatu u JS objekt*/
				// var users = $.parseJSON(result);
				// console.log(users);
			},
			error: function(xhr, status, error){
				if(error){
					preloader.empty();
					preloader.text("An error occured while proccessing your request! Please try again later!");
					setTimeout(function(){
						preloader.empty();
					}, 5000);
				}
			},
			complete: function(){
				preloader.empty();
			}
		});
	});
};

var App = function(){
	return {
		init: function(){
			handleContent();
		}
	}
}();