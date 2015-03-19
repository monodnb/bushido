// remap jQuery to $
(function ($) {
	var bsdClickedLink;
	var bsdProjectLink;
	var bsdThisProject;
	var bsdThisAjax;
	var bsdThisAjaxMedia;
	var bsdThisAjaxInfo;
	var bsdThisAjaxNav;
	var bsdThisAjaxClose;
	var ajaxContentHeight;
	var ajaxMediaHeight;
	var ajaxContentWidth;

	function bsdLightboxClick() {
		//ajax global setup
		$.ajaxSetup({
			cache: false
		});

		//link interaction
		$('body').on("click", '.bsdpf-post-icons > a', function (e) {
			e.preventDefault();
			//define needed variables
			bsdClickedLink = $(this);
			bsdClickedLink.toggleClass('current');
			$('.bsdpf-post-icons > a').not(bsdClickedLink).removeClass('current');

			bsdThisAjax = $('#content .bsdpf-post-ajax');
			bsdThisAjaxContent = bsdThisAjax.find('.ajax-content-wrap');
			bsdThisAjaxMedia = bsdThisAjax.find('.project-media');
			bsdThisAjaxInfo = bsdThisAjax.find('.project-info');
			bsdThisAjaxNav = bsdThisAjax.find('.project-navigation');
			bsdThisAjaxClose = bsdThisAjax.find('.project-close');


			if (bsdClickedLink.hasClass('current')) {
				openProject();
			} else {
				closeProject();
			}

			function openProject() {
				showLoader();
				loadProject();
				fadeOutProject();
				setTimeout(hideLoader, 1200);
			}

			function closeProject() {
				fadeOutProject();
				setTimeout(function () {
					bsdThisAjaxMedia.empty();
					bsdThisAjaxInfo.empty();
					bsdThisAjax.removeClass('popup');
					bsdThisAjax.css('height', '0');
				}, 600);
			}

			function showLoader() {
				bsdClickedLink.find('img').hide();
				bsdClickedLink.addClass('loading-bubbles');
			}

			function hideLoader() {
				if (bsdThisAjaxInfo.children().length > 0) {
					bsdClickedLink.find('img').fadeIn(600);
					bsdClickedLink.removeClass('loading-bubbles');
					bsdThisAjax.addClass('popup');
					ajaxContentHeight = $(window).outerHeight();
					bsdThisAjax.css('height', ajaxContentHeight);
					setTimeout(fadeInProject, 600);
				}
			}

			function loadProject() {
				bsdProjectLink = bsdClickedLink.attr("href");
				bsdThisAjaxMedia.load(bsdProjectLink + ' .post-media', function (response, status) {
					if (status == "success") {
						loadCarousel();
						ajaxMediaHeight = bsdThisAjaxMedia.outerHeight();
						bsdThisAjaxInfo.css('height', '370px');
					}
				});
				bsdThisAjaxInfo.load(bsdProjectLink + ' .project-info > *', function (response, status) {
					if (status == "success") {
						$(".custom-scroll").mCustomScrollbar({
							autoHideScrollbar: false,
							theme: "minimal-dark"
						});
					}
				});
				bsdThisAjaxNav.load(bsdProjectLink + ' .project-navigation > *');
			}

			function hideProject() {
				$('.ajax-content-wrap').hide();
			}


			function fadeInProject() {
				bsdThisAjaxContent.fadeIn(600);
				if (bsdThisAjaxMedia.find('.flexslider').length != 0) {
					bsdThisAjaxContent.animate({
						opacity: 1}, 600)
				}
				var ajaxContentOffset = bsdThisAjaxContent.offset();
				var scrollToPosition = ajaxContentOffset.top;
				$("html, body").animate({
					scrollTop: scrollToPosition
				}, 300);
			}

			function fadeOutProject() {
				$('.ajax-content-wrap').fadeOut(600);
			}


			function loadCarousel() {
				if (bsdThisAjaxMedia.find('.flexslider').length != 0) {
					bsdThisAjaxContent.css('opacity','0').show();
					$('.flexslider').flexslider({
						animation: "slide",
						slideDirection: "horizontal",
						slideshow: true,
						slideshowSpeed: 2000,
						animationDuration: 500,
						directionNav: true,
						controlNav: false,
						nextText:'',
						prevText:''
					});
				}
			}

			$('body').on("click", '.project-close', function (e) {
				closeProject();
			});
		});
	}

	$(document).ready(function () {
		bsdLightboxClick();
	});

})(window.jQuery);