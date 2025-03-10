(function ($) {
	"use strict";


	//SubMenu Dropdown Toggle
	if ($('.menu-area li.menu-item-has-children ul').length) {
		$('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {



		//Dropdown Button
		$('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		})

		// Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').toggleClass('mobile-menu-visible');
			$('.mobile-nav-toggler .fas').toggleClass('fa-bars').toggleClass('fa-close');
			$('.mobile-nav-toggler').toggleClass('close-btn');
		});
		

		
	}





	/*=============================================
		=     Menu sticky & Scroll to top      =
	=============================================*/
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$("#sticky-header").removeClass("sticky-menu");
			$('.scroll-to-target').removeClass('open');

		} else {
			$("#sticky-header").addClass("sticky-menu");
			$('.scroll-to-target').addClass('open');
		}
	});




	/*=============================================
		=          Data Background               =
	=============================================*/
	$("[data-background]").each(function () {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})



	/*=============================================
		=    		 Main Slider		      =
	=============================================*/
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		BasicSlider.on('init', function (e, slick) {
			var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
			doAnimations($firstAnimatingElements);
		});
		BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
			var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
			doAnimations($animatingElements);
		});
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 5000,
			dots: false,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: false, arrows: false } }
			]
		});

		function doAnimations(elements) {
			var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
			elements.each(function () {
				var $this = $(this);
				var $animationDelay = $this.data('delay');
				var $animationType = 'animated ' + $this.data('animation');
				$this.css({
					'animation-delay': $animationDelay,
					'-webkit-animation-delay': $animationDelay
				});
				$this.addClass($animationType).one(animationEndEvents, function () {
					$this.removeClass($animationType);
				});
			});
		}
	}


	/*=============================================
		=    		Brand Active		      =
	=============================================*/
	$(document).ready(function () {
		var $slider = $('.brand-active');

		// Check if the number of slides is less than or equal to 5
		if ($slider.find('.brand-item').length <= 5) {
			// Clone slides to ensure infinite loop even with 5 or fewer slides
			$slider.find('.brand-item').clone().appendTo($slider);
		}

		// Initialize Slick slider
		$slider.slick({
			dots: false,
			infinite: true,  // Ensure infinite is true
			speed: 1000,
			autoplay: false,
			autoplaySpeed: 2000,  // Adjust autoplay speed for smooth transition
			arrows: true,
			slidesToShow: 5,
			slidesToScroll: 1,    // Change to 1 for smoother scrolling
			prevArrow: '<button class="slick-prev"></button>',
			nextArrow: '<button class="slick-next"></button>',
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
						infinite: true,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
						arrows: true,  // Show arrows on smaller screens
					}
				},
				{
					breakpoint: 530,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
						arrows: true,  // Show arrows on smaller screens
					}
				},
			]
		});
	});


	function wowAnimation() {
		var wow = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 0,
			mobile: false,
			live: true
		});
		wow.init();
	}


})(jQuery);

$(document).ready(function () {
	$('.view-btn').on('click', function () {
		var target = $(this).data('target');
		var images = [];

		$(target + ' .image-item').each(function () {
			var src = $(this).data('src');
			var caption = $(this).data('caption');

			images.push({
				src: src,
				opts: {
					caption: caption
				}
			});
		});

		$.fancybox.open(images, {
			loop: true,
			hash: ""
		});
	});
});