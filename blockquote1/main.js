$('.bigbutton').on('click', function() {
	$(this).toggleClass('active');
	var color = $(this).css('background-color');
	console.log(color);
	$('#mainquote').css('color', color);
})
