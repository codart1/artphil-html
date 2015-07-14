! function($) {
  $(document).ready(function() {
    /* --------------------------------------------------------------------- */
    /* #caroufredsel-slider-main
    /* --------------------------------------------------------------------- */
    (function() {
      if ($('#caroufredsel-slider-main').length) {
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

        var sliderMain = $("#caroufredsel-slider-main");
        var slideItem = sliderMain.find(".sliders .slide-item");

        slideItem.each(function(){
          var _slideItem = $(this);
          var slideImage = _slideItem.find(".slide-image");
          var urlSlideImage = slideImage.attr('src');
          _slideItem.css("background-image", "url('" + urlSlideImage + "')");
        });
      }
    })();



    /* --------------------------------------------------------------------- */
    /* Clone social on Header to Footer
    /* --------------------------------------------------------------------- */
    (function() {
      if ($('.social').length) {
        var socialHeader = $(".header .social");
        var containerFooter = $(".footer > .container");
        var socialHeaderClone = socialHeader.clone();
        containerFooter.append(socialHeaderClone.addClass('col'));
      }
    })();



    /* --------------------------------------------------------------------- */
    /* .equaHeight function
    /* --------------------------------------------------------------------- */
    (function() {
      var equaHeight = function(container, box){
        if (container.length) {
          container.each(function() {
            var highestBox = 0;
            
            $(this).find(box).each(function() {
              if ($(this).height() > highestBox) {
                highestBox = $(this).height();
              }
            })

            $(this).find(box).height(highestBox);
          });
        }
      };

      $(document).ready(function(){
        equaHeight($(".faculty"), $(".col-item"));
        equaHeight($(".why-artphil"), $(".col-item"));
      });
    })();



    /* --------------------------------------------------------------------- */
    /* Click to scroll - Sub Navigation Bottom
    /* --------------------------------------------------------------------- */
    (function() {
      if ($('.snb').length) {
        // Cache selectors
        var lastId,
          snb = $(".snb"),
          snbHeight = snb.outerHeight() + 15,
          // All list items
          menuItemsLi = snb.find("#nav-sub ul li"),
          menuItems = snb.find("#nav-sub ul li a"),
          // Anchors corresponding to menu items
          scrollItems = menuItems.map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
              return item;
            }
          });

        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.click(function(e) {
          var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - snbHeight + 1;
          $('html, body').stop().animate({
            scrollTop: offsetTop
          }, 1000);
          snb.find(".navbar-collapse").collapse('hide');
          e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function() {
          // Get container scroll position
          var fromTop = $(this).scrollTop() + snbHeight;

          // Get id of current scroll item
          var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
              return this;
          });
          // Get the id of the current element
          cur = cur[cur.length - 1];
          var id = cur && cur.length ? cur[0].id : "";

          if (lastId !== id) {
            lastId = id;

            // Set/remove active class
            menuItems
              .parent().removeClass("active")
              .end().filter("[href=#" + id + "]").parent().addClass("active");
          }

          var menuItemsActive = snb.find("#nav-sub ul li.active a");
          var navbarToggle = snb.find(".navbar-toggle");
          navbarToggle.html(menuItemsActive.text());

          if(!menuItems.parent().hasClass("active")){
            var menuItemsFirstText = menuItems.parent().first().find("a").text();
            navbarToggle.html(menuItemsFirstText);
          }
        });
      }
    })();


    /* --------------------------------------------------------------------- */
    /* .fixed snb
    /* --------------------------------------------------------------------- */
    $(function() {
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



    /* --------------------------------------------------------------------- */
    /* #caroufredsel-slider-special-courses
    /* --------------------------------------------------------------------- */
    (function() {
      if ($('#caroufredsel-slider-special-courses').length) {
        function runSliderSpecialCourses() {
          $('#caroufredsel-slider-special-courses .sliders').carouFredSel({
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
              button: "#caroufredsel-slider-special-courses-prev"
            },

            next: {
              button: "#caroufredsel-slider-special-courses-next"
            },

            pagination: {
              container: "#caroufredsel-slider-special-courses-pagination"
            },

            swipe: {
              onTouch: true,
              onMouse: true
            }
          });
        }
        $("#caroufredsel-slider-special-courses").imagesLoaded(runSliderSpecialCourses);
      }
    })();



    /* --------------------------------------------------------------------- */
    /* #caroufredsel-slider-collaborative-project
    /* --------------------------------------------------------------------- */
    (function() {
      if ($('#caroufredsel-slider-collaborative-project').length) {
        function runSliderCollaborativeProject() {
          $('#caroufredsel-slider-collaborative-project .sliders').carouFredSel({
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
              button: "#caroufredsel-slider-collaborative-project-prev"
            },

            next: {
              button: "#caroufredsel-slider-collaborative-project-next"
            },

            pagination: {
              container: "#caroufredsel-slider-collaborative-project-pagination"
            },

            swipe: {
              onTouch: true,
              onMouse: true
            }
          });
        }
        $("#caroufredsel-slider-collaborative-project").imagesLoaded(runSliderCollaborativeProject);
      }
    })();



    /* --------------------------------------------------------------------- */
    /* #caroufredsel-slider-figure-drawing-class
    /* --------------------------------------------------------------------- */
    (function() {
      if ($('#caroufredsel-slider-figure-drawing-class').length) {
        function runSliderFigureDrawingClass() {
          $('#caroufredsel-slider-figure-drawing-class .sliders').carouFredSel({
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
              button: "#caroufredsel-slider-figure-drawing-class-prev"
            },

            next: {
              button: "#caroufredsel-slider-figure-drawing-class-next"
            },

            pagination: {
              container: "#caroufredsel-slider-figure-drawing-class-pagination"
            },

            swipe: {
              onTouch: true,
              onMouse: true
            }
          });
        }
        $("#caroufredsel-slider-figure-drawing-class").imagesLoaded(runSliderFigureDrawingClass);
      }
    })();



    /* --------------------------------------------------------------------- */
    /* .faculty
    /* --------------------------------------------------------------------- */
    (function() {
      if ($('.faculty').length) {
        var colItem = $(".faculty .faculty-content").find(".col-item");

        colItem.on("click", function(){
          $(this).toggleClass("active");
        });
      }
    })();

  });
}(jQuery);
