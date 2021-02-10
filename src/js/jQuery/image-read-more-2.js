$(function () {
	let setArea = $('#imgLoad');
	let imgPass = '../../img/img1';
	let imgType = '.jpg';
	let linkPass = '../../img/img1';
	let linkType = '.jpg';
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
				loadArea
					.append('<a href="' + linkPass + (imgLength + (i + 1)) + linkType + '" target="_blank" class="modalBtn"><img src="' + imgPass + (imgLength + (i + 1)) + imgType + '"></a>');
			});
		} else if (loopCont >= maxNum) {
			let overCont = maxNum - imgLength;

			$.each(new Array(overCont), function (i) {
				loadArea
					.append('<a href="' + linkPass + (imgLength + (i + 1)) + linkType + '" target="_blank" class="modalBtn"><img src="' + imgPass + (imgLength + (i + 1)) + imgType + '"></a>');
			});

			moreBtn.remove();
		}

		loadArea
			.find('img')
			.on('load', function () {
				$(this).animate({ opacity: '1' }, fadeSpeed);
			});

		let mdwBtn = $('.modalBtn');
		let overlayOpacity = 0.7;
		let fadeTime = 500;

		mdwBtn
			.on('click', function (e) {
				e.preventDefault();

				let setMdw = $(this);
				let setHref = setMdw.attr('href');
				let wdHeight = $(window).height();

				$('body')
					.append('<div id="mdOverlay"></div><div id="mdWindow"><div class="mdClose">×</div><img src="' + setHref + '"></div>');

				$('#mdOverlay,#mdWindow')
					.css({
						display: 'block',
						opacity: '0'
					});
				$('#mdOverlay')
					.css({ height: wdHeight })
					.stop()
					.animate({ opacity: overlayOpacity }, fadeTime);
				$('#mdWindow')
					.stop()
					.animate({ opacity: '1' }, fadeTime);

				$(window)
					.on('resize', function () {
					let adjHeight = $(window).height();
					$('#mdOverlay').css({ height: adjHeight });
				});

				$('#mdOverlay,.mdClose')
					.on('click', function () {
						$('#mdWindow,#mdOverlay')
							.stop()
							.animate({ opacity: '0' }, fadeTime, function () {
								$('#mdOverlay,#mdWindow').remove();
							});
					});
			});
	});

	$(document).on("ready", function () {
		moreBtn.click();
	});
});
