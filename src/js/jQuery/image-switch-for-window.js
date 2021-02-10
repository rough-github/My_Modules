let setImg = $(".switch");
let namePc = "_pc";
let nameSp = "_sp";
let switchWidth = 640;

setImg.each(function() {
	let selfImg = $(this);

	function switchImg() {
		if(window.innerWidth > switchWidth) {
			// 画像の名前を変更
			selfImg.attr("src", selfImg.attr('src').replace(nameSp, namePc))
		} else {
			selfImg.attr('src').replace(namePc, nameSp);
		}
	}

	$(window).on("load orientationchange resize", function() {
		switchImg();
		setTimeout(function() {
			setImg.css({
				visibility: "visible"
			}, 500)
		})
	})
})
