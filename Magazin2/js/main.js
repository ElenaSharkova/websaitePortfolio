$(function () {
   $('.top__slider').slick({
        dots: true, //врубили дотсы
        arrows: false, // вырубили стрелочки
        fade: true, // чтобы менялось плавно
        autoplay: true
        
    });
    $('.content__slider').slick({
        //dots: true, //врубили дотсы
        arrows: false, // вырубили стрелочки
        fade: true, // чтобы менялось плавно
        autoplay: true
        
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
    
    $('.menu-tabs__item').on('click', function (e){
        e.preventDefault(); //ссылки отменяют себе переход на другую страницу
        $('.menu-tabs__item').removeClass('menu-tabs__item--active');
        $(this).addClass('menu-tabs__item--active');
        $('.menu-tabs__content').removeClass('menu-tabs__content--active'); //убрали вообще весь контент из любого таба
        $($(this).attr('href')).addClass('menu-tabs__content--active');
    });
    
    $('.locals-menu__item').on('click', function (e){
        e.preventDefault(); //ссылки отменяют себе переход на другую страницу
        $('.locals-menu__item').removeClass('locals-menu__item--active');
        $(this).addClass('locals-menu__item--active');
        $('.locals-menu__content').removeClass('locals-menu__content--active'); //убрали вообще весь контент из любого таба
        $($(this).attr('href')).addClass('locals-menu__content--active');
    });
})