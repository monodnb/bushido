// remap jQuery to $
(function ($) {


	function bsdPostClickInteraction() {
		$(".bsdpf-post").on("tap", function () {
			alert("clicked");
			$(".bsdpf-post").not($(this)).removeClass("fastest-transition").addClass("normal-transition grayscale");
			$(this).removeClass("normal-transition grayscale").addClass("fastest-transition");
		});
	}

	function bsdPortfolioScroll() {
		alert("scroll enabled");
		$(".bsdpf-post:first").removeClass("offscreen fastest-transition grayscale").addClass("onscreen slowest-transition");
		$(".bsdpf-post:nth-child(2)").removeClass("offscreen fastest-transition grayscale").addClass("onscreen slowest-transition");
		$(window).scroll(function () {
			$(".bsdpf-post").each(function () {
				if ($(this).visible(true)) {
					$(this).removeClass("offscreen fastest-transition grayscale").addClass("onscreen slowest-transition");
				} else {
					$(this).removeClass("onscreen slowest-transition").addClass("offscreen fastest-transition grayscale");
				}
			});
		});
	}


	/*----------------------------------------------------*/
	/* PORTFOLIO AJAX PAGINATION
	/*----------------------------------------------------*/


	function bsdPortfolioAjaxPagination() {
		alert("pagination enabled");
		$(window).on("scroll", function () {
			if ($(window).scrollTop() + $(window).height() == $(document).height()) {
				var pageLink = $("#bsdpf-pagination a").attr("href");
				$('#bsdpf').append('<div id="ajax-content-holder" style="display:none;"></div><div id="ajax-content-nextlink" style="display:none;"></div>');
				$('#ajax-content-nextlink').load(pageLink + ' #bsdpf-pagination', function (response, status) {
					if (status == "success") {
						var nextPage = $('#ajax-content-nextlink').find('#bsdpf-pagination a:nth-child(2)');
						if (!nextPage.length) {
							console.log('no more links');
							$('body #bsdpf #bsdpf-pagination').empty().append("<p>No More Links</p>");
						}
						var nextPageLink = nextPage.attr("href");
						$('body #bsdpf #bsdpf-pagination a').attr("href", nextPageLink);
						$('#bsdpf').find('#ajax-content-nextlink').remove();
					}
				});
				$('#ajax-content-holder').load(pageLink + ' #bsdpf-grid > *', function (response, status) {
					if (status == "success") {
						var postsToLoad = $('#ajax-content-holder').children().clone(true, true);
						postsToLoad.appendTo('body #bsdpf #bsdpf-grid');
						$(window).resize();
						$('#bsdpf').find('#ajax-content-holder').remove();
					}
				});
			}
		});
	}


	$(document).bind("pageshow", function(){
		alert("page show");
		bsdPostClickInteraction();
		bsdPortfolioScroll();
		bsdPortfolioAjaxPagination();
	});

})(window.jQuery);