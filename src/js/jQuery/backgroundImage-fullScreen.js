$('body').prepend('<img src="../../../../img/img1.jpg" id="fullScreen">');

$(function () {

	let setFull = $('#fullScreen');
	let fadeSpeed = 500;

	// 画像の比率
	let imgRatio = setFull.width() / setFull.height();

	// 画像を画面サイズに調節する
	function imgFit() {
		// 画面横幅
		let wdWidth = $(window).width();
		let wdHeight = $(window).height();
		// 画面縦幅を画像ピクセル比に沿って拡大
		let setHeight = Math.round(wdWidth / imgRatio);

		if (setHeight < wdHeight) {
			setHeight = $(window).height();
			wdWidth = Math.round(setHeight * imgRatio);
		}

		// 天地中央寄せ
		setFull.css({
			marginTop: Math.round(-setHeight / 2),
			marginLeft: Math.round(-wdWidth / 2),
			width: wdWidth,
			height: setHeight
		});
	}

	$(window).on('resize', function () { imgFit(); });
	imgFit();

	setFull.css({
		visibility: 'visible',
		opacity: '0'
	}).animate({ opacity: '1' }, fadeSpeed);
});
