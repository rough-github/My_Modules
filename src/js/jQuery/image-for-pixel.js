// デバイスピクセル比を調べる
if(window.devicePixelRatio === 1) {
	$('.deviceImg').attr('src', "../../../../img/img1.jpg");
} else if(window.devicePixelRatio === 2) {
	$('.deviceImg').attr('src', "../../../../img/img2.jpg");
} else if(window.devicePixelRatio === 3) {
	$('.deviceImg').attr('src', "../../../../img/img3.jpg");
}
