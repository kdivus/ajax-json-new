var handleContent = function(){
	var contentDiv = '<div id = "content">';
	var clockDiv = '<div id = "clock">';
	var slider = '<input type = "range" id = "slider" value = "100" max = "150" min = "50">';
	
	$('body').prepend(contentDiv);
	$('#content')
		.addClass('content')
		.append(slider)
		.append(clockDiv); //dodaje element na kraj , prepend dodaje na početak
	$('#clock').addClass('clock');
	
	var mouseDown = false;
	$('#slider')
	    .mousedown(function(){
			mouseDown = true;
		})
		.mouseup(function(){
			mouseDown = false;
		})
		.mousemove(function(){
			if(mouseDown){
				$('#clock').css('font-size', $(this).val() + 'px');
			}
		});
	
	runClock();
	var interval = setInterval(runClock, 1000);
	
	function runClock(){
		var date = new Date();
		var hh = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
		var mm = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
		var ss = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
		$('#clock').text(hh + ':' + mm + ':' + ss);
	}
};

var App = function(){
	return {
		init: function(element){
			handleContent();
		}
	}
}();