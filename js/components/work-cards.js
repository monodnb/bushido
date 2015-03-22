(function ($, window, document) {

    // The $ is now locally scoped 
    $(function () {

        // DOM ready!
        //Variables
        $document = $(document),
            $window = $(window),
            $body = $("body"),
            $card = $(".work-card"),
            $img = $card.find(".work-card-image"),
            $overlay = $card.find(".work-card-overlay"),
            $info = $card.find(".work-card-info"),
            $action = $info.find(".work-card-action"),
            $cardContent = $("#card-content"),
            overlay = false,
            animating = false;

        // Initial setup

        // set tile overlay color after image has finished loading
        $window.on("load", function () {
            $card.each(function () {
                var colorThief = new ColorThief();
                var dominantColor = colorThief.getColor($(this).find(".work-card-image > img")[0]);
                var newColor = "rgb(" + dominantColor[0] + "," + dominantColor[1] + "," + dominantColor[2] + ")";
                $(this).find(".work-card-overlay").css({
                    "background-color": newColor
                });
                $(this).css({
                    "background-color": newColor
                });
            });
        });


        // Event delegation
        $card.on("click", showCardOverlay);
        $action.on("click", flipCard);

    });


    // Functions
    function showCardOverlay() {
        var $this = $(this),
            $thisOverlay = $this.find(".work-card-overlay"),
            $thisInfo = $this.find(".work-card-info"),
            $thisImg = $this.find(".work-card-image");
        $this.toggleClass("active");
        $thisOverlay.toggleClass("on off");
        $thisInfo.toggleClass("on off");
    }

    function flipCard(startEvent) {
        console.log("tadadada");
        var $this = $(this),
            $thisCard = $this.closest(".work-card"),
            $thisOverlay = $this.find(".work-card-overlay"),
            $thisInfo = $this.find(".work-card-info"),
            $thisImg = $this.find(".work-card-image"),
            $thisGrid = $this.closest(".block-grid");
        $thisCard.css("height", $thisCard.outerHeight());
        $thisCard.addClass("active");
        $thisCard.clone().appendTo($cardContent);
        $cardContent.css({
            top: $thisCard.offset().top,
            position: "absolute"
        });
        $cardContent.find(".work-card").children().removeClass("on off");
    }


}(window.jQuery, window, document)); // Fully reference jQuery after this point.