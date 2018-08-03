$(document).ready(function() {

	var scrollTop = $(window).scrollTop();

	//lock/unlock body scroll
	function lockBody() {
		if($(window).scrollTop()) {
		 	scrollTop = $(window).scrollTop();
		 	$('.wrapper').css({
		 		top: - (scrollTop)
		 	});
		}
		$('html,body').css({height: "100%", overflow: "hidden"});
	}
	function unlockBody() {
		$('html,body').css({height: "", overflow: ""});
		$('.wrapper').css({
			top: ''
		});
		window.scrollTo(0, scrollTop);
		window.setTimeout(function () {
			scrollTop = null;
		}, 0);
	}


	//tabs on JS
	$('.tab-toggle').on('click' , function() {

		$(this).closest('.tabs-header').find('.tab-toggle_active').removeClass('tab-toggle_active');
		$(this).addClass('tab-toggle_active');

		var dataTab = $(this).attr("data-tab");

		$(this).closest('.tabs-wrapper').find(".tab-content[data-tab]").removeClass('tab-content_active');
		$(this).closest('.tabs-wrapper').find(".tab-content[data-tab='"+dataTab+"']").addClass('tab-content_active');

		return false;
	});
	
	//object-fit polyfill
	objectFitImages('.cover-img')

	$('.accordion-header').on('click' , function(){
		var body = $(this).closest('.accordion-item').find('.accordion-body');

		$('.accordion-body').not(body).slideUp(300).closest('.accordion-item').removeClass('active');
		body.slideToggle(300).closest('.accordion-item').toggleClass('active');
	})

	$('.review-slider').slick({
		arrows: false,
		dots: true,
		vertical: true
	});

	$('.mobile-menu').on('click' ,function() {
		$('.header-nav').slideToggle(300);
	});

}); 
