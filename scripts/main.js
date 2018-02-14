$(function(){
	//Scrollable links
	$('a.scroll-link').click(function(){
		var offset = -$('#main-nav').height();
		$.scrollTo($(this).attr('href'), {
			duration : 500,
			offset: offset
		});
		return false;
	});

	//Navbar 1
	$('.navbar-1-toggle').click(function(){
		$('body').toggleClass('navbar-1-active');
	});

	//Scroll animation
	AOS.init({
		offset: 0,
		duration: 800
	});

	//Misc
	$('[data-copy-to]').each(function(){
		$($(this).attr('data-copy-to')).html($(this).html());
	});

    //Scrollbar
    $(window).on('load resize', function(){
		$('.scrollbar-macosx').scrollbar({
	    });
    });

    $('.map-overlay-toggle, .map-overlay-toggle-icon').click(function(){
    	$(this).parents('.map-overlay-block').toggleClass('active');
    });

    if(bsIs(['xs', 'sm'])){
	    setTimeout(function(){
			$('body').removeClass('navbar-1-active');
		}, 2000);
	}
	else{
		$('body').removeClass('navbar-1-active');
	}

	function bsIs(env){
		if(Array.isArray(env)){
			for(var i = 0; i < env.length; i++){
				if($('#environment-' + env[i]).is(':visible')){
					return true;
				}
			}
			return false;
		}
		else{
			return $('#environment-' + env).is(':visible');
		}
	}
});

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function() {
		navigator.serviceWorker.register('/sw.js').then(function(registration) {
			console.log('ServiceWorker registration successful with scope: ', registration.scope);
		}, function(err) {
			console.log('ServiceWorker registration failed: ', err);

		});
	});
}