$(function () {
   $('.header__btn').on('click', function () {
       $('.rightside-menu').removeClass('rightside-menu--close');
   });
    
   $('.rightside-menu__close').on('click', function () {
       $('.rightside-menu').addClass('rightside-menu--close');
   });
    
    $('.top__slider').slick({
        dots: true, //врубили дотсы
        arrows: false, // вырубили стрелочки
        fade: true, // чтобы менялось плавно
        autoplay: true
        
    });
    $('.contact-slider').slick({
        slidesToShow: 10, //показывает сразу 10 картинок
        slidesToScroll: 10, // перемотка при нажатии по 10 штук
        dots: true, //врубили дотсы
        arrows: false, // вырубили стрелочки
        
    });
    
    $('.article-slider__box').slick({
        prevArrow: '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slider-left.svg" alt="arrow left"></button>',
        nextArrow: '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slider-right.svg" alt="arrow right"></button>'
    
    });
    
    var mixer = mixitup('.gallery__inner', {
       load: {
         filter: '.category-living'
        }                 
    });
    $(".footer__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
    $(".contact__form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
       
   })
