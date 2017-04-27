$('.accordion_content').mCustomScrollbar();
		$('.accordion_link').on('click', function(){
			if ($(this).hasClass('active')) {
				return
			}
			$('.accordion_link.active').next().slideUp();
			$('.accordion_link.active').removeClass('active');
			$(this).next().slideDown();
			$(this).addClass('active');
		});