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



    /* --------------------------------------------------------------------- */
    /* .equaHeight function
    /* --------------------------------------------------------------------- */
    (function() {
      var equaHeight = function(container, box){
        if (container.length) {
          $(window).load(function() {

            container.each(function() {
              var highestBox = 0;
              
              $(this).find(box).each(function() {
                if ($(this).height() > highestBox) {
                  highestBox = $(this).height();
                }
              })

              $(this).find(box).height(highestBox);
            });
          });
        }
      };

      $(document).ready(function(){
        equaHeight($(".faculty"), $(".col-item"));
        equaHeight($(".why-artphil"), $(".col-item"));
      });
    })();

  });


  /* --------------------------------------------------------------------- */
  /* .anchor smooth scroll
  /* --------------------------------------------------------------------- */
  $(function() {
    var offset = 80;

    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - offset
          }, 1000);
          return false;
        }
      }
    });
  });


  /* --------------------------------------------------------------------- */
  /* .fixed snb
  /* --------------------------------------------------------------------- */
  $(function() {
    if (!$('#snb').length) return;

    var gnb = $('#gnb');
    var snb = $('#snb');

    $(window).scroll(function() {
      if (gnb.visible(true)) {
        snb.removeClass('fixed');
      } else {
        snb.addClass('fixed');
      }
    });

  });

}(jQuery);
