(function ($, window, document) {

    //Variables
    var $document = $(document),
        $window = $(window),
        $body = $("body"),
        $card = $(".work-card"),
        $img = $card.find(".work-card-image"),
        $overlay = $card.find(".work-card-overlay"),
        $info = $card.find(".work-card-info"),
        $action = $info.find(".work-card-action"),
        $cardContent = $("#card-content"),
        cardHeroHeight,
        overlay = false,
        animating = false;

    // The $ is now locally scoped 
    $(function () {

        // DOM ready!


        // Initial setup

        // set tile overlay color after image has finished loading
        $window.on("load", function () {
            $card.each(function () {
                var colorThief = new ColorThief(),
                    dominantColor = colorThief.getColor($(this).find(".work-card-image > img")[0]),
                    newColor = "rgb(" + dominantColor[0] + "," + dominantColor[1] + "," + dominantColor[2] + ")";
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
        $action.on("click", revealCard);
        $cardContent.on("scroll", scrollHero);

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

    function revealCard(startEvent) {
        var $this = $(this),
            thisLink = $this.find("img").attr("href");
        $body.addClass("no-scroll");
        $cardContent.toggleClass("invisible");
        $cardContent.load(thisLink + " .revealed-card", function () {
            cardHeroHeight = $cardContent.find(".card-hero").outerHeight();
            $cardContent.find(".card-hero").css("height", cardHeroHeight);
        });
    }

    function scrollHero() {
        var $this = $(this),
            $hero = $this.find(".card-hero"),
            $heroImg = $hero.find(".hero-image"),
            $heroOverlay = $hero.find(".card-hero-overlay"),
            scrollAmount = $this.scrollTop(),
            scrollPerc = $this.scrollTop() / ($hero.outerHeight() - 50),
            heroOffset = (cardHeroHeight-50) * scrollPerc + scrollAmount,
            colorThief = new ColorThief(),
            dominantColor = colorThief.getColor($heroImg[0]),
            newColor = "rgb(" + dominantColor[0] + "," + dominantColor[1] + "," + dominantColor[2] + ")";
        $heroOverlay.css({
            backgroundColor: newColor,
            opacity: scrollPerc
        });
        $heroImg.css({
            position: "absolute"
        });
        console.log(scrollAmount);
    }


}(window.jQuery, window, document)); // Fully reference jQuery after this point.
