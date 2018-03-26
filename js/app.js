(function(scs) {
    scs(window.jQuery, window, document);
    }(function($, window, document) {
        // jQuery $ locally scoped
       
        
        $(function() {

            $('.ids-portfolio--menu-btn').click(function(){
                $('body').toggleClass('is-visible--menu');
            });

            $('.animate-intro').fadeIn(1500);

            //scroll-to section
            $("#scroll-cta").click(function(){
              $('html, body').animate({ scrollTop: $('#about').offset().top }, 'slow');
            });


            // Select all links with hashes
            $('a[href*="#"]')
                  // Remove links that don't actually link to anything
                  .not('[href="#"]')
                  .not('[href="#0"]')
                  .click(function(event) {
                    // On-page links
                    $('body').removeClass('is-visible--menu');

                    if (
                      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
                      && 
                      location.hostname == this.hostname
                    ) {
                      // Figure out element to scroll to
                      var target = $(this.hash);
                      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                      // Does a scroll target exist?
                      if (target.length) {
                        // Only prevent default if animation is actually gonna happen
                        event.preventDefault();
                         var newScroll = target.offset().top;
                        $('html, body').animate({
                          scrollTop: newScroll
                        }, 1000, function() {
                          // Callback after animation
                          // Must change focus!
                          var $target = $(target);
                          $target.focus();
                          if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                          } else {
                            //$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                          };
                        });
                      }
                    }
            });

            $('.ids-portfolio--nav a').click(function(){
                $('a').removeClass("active");
                $(this).addClass("active");
            });

            // init Masonry
            var $grid = $('.img-grid').imagesLoaded( function() {
              $grid.masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
              }); 
            });  

          //   (function($) {

          //   /**
          //    * Copyright 2012, Digital Fusion
          //    * Licensed under the MIT license.
          //    * http://teamdf.com/jquery-plugins/license/
          //    *
          //    * @author Sam Sehnert
          //    * @desc A small plugin that checks whether elements are within
          //    *     the user visible viewport of a web browser.
          //    *     only accounts for vertical position, not horizontal.
          //    */

          //   $.fn.visible = function(partial) {
              
          //       var $t            = $(this),
          //           $w            = $(window),
          //           viewTop       = $w.scrollTop(),
          //           viewBottom    = viewTop + $w.height(),
          //           _top          = $t.offset().top,
          //           _bottom       = _top + $t.height(),
          //           compareTop    = partial === true ? _bottom : _top,
          //           compareBottom = partial === true ? _top : _bottom;
              
          //     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

          //   };
              
          // })(jQuery);

          // var win = $(window);

          // var allMods = $(".grid-item");

          // allMods.each(function(i, el) {
          //   var el = $(el);
          //   if (el.visible(true)) {
          //     el.addClass("already-visible"); 
          //   } 
          // });

          // win.scroll(function(event) {
            
          //   allMods.each(function(i, el) {
          //     var el = $(el);
          //     if (el.visible(true)) {
          //       el.addClass("come-in"); 
          //     } 
          //   });
            
          // });


            
        });
    })
);