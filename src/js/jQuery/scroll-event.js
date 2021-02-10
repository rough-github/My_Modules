$(window).on("scroll", function() {
	// 画面のトップの位置の取得
	let scrollTop = $(window).scrollTop();
	$("p > span").text(scrollTop);


	// 一番下までスクロールしたことを示す
	let posBottom = $(document).height() - window.innerHeight;
	if(scrollTop >= posBottom) {
		$("p").addClass('scrollBottom');
	} else {
		$('p').removeClass("scrollBottom");
	}
})
