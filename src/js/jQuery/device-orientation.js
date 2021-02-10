if(navigator.userAgent.indexOf("iPhone") > 0 ||
	navigator.userAgent.indexOf("iPad") > 0 ||
	navigator.userAgent.indexOf("Android") > 0
) {
	$(window).on("load orientationChange resize", function() {
		if(window.innerWidth < window.innerHeight) {
			$("body").addClass("portrait").removeClass('landscape');
		} else if(window.innerWidth > window.innerHeight) {
			$("body").addClass("landscape").removeClass('portrait');
		}
	})
}else {
	$("body").css({
		backgroundColor: "#777"
	})
}
