$(document).ready(function() {
	$('.ryu').mouseenter(function() {
		$('.ryu-still').hide();
		$('.ryu-ready').show();	
	})
	.mouseleave(function() {
		$('.ryu-ready').hide();
		$('.ryu-still').show();	
	})
	.mousedown(function() {
		playHadouken();
// play hadouken sound
		$('.ryu-ready').hide();
		$('.ryu-throwing').show();	
		$('.hadouken').show().animate(
			{'left': '1100px'},
			500,
			function() {
			  $(this).hide();
			  $(this).css('left', '600px');
			});
	})
// ryu goes back to his ready position	
	.mouseup(function() {
		$('.ryu-throwing').hide();
		$('.ryu-ready').show();
	});
});	
	function playHadouken() {
    	$('#hadouken-sound')[0].volume = 0.5;
    	$('#hadouken-sound')[0].load();
    	$('#hadouken-sound')[0].play();
}
/* play coolmusic sound	
.keydown(function() {
		playCoolmusic();

		$('.ryu-still').hide();
		$('.ryu-coolmusic').show();	
					
	})

function playCoolmusic() {
    	$('#hadouken-sound')[0].volume = 0.5;
    	$('#hadouken-sound')[0].load();
    	$('#hadouken-sound')[0].play();
}

play coolmusic sound*/
