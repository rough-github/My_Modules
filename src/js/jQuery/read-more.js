$(function () {
	let cutElm = $('p');
	let cutCount = 100;
	let openTxt = '… 続きを見る';
	let closeTxt = '[×] 閉じる';

	cutElm.each(function () {
		let self = $(this);
		let selfText = self.text();
		let textLength = selfText.length;
		let textTrim = selfText.substr(0, cutCount);

		function textTrimming() {
			self
				// 100文字だけ表示
				.html(textTrim + '<a href="javascript:void(0);" class="textOpen">' + openTxt + '</a>')
				.css({ visibility: 'visible' });

			self
				// 全部表示
				.find('.textOpen')
				.on('click', function () {
					self
						.html(selfText)
						.append('<a href="javascript:void(0);" class="textClose">' + closeTxt + '</a>');

					self
						.find('.textClose')
						.on('click', function () {
							textTrimming();
						});
				});
		}

		if (cutCount < textLength) {
			textTrimming();
		} else if (cutCount >= textLength) {
			self.css({ visibility: 'visible' });
		}
	});
});
