$(document).ready(function() {
	$('.burger-menu').click(function() {
		$('.burger-menu').toggleClass('active');
		$('.open-burger-menu').toggleClass('active');
		$('.burger-menu-nav').toggleClass('active');
		$('body').toggleClass('fixed-page');
	});
	$('.burger-menu-nav a').click(function(){
		$('.burger-menu').toggleClass('active');
		$('.open-burger-menu').toggleClass('active');
		$('.burger-menu-nav').toggleClass('active');
		$('body').toggleClass('fixed-page');
	});
});