(function ($, window, document) {

	//Variables
	var $document = $(document),
		$window = $(window),
		$body = $("body"),
		$checkbox = $(".checkbox"),
		$radio = $(".radio-button"),
		$switch = $(".switch"),
		$slider = $(".slider"),
		$sliderBtn = $(".slider").find(".slider-button"),
		$sliderBar = $(".slider").find(".slider-bar");

		// The $ is now locally scoped
		$(function () {

			// DOM ready!


			// Initial setup


			// Event delegation
			$checkbox.on("click", doneCheckBox);
			$radio.on("click", onRadioButton);
			$switch.on("click", turnOnSwitch);
			$sliderBtn.on("mousedown", expandSliderPin);

		});


	// Functions
	function doneCheckBox() {
		$(this).toggleClass("checked");
	}

	function onRadioButton() {
		$(this).toggleClass("on");
	}

	function turnOnSwitch() {
		$(this).toggleClass("on");
	}

	function expandSliderPin(startEvent) {
		$(this).toggleClass("expand draggable");
		var offset,
			sliderWidth = $(this).closest(".slider").outerWidth(),
			perc,
			translatePos;
		$window.on("mousemove", function (evt) {
			//console.log(evt.originalEvent.x);
			translatePos = "translateX(" + (evt.originalEvent.x - 7) + "px)";
			perc = Math.abs(Math.floor(((sliderWidth - evt.originalEvent.x + 7) / sliderWidth) * 100 - 100));
			offset = $(".draggable").position().left;
			$(".pin")
				.removeAttr("style")
				.css({
					transform: translatePos,
					msTransform: translatePos,
					webkitTransform: translatePos
				})
				.attr("value", perc);
		});
		$window.one("mouseup", function () {
			$(".pin").toggleClass("expand draggable");
			offset = $(".draggable").position().left;
			$window.off("mousemove");
			$(".pin").removeAttr("style").css({
				left: Math.abs(Math.floor(((sliderWidth - offset) / sliderWidth) * 100 - 100)) + "%"
			});
		});
	}

}(window.jQuery, window, document)); // Fully reference jQuery after this point.
