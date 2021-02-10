let setFilter = $("#filterBtn");
let filterBtn = setFilter.find("a");
let btnAll = $(".allItem");
let setList = $("#filterList");
let filterList = setList.find("li");
let listWidth = filterList.outerWidth();

filterBtn.click(function () {
	if (!($(this).hasClass('active'))) {
		var filterClass = $(this).attr('class');

		filterList.each(function () {
				// クリックした種類に当てはまるもの
			if ($(this).hasClass(filterClass)) {
				$(this).css({ display: 'block' }).stop().animate({ width: listWidth }, 1500);
				$(this).find('*').stop().animate({ opacity: '1' }, 1500);
			} else {
				// 指定した種類ではなかった
				$(this).find('*').stop().animate({ opacity: '0' }, 1000);
				$(this).stop().animate({ width: '0' }, 1000, function () {
					$(this).css({ display: 'none' });
				});
			}
		});
		filterBtn.removeClass('active');
		$(this).addClass('active');
	}
});

btnAll.click(function () {
	filterList.each(function () {
		$(this).css({ display: 'block' }).stop().animate({ width: listWidth }, 1500);
		$(this).find('*').stop().animate({ opacity: '1' }, 1500);
	});
});

btnAll.click();
