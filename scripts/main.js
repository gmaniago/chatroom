'use strict';

$(document).ready(function(){

	$('#textbox').keypress(function(event){

		if ( event.which == 13) {

			if ( $('#enter').prop('checked') ){

				console.log('enter pressed, checkbox is checked');
				event.preventDefault();
			}
		}

	});
		$('#send').click(function(){
			var username = '<span> You: </span>';
			var newMessage = $('#textbox').val();

			$('#textbox').val('');

			var prevState = $('#container').html();

			$('#container').html(prevState +'<br>'+ username + newMessage);

			$('#container').scrollTop($('#container').prop('scrollHeight'));
		});
});







// 	$('#textbox').keypress(function(event){
// 		console.log(event.which);
// 		console.log('clicked');
// 		if($('input[name=check]:checked').val()){
// 			if (event.which == 13) {
// 				console.log('enter was clicked')
// 				// if ( $('#enter').prop('checked') ){

// 				// 	console.log('enter pressed, checkbox is checked');
// 				// }
// 			}
// 		} else {
// 			console.log('doing another thing instead');
// 		}

// 	});
// });