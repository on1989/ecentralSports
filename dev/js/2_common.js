jQuery(document).ready(function($){
	$('.slider-block .tournaments').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow:'<i class="icon-arrow-left"></i>',
		nextArrow:'<i class="icon-arrow-right"></i>',
		responsive: [{
		breakpoint: 1200,
			settings: {
				slidesToShow: 2
			}
		}, {
			breakpoint: 480,
			settings: {
				slidesToShow: 1
			}
		}]
	});
	$(".search button").click(function(e){
		if($(this).parents('form').hasClass('open') === false){
			e.preventDefault();
			$(this).parents('form').toggleClass('open');
			$(this).parents('form').find('[type="text"],[type="search"]').focus();
		}
	});
	$('.search').mouseleave(function(){
		$(this).removeClass('open');
	});
	if($('.posts').length){
		$('.posts').each(function(){
			var postEl = $(this).children('.item');
			for (var i = 0; i < postEl.length; i += 3) {
				if (i < 2) {
					postEl.slice(i, i + 1).wrapAll('<div class="left-block"></div>');
				}
				var postEl = $(this).children('.item');
				if(i < 3){
					postEl.slice(i, i + 2).wrapAll('<div class="right-block"></div>');
				}
				var postEl = $(this).children('.item'),
					lastPost = postEl.length;
				if(i <= lastPost){
					postEl.slice(i, i + +lastPost).wrapAll('<div class="bottom-block"></div>');
				}
			}
		});
	}
	if($('.news.full-width').length){
		$('.news.full-width .items').each(function(){
			var postEl = $(this).children('.item');
			if(postEl.length === 5){
				for (var i = 0; i < postEl.length; i += 3) {
					if (i < 2) {
						postEl.slice(i, i + 1).wrapAll('<div class="left-block"></div>');
					}
					var postEl = $(this).children('.item');
					if(i < 6){
						postEl.slice(i, i + 4).wrapAll('<div class="right-block"></div>');
					}
				}
			}
			var postEl = $(this).children('.item');
			if(postEl.length === 7){
				$(this).addClass('seven-el')
				for (var i = 0; i < postEl.length; i += 3) {
					if (i < 3) {
						postEl.slice(i, i + 3).wrapAll('<div class="left-block"></div>');
					}
					var postEl = $(this).children('.item');
					if(i <= 7){
						postEl.slice(i, i + 4).wrapAll('<div class="right-block"></div>');
					}
				}
			}
		});
	}
	var scrollHeader = window.pageYOffset;
	window.onscroll = function() {
		var i = window.pageYOffset;
		scrollHeader > i ? $("header").css("top", "0px") : $("header").css("top", "-36px"), scrollHeader = i
	}
	if($('select').length){
		$('select').each(function(){
			var $this = $(this), numberOfOptions = $(this).children('option').length;
			$this.addClass('select-hidden');
			$this.wrap('<div class="select"></div>');
			$this.after('<div class="select-styled icon-chevron"></div>');
			var $styledSelect = $this.next('div.select-styled');
			$styledSelect.text($this.children('option').eq(0).text());
			var $list = $('<ul />', {
				'class': 'select-options'
			}).insertAfter($styledSelect);
			for (var i = 0; i < numberOfOptions; i++) {
				$('<li />', {
					text: $this.children('option').eq(i).text(),
					rel: $this.children('option').eq(i).val()
				}).appendTo($list);
			}
			var $listItems = $list.children('li');
			$styledSelect.click(function(e) {
				e.stopPropagation();
				$('div.select-styled.active').not(this).each(function(){
					$(this).removeClass('active').next('ul.select-options').hide();
				});
				$(this).toggleClass('active').next('ul.select-options').toggle();
			});
			$listItems.click(function(e) {
				e.stopPropagation();
				$styledSelect.text($(this).text()).removeClass('active');
				$this.val($(this).attr('rel'));
				$list.hide();
			});
			$(document).click(function() {
				$styledSelect.removeClass('active');
				$list.hide();
			});
		});
	}
});
