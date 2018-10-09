$(document).ready(function() {

	(function () {
		$('.menu-wrapper').on('click', function() {
			$('.hamburger-menu').toggleClass('animate');
		})
	})();
	
	/*$(".parallax-window").css("min-height", $(window).height());*/


	$(window).scroll(function(){ //исчезновение и появления кнопки "написать сообщение""
    var win=$(window);
 
    if(win.scrollTop()<180){
     $('.scroll-top').fadeOut(700)
    }else{
     $('.scroll-top').fadeIn(900)
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