// ready - DOMが構築されたら実行される。
// load - 使用される画像などを含め、ページが完全に読み込まれたら実行される。

$('body').prepend(
	'<div id="fullScreen">' +
	'<img src="../../img/img1.jpg">' +
	'<img src="../../img/img2.jpg">' +
	'<img src="../../img/img3.jpg">' +
	'<img src="../../img/img4.jpg">' +
	'<img src="../../img/img5.jpg">' +
	'</div>'
);

$(window).on("load", function() {

	let setFull = $('#fullScreen');
	let fullImg = setFull.children('img');
	let fadeSpeed = 1000;
	let switchDelay = 5000;

	let imgRatio = fullImg.width() / fullImg.height();

	function imgFit() {
		let wdWidth = $(window).width();
		let wdHeight = $(window).height();
		let setHeight = wdWidth / imgRatio;

		if (setHeight < wdHeight) {
			setHeight = $(window).height();
			wdWidth = setHeight * imgRatio;
		}
		setFull.css({
			height: wdHeight
		});
		fullImg.css({
			marginTop: -setHeight / 2,
			marginLeft: -wdWidth / 2,
			width: wdWidth,
			height: setHeight
		});
	}

	$(window).on('resize', function () { imgFit(); });
	imgFit();

	fullImg.css({
		visibility: 'visible',
		opacity: '0'
	})
		.first()
		.animate({ opacity: '1' }, fadeSpeed);

	setInterval(function () {
		var firstImg = setFull.find('img:first');
		firstImg.animate({
			opacity: '0' }, fadeSpeed)
		.next()
		.animate({ opacity: '1' }, fadeSpeed)
		.end()
		.appendTo(setFull);
	}, switchDelay);
});
