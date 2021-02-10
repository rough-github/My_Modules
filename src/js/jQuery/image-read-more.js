$(function () {
	let setArea = $('#imgLoad');
	let imgPass = '../../img/img1';
	let imgType = '.jpg';
	let loadNum = 5;
	let maxNum = 25;
	let fadeSpeed = 1000;
	let btnTxt = 'もっと見る';

	setArea.append('<div id="loadArea"></div><a href="javascript:void(0);" id="moreBtn">' + btnTxt + '</a>');

	let loadArea = setArea.find('#loadArea');
	let moreBtn = setArea.find('#moreBtn');

	moreBtn.click(function () {
		let loadImg = loadArea.find('img');
		let imgLength = loadImg.length;
		let loopCont = imgLength + loadNum;

		if (loopCont < maxNum) {
			$.each(new Array(loadNum), function (i) {
				loadArea.append('<img src="' + imgPass + (imgLength + (i + 1)) + imgType + '">');
			});
		} else if (loopCont >= maxNum) {
			let overCont = maxNum - imgLength;

			$.each(new Array(overCont), function (i) {
				loadArea.append('<img src="' + imgPass + (imgLength + (i + 1)) + imgType + '">');
			});

			moreBtn.remove();
		}

		loadArea.find('img').on('load', function () {
			$(this).animate({ opacity: '1' }, fadeSpeed);
		});
	});

	$(document).on("ready", function () {
		moreBtn.click();
	});
});
