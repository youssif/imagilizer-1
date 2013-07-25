$(document).ready(function(){
	$('img:first').addClass('active');
	$('.active').clone().appendTo('#panel');
	$('#panel .active').removeAttr('width');
	var data_caption = $('#panel .active').data('caption');
	$('.caption').html('<h2 class = "photo_label">'+data_caption+'</h2>');

	$('#sidebar img').click(function(){
		$('#panel .active').remove();
		$('#panel').remove('.active');
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.active').clone().hide().appendTo('#panel');
		$('#panel .active').fadeIn(800);
		$('#panel .active').removeAttr('width');
		var data_caption = $('#panel .active').data('caption');
		$('.caption').html('<h2 class = "photo_label">'+data_caption+'</h2>');
	});



})
