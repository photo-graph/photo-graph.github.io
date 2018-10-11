$(document).ready(function() {

	/*Скролинг меню*/
	$(function(){
		$("a[href^='#']").click(function(){
			var _href = $(this).attr("href");
			if($("html, body").width() > 1000){
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"}, {duration: 1500});

			}else{
				$("html, body").animate({scrollTop: $(_href).offset().top+"px"}, {duration: 1500});
				$(".hamburger-menu").removeClass("animate");
				$(".top-menu-1, .top-menu-2").css('display', 'none');
			}

			return false;
		});
	});

	$(window).scroll(function(){
		if($(this).scrollTop() > 10){
			$(".hamburger-menu").removeClass("animate");
			$(".top-menu-1, .top-menu-2").slideUp(250);
		}
	});

	/* Кнопка мини-меню*/
	(function () {
		$('.menu-wrapper').on('click', function() {
			$('.hamburger-menu').toggleClass('animate');
		})
	})();

	$(".menu-wrapper-1").click(function(){
		if($(".hamburger-menu").hasClass('animate')){
			$(".top-menu-1").slideDown(300);
		}else{
			$(".top-menu-1").slideUp(300);
		}
		return;
	});
	
	$(".menu-wrapper-2").click(function(){
		if($(".hamburger-menu").hasClass('animate')){
			$(".top-menu-2").slideDown(300);;
		}else{
			$(".top-menu-2").slideUp(300);
		}
		return;
	});




	/*$(".parallax-window").css("min-height", $(window).height());*/


	/*Кнопка ВВЕРХ*/

	$(window).scroll(function(){ //исчезновение и появления кнопки ВВЕРХ
    var win=$(window);
 
    if(win.scrollTop()<180){
     $('.scroll-top').fadeOut(700)
    }else{
     $('.scroll-top').fadeIn(900)
    }     
  });

  $(function(){
        $(".scroll-top").click(function(){ // Скролинг кнопки ВВЕРХ
                $("html, body").animate({scrollTop: $(".logo").offset().top+"px"}, {duration: 1500});
                /* $(".hamburger-menu").removeClass("animate");
               $(".top-menu-1").css('display', 'none');*/
                return false;
        });
	});




  $(window).scroll(function(){ //исчезновение и появления кнопки "верхней полоски меню"
    var win=$(window);
 
    if(win.scrollTop()<800){
     $('.header-fix-menu').css('top',-150)
    }else{
     $('.header-fix-menu').css('top',0)
    }     
  });




	//Parallax effect
	$('.parallax-window').parallax({imageSrc: 'img/parallax-fon2.jpg'});


	//Magnific Popup
	$('.wedding').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
          enabled:true
        }
  // other options
	});

	$('.birthday').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
          enabled:true
        }
  // other options
	});

	$('.kids').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
          enabled:true
        }
  // other options
	});
	
	$('.other').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery: {
          enabled:true
        }
  // other options
	});

	//Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});


	
});