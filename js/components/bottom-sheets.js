(function ($, window, document) {

	//Variables
	var $document = $(document),
		$window = $(window),
		$body = $("body"),
		$toolbar = $("#toolbar"),
		$content = $("#content"),
		$bottomSheet = $("#bottom-sheet"),
		$bsContainer = $bottomSheet.find(".bs-container"),
		$bsMedia = $bottomSheet.find(".bs-media"),
		$bsMediaOverlay = $bottomSheet.find(".bs-media-overlay"),
		$bsContent = $bottomSheet.find(".bs-content");

		// The $ is now locally scoped
		$(function () {

			// DOM ready!


			// Initial setup


			// Event delegation
			$(".bs-trigger").on("click", showBottomSheet);
			$bsContainer.on("scroll", scrollBottomSheet);

		});


	// Functions
	function showBottomSheet() {
		$body.addClass("no-scroll");
		$bottomSheet.addClass("active");
		$(".bottom-sheet-overlay").addClass("active");
		$bsMedia.css({
			height: $bsMedia.height()
		});
		bsMediaInitHeight = $bsMedia.height();
		bsMediaMinHeight = $toolbar.height();
		var colorThief = new ColorThief(),
			dominantColor = colorThief.getColor($bsMedia.find("img")[0]),
			newColor = "rgb(" + dominantColor[0] + "," + dominantColor[1] + "," + dominantColor[2] + ")";
		$bsMedia.css({
			"background-color": newColor
		});
		//add the close event listeners
		$bsMedia.find(".action.close").one("click", hideBottomSheet);
	}
	function scrollBottomSheet() {
		var scrollAmnt = $bsContent.offset().top - $bottomSheet.offset().top,
			newOpct = (scrollAmnt - bsMediaMinHeight) / (bsMediaInitHeight - bsMediaMinHeight),
			bsMediaHeight = $bsMedia.outerHeight(),
			newFntsz = (1.71 - 1.43) * newOpct + 1.43;
		if (bsMediaHeight > 56 || scrollAmnt > 56) {
			$bsMedia.css({
				height: scrollAmnt
			});
			$bsMedia.find("img").css({
				marginTop: (scrollAmnt - bsMediaInitHeight) / 2,
				opacity: newOpct * 2 - 0.25
			});
			$bsMedia.find(".bs-scrim").css({
				opacity: newOpct * 2 - 0.25
			});
		}

		/*if(newFntsz >=1.43){  // not to smooth on mobile
			$bsMedia.find(".bs-title").css({
				fontSize: newFntsz+"rem"
			});
		}*/

	}

	function hideBottomSheet(){
		console.log("closing bottom sheet");
		$body.removeClass("no-scroll");
		$bottomSheet.removeClass("active");
		$(".bottom-sheet-overlay").removeClass("active");
		$bsContainer.scrollTop(0);
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
