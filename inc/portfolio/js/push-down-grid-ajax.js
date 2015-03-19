// remap jQuery to $
(function ($) {
	var bsdClickedLink;
	var bsdProjectLink;
	var bsdThisProject;
	var bsdThisAjax;
	var bsdThisAjaxMedia;
	var bsdThisAjaxInfo;
	var ajaxContentHeight;
	var ajaxContentWidth;
	
	function bsdPushDownPostClick() {
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

			bsdThisProject = bsdClickedLink.closest('.bsdpf-post');
			bsdThisAjax = bsdThisProject.find('.bsdpf-post-ajax');
			bsdThisAjaxContent = bsdThisAjax.find('.ajax-content-wrap');
			bsdThisAjaxMedia = bsdThisAjax.find('.project-media');
			bsdThisAjaxInfo = bsdThisAjax.find('.project-info');	
			bsdThisAjax.toggleClass('bsdpf-active-post');
			$('.bsdpf-post-ajax').not(bsdThisAjax).removeClass('bsdpf-active-post');


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
				setTimeout(function () {
					$('.project-media').not(bsdThisAjaxMedia).empty();
					$('.project-info').not(bsdThisAjaxInfo).empty();
					$('.bsdpf-post-ajax').not(bsdThisAjax).css({
						height: '0',
						marginTop: '0',
						marginBottom: '0'
					});
				}, 600);
			}
			
			function closeProject() {
				fadeOutProject();
				setTimeout(function () {
					bsdThisAjaxMedia.empty();
					bsdThisAjaxInfo.empty();
					$('.project-media').not(bsdThisAjaxMedia).empty();
					$('.project-info').not(bsdThisAjaxInfo).empty();
					bsdThisAjax.css({
						height: '0',
						marginTop: '0',
						marginBottom: '0'
					});
				}, 600);
			}
			
			
			function showLoader() {
				bsdClickedLink.find('img').hide();
				bsdClickedLink.addClass('loading-bubbles');
			}

			function hideLoader() {
				if (bsdThisAjaxMedia.children().length > 0) {
					bsdClickedLink.find('img').fadeIn(600);
					bsdClickedLink.removeClass('loading-bubbles');
					ajaxContentHeight = bsdThisAjaxContent.outerHeight();
					console.log(ajaxContentHeight);
					bsdThisAjax.css({
						height: ajaxContentHeight,
						marginTop: '20px',
						marginBottom: '20px'
					});
					setTimeout(fadeInProject, 600);
				}
			}
			
			function loadProject() {
				bsdProjectLink = bsdClickedLink.attr("href");
				bsdThisAjaxMedia.load(bsdProjectLink + ' .post-media', function (response, status) {
					if (status == "success") {
						loadCarousel();
					}
				});
				bsdThisAjaxInfo.load(bsdProjectLink + ' .project-info > *');
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
						smoothHeight: true
					});
				}
			}
		});
	}

	$(document).ready(function () {
		bsdPushDownPostClick();
	});

})(window.jQuery);