$( "#top-bar .toggle" ).click(function() {

	$(this).toggleClass('open').parent().toggleClass('open');
	$('#top-bar .container').toggle( "slow");

});

$(document).ready(function(){
	$('.intro-slider').css({'visibility': 'visible'});
	var elementSlider = $('.intro-slider .bxslider').bxSlider({
		nextText: '',
		prevText: '',
		pager: false,
		controls:true,
		mode: 'vertical',
		auto:true,
	});	

	$(".bx-next").click(function() {
			elementSlider.goToPrevSlide();
			elementSlider.startAuto();
			return false;    
	});

	$(".bx-prev").click(function() {
			elementSlider.goToNextSlide();
			elementSlider.startAuto();
			return false;    
	});
});
		$('#tweets').tweetable({
			username: 'alfonzodiez', 
			time: true,
			rotate: true,
			speed: 4000, 
			limit: 5,
			replies: false,
			position: 'append',
			failed: "Disculpe, estamos presentando inconvenientes.",
			loading: "Cargando tweets...",
			html5: true,
			onComplete:function($ul){
				$('time').timeago();
			}
		});