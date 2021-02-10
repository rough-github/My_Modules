let setArea = $(".scrEvent");
let showHeight = 100;

setArea.css({
	display: "block",
	opacity: "0"
});

$(window).on('load scroll resize', function() {
	setArea.each(function() {
		let thisArea = $(this);
		let areaTop = thisArea.offset().top;

		if($(window).scrollTop() > (areaTop + showHeight) - $(window).height()) {
			thisArea.stop().animate({ opacity: "1" }, 500);
		} else {
			thisArea.stop().animate({ opacity: "0" }, 500)
		}
	})
})
