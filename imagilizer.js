$(document).ready(function(){
	$('img:first').addClass('active');
	$('.active').clone().appendTo('#panel');
	$('#panel .active').removeAttr('width');

	$('#sidebar img').click(function(){
		$('#panel .active').remove();
		$('#panel').remove('.active');
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.active').clone().hide().appendTo('#panel');
		$('#panel .active').fadeIn(800);
		$('#panel .active').removeAttr('width');
	});





})
