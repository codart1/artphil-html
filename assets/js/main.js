! function($) {
    $(document).ready(function() {
        /* --------------------------------------------------------------------- */
        /* .slider-main
        /* --------------------------------------------------------------------- */
        (function() {
            if ($('.slider-main').length) {
                function runSliderMain() {
                    $('#caroufredsel-slider-main .sliders').carouFredSel({
                        infinite: true,
                        circular: true,
                        responsive: true,
                        debug: false,
                        items: {
                            start: 0
                        },

                        scroll: {
                            items: 1,
                            duration: 600,
                            fx: "scroll"
                        },

                        auto: {
                            timeoutDuration: 6000,
                            play: true
                        },

                        prev: {
                            button: "#caroufredsel-slider-main-prev"
                        },

                        next: {
                            button: "#caroufredsel-slider-main-next"
                        },

                        pagination: {
                            container: "#caroufredsel-slider-main-pagination"
                        },

                        swipe: {
                            onTouch: true,
                            onMouse: true
                        }
                    });
                }
                $("#caroufredsel-slider-main").imagesLoaded(runSliderMain);
            }
        })();

    });
}(jQuery);
