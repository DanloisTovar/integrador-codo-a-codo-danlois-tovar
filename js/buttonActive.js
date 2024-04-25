function buttonActive() {
	$(document).ready(function () {
		$('.navbar-nav a').on('click', function () {
			$('.navbar-nav').find('li.active').removeClass('active');
			$(this).parent('li').addClass('active');
		});
	});
	console.log('Botones activados!');
}
