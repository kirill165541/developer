var slideNow = 1;
var slideCount = $('.items-slides').children().length;
var translateWidth = 0;
var navBtnId = 0;

function nextSlide() {
	if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
		$('.item-slide').css({'transform': 'translate(0, 0)',
            '-webkit-transform': 'translate(0, 0)',
            '-ms-transform': 'translate(0, 0)',});
		slideNow = 1;
	}
	else {
		translateWidth = (-30 -$('.item-slide').width())*(slideNow);
		$('.item-slide').css({'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',});
		slideNow++;
	}
}

function prevSlide() {
	if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
		translateWidth = (-30 - $('.item-slide').width())*(slideCount-1);
		$('.item-slide').css({'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',});
		slideNow = slideCount;
	}
	else {
		translateWidth = (-30 - $('.item-slide').width())*(slideNow-2);
		$('.item-slide').css({'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',});
		slideNow--;
	}
}

$(document).ready(function() {
	$('.btn-right').click(function() {

		nextSlide();
	});

	$('.btn-left').click(function() {

		prevSlide();
	});

	$('.dots span').click(function(){
		navBtnId = $(this).index();
		if (navBtnId+1 == 1) {
			$('.item-slide').css({'transform': 'translate(0, 0)',
            '-webkit-transform': 'translate(0, 0)',
            '-ms-transform': 'translate(0, 0)',});
            slideNow = navBtnId + 1;
		} else {
			translateWidth = (-30 -$('.item-slide').width())*(navBtnId);
			$('.item-slide').css({'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',});
            slideNow = navBtnId + 1;
		}
	});

});