
		$(window).on('scroll', function(){
			if ($(window).scrollTop() > $(window).height()) {
				$('.upstairs').css('transform', 'none');
			} else {
				$('.upstairs').css('transform', 'translate(0, 60px)');	
			}
		});
		$('.upstairs').on('click', function() {
			$('body').animate({
				scrollTop: 0
			})
		});