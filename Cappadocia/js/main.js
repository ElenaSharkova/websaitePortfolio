$(function(){
    $('.fairy-tail__slider').slick({
        fade: true, //сделали слайдер более плавным
        prevArrow: '<button type="button" class=" slick-btn slick-prev"><img src="images/arrow-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button type="button" class=" slick-btn slick-next"><img src="images/arrow-right.svg" alt="стрелка вправо"></button>',
        autoplay: true,
    }); //сделали слайдер
    
    $('.our-trip__slider').slick({
        fade: true, //сделали слайдер более плавным
        prevArrow: '<button type="button" class=" slick-btn slick-prev"><img src="images/arrow-left.svg" alt="стрелка влево"></button>',
        nextArrow: '<button type="button" class=" slick-btn slick-next"><img src="images/arrow-right.svg" alt="стрелка вправо"></button>',
        autoplay: true,
    }); //сделали слайдер
    
    $(".contacts__form").submit(function() { //Change
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

});