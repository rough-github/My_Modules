// 最初からボタンが出現
$('body').append('<a href="#" id="fixedTop">スクロールトップ</a>');
$("#fixedTop").on('click', function() {
	$('html body').animate({scrollTop: "0"}, 500);
})

// ある場所から出現する
$('body').append('<a href="#" id="fixedTop2">スクロールトップ</a>');
const fixedTop = $("#fixedTop2");
fixedTop.on("click", function() {
	$('html body').animate({scrollTop: "0"}, 500);
});
$(window).on("load scroll resize", function() {
	let showTop = 100;
	if($(window).scrollTop() > showTop) {
		fixedTop.fadeIn("normal");
	} else {
		fixedTop.fadeOut("normal");
	}
})
