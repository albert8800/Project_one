$(document).ready(function() {

	$('#li_login').on('click', function () {


		var block = '<div class="div_bg_color"></div>';


		var modal = '<div class="box_auth" style="display: inline-block;">\
							<div class="box_auth_in">\
								<div>\
									<h2>SIGN IN</h2>\
								</div>\
								<div>\
									<input style="width: 200px;" type="text" placeholder="username"/>\
								</div>\
								<div>\
									<input style="width: 200px; margin-top: 10px;" type="text" placeholder="password"/>\
								</div>\
								<div class="box_auth_in_footer">\
								<input style="margin-top: 21px;" type="checkbox" />\
								<label style="margin-top: 23px;">Чужой компьютер</label>\
								<button>SIGN IN</button>\
								</div>\
							</div>\
						</div>\
					';


		$('.block_header').before(block);
		$('.div_bg_color').append(modal);


		var height = $(window).height();
		$('body').css("overflow","hidden");



				    
						$('.div_bg_color').on('click', function () {

							$(this).fadeOut( 800, function() {

						   		$('div_bg_color').remove();
						   		$('body').css("overflow","scroll");

							});

						});

		

		});



		//---------------------------------------------------

		if ($('#back-to-top').length) {

	    	var scrollTrigger = 100, 
	        backToTop = function () {

	            var scrollTop = $(window).scrollTop();

	            if (scrollTop > scrollTrigger) {

	                $('#back-to-top').addClass('show');

	            } else {

	                $('#back-to-top').removeClass('show');

	            }

	        };

	   		backToTop();

	   		 $(window).on('scroll', function () {
	    	    backToTop();
	    	});

		    $('#back-to-top').on('click', function (e) {

		        e.preventDefault();

		        $('html,body').animate({

		            scrollTop: 0

		        }, 700);
		    });

		}


		//---------------------------------------------------

		var eq = $('img.slide_show').index();
		$('.icon-radio-unchecked').eq(eq).addClass('icon-radio-unchecked-hover');


		$('.icon-radio-unchecked').on('click', function () {


			var eq = $(this).index();

			$('.icon-radio-unchecked').removeClass('icon-radio-unchecked-hover');
			$(this).addClass('icon-radio-unchecked-hover');


			$('img.slide_box').addClass('slide_hide');
			$('img.slide_box').removeClass('slide_show');

			$('img.slide_box').eq(eq).addClass('slide_show');
			$('img.slide_box').eq(eq).removeClass('slide_hide');


		});

		$('#slide_right').on('click', function () {

			var length = $('img.slide_box').length;
			
			var eq = $('img.slide_show').index();

			var next = eq + 1;

			if(length == next) {

				next = 0;
			}

			$('img.slide_box').eq(eq).addClass('slide_hide');
			$('img.slide_box').eq(eq).removeClass('slide_show');

			$('img.slide_box').eq(next).addClass('slide_show');
			$('img.slide_box').eq(next).removeClass('slide_hide');

			//$('img.slide_box').next().addClass('slide_show');
			$('.icon-radio-unchecked').eq(eq).removeClass('icon-radio-unchecked-hover');
			$('.icon-radio-unchecked').eq(next).addClass('icon-radio-unchecked-hover');		


		});

		$('#slide_left').on('click', function () {

			var length = $('img.slide_box').length;
			
			var eq = $('img.slide_show').index();

			var next = eq - 1;

			if(next == 0) {

				next = 0;
			}

			$('img.slide_box').eq(eq).addClass('slide_hide');
			$('img.slide_box').eq(eq).removeClass('slide_show');

			$('img.slide_box').eq(next).addClass('slide_show');
			$('img.slide_box').eq(next).removeClass('slide_hide');

			//$('img.slide_box').next().addClass('slide_show');
			$('.icon-radio-unchecked').eq(eq).removeClass('icon-radio-unchecked-hover');
			$('.icon-radio-unchecked').eq(next).addClass('icon-radio-unchecked-hover');
			






		});


		//----------------------------------------------------------------

			$('.li_class_menu').on('click', function () {

			var lang = $(this).find('a').text();

			var lang_one = $('.li_class_menu_one').text();

			$('.li_class_menu_one').text(lang);
			
			$(this).find('a').text(lang_one);


		});


});