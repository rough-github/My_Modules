$(function() {
	const thisTicker = $(".ticker");
	const tickerUl = thisTicker.find("ul");
	const tickerLl = tickerUl.find("li");
	const liFirst = tickerUl.find("li:first");

	liFirst
	.css({
		display: "block",
		opacity: "0",
		zIndex: "98"
	})
	.stop()
	.animate({
		opacity: "1"
	}, 1000, "linear")
	.addClass("showlist");

	setInterval(function() {
		const showLi = thisTicker.find(".showlist");
		showLi
		.animate({
			opacity: "0"
		}, 1000, "linear", function() {
			$(this)
				.next()
				.css({
					display: "block",
					opacity: "0",
					zIndex: "99"
				})
				.animate({
					opacity: "1"
				}, 1000, "swing")
				.addClass("showlist")
				.end()
				.appendTo(tickerUl)
				.css({
					display: "none",
					zIndex: "98"
				})
				.removeClass("showlist")
		})
	}, 6000)
})

$(function () {
	const thisTicker1 = $(".ticker1");
	const tickerUl1 = thisTicker1.find("ul");
	const tickerLl1 = tickerUl1.find("li");
	const listFirst1 = tickerUl1.find("li:first");
	const listHeight = tickerLl1.height();

	listFirst1
		.css({
			top: listHeight,
			display: "block",
			opacity: "0",
			zIndex: "98"
		})
		.stop()
		.animate({
			top: "0",
			opacity: "1"
		}, 500, "linear")
		.addClass("showlist");

	setInterval(function () {
		const showLi1 = thisTicker1.find(".showlist");
		showLi1
			.animate({
				top: -(listHeight),
				opacity: "0"
			}, 500, "linear")
			.next()
			.css({
				top: listHeight,
				display: "block",
				opacity: "0",
				zIndex: "99"
			})
			.animate({
				top: "0",
				opacity: "1"
			}, 500, "linear")
			.addClass("showlist")
			.end()
			.appendTo(tickerUl1)
			.css({
				zIndex: "98"
			})
			.removeClass("showlist")
	}, 6000)
})

$(function () {
	const thisTicker2 = $(".ticker2");
	const tickerUl2 = thisTicker2.find("ul");
	const tickerLl2 = tickerUl2.find("li");
	const listFirst2 = tickerUl2.find("li:first");
	const listWidth = tickerLl2.width();

	listFirst2
		.css({
			left: listWidth,
			display: "block",
			opacity: "0",
			zIndex: "98"
		})
		.stop()
		.animate({
			left: "0",
			opacity: "1"
		}, 500, "linear")
		.addClass("showlist");

	setInterval(function () {
		const showLi2 = thisTicker2.find(".showlist");
		showLi2
			.animate({
				left: -(listWidth),
				opacity: "0"
			}, 500, "linear")
			.next()
			.css({
				left: listWidth,
				display: "block",
				opacity: "0",
				zIndex: "99"
			})
			.animate({
				left: "0",
				opacity: "1"
			}, 500, "linear")
			.addClass("showlist")
			.end()
			.appendTo(tickerUl2)
			.css({
				zIndex: "98"
			})
			.removeClass("showlist")
	}, 6000)
})
