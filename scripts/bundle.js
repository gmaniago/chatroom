(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(document).ready(function () {

	$('#textbox').keypress(function (event) {

		if (event.which == 13) {

			if ($('#enter').prop('checked')) {

				console.log('enter pressed, checkbox is checked');
				event.preventDefault();
			}
		}
	});
	$('#send').click(function () {
		var username = '<span> You: </span>';
		var newMessage = $('#textbox').val();

		$('#textbox').val('');

		var prevState = $('#container').html();

		$('#container').html(prevState + '<br>' + username + newMessage);

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

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map