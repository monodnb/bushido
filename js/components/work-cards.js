(function ($, window, document) {

    // The $ is now locally scoped 
    $(function () {

        // DOM ready!
        //Variables
        $document = $(document),
            $window = $(window),
            $body = $("body"),
            $card = $(".work-card"),
            $thumb = $card.find(".work-card-image"),
            $overlay = $card.find(".work-card-overlay"),
            $info = $card.find(".work-card-info"),
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
        //$card.on("click", showCardOverlay);
        $document.on("click", ".work-card", cardRipple);
        //$flip.on("click", flipCard);



    });


    function cardRipple(startEvent) {
            //console.log(animating);
            var $this = $(this),
                $image = $this.find(".work-card-image"),
                $info = $this.find(".work-card-info"),
                isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                startX,
                startY;
            //console.log($info.position());
            //console.log(startEvent.offsetX + " & " + startEvent.offsetY);
            //console.log(startEvent);
            //console.log(isMobile);
            //cancel mousedown if touchstart fired
            if (isMobile && event.type === "mousedown") {
                return false;
            }
            //get mouse position relative to the card
            startX = startEvent.pageX - $this.offset().left;
            startY = startEvent.pageY - $this.offset().top;
            console.log(startX);
            console.log(startY);
            $info
                .css({
                    top: startY - $info.outerHeight() / 2,
                    left: startX - $info.outerWidth() / 2
                })
                .toggleClass("cleared expanded");
        }
        /*
            function flipCard() {
                var $this = $(this),
                    $cardContent = $("#card-content"),
                    $tile = $this.closest(".tile"),
                    $tileOverlay = $tile.find(".tile-overlay"),
                    $tileInfo = $tile.find(".tile-info"),
                    $tileThumb = $tile.find(".tile-thumb"),
                    $card = $tile.closest("card"),
                    $block = $this.closest(".block"),
                    offset = $card.offset().top - $window.scrollTop(),
                    wHeight = $window.height(),
                    wWidth = $window.width();

                $tile.addClass("active");
                $card.toggleClass("focused");
                $tileOverlay.toggleClass("focused").toggleClass("on");
                $tileInfo.toggleClass("focused").toggleClass("on");
                $tileThumb.toggleClass("clipped");
            }

        */

    // Functions

    function setCardsSize() {
        $card.css({
            width: $card.parent().outerWidth(),
            height: $card.parent().outerHeight()
        });
    }

}(window.jQuery, window, document)); // Fully reference jQuery after this point.