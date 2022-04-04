(function($) {
  "use strict";
  var mainNav = $('.main-nav');
  var windowWidth = $(window).width();

  function mobileMenuHide() {
    if (windowWidth < 991) {
      mainNav.addClass('mobile-menu-hide');
    }
  }
  $('#contact-form').validator();
  $(window).on('load', function() {
    var isMobile = {
      Android: function() {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
      }
    };
    $(".preloader").fadeOut("slow");
    $.stellar({
      horizontalScrolling: false,
      verticalScrolling: !isMobile.any(),
      verticalOffset: 0,
      horizontalOffset: 0,
      responsive: true
    });
  }).on('resize', function() {
    mobileMenuHide();
  });
  $(document).on('ready', function() {
    mobileMenuHide();
    if (windowWidth > 991) {
      var mainMenuHeight = mainNav.height(),
        headerHeight = $('#header').height(),
        offsetValue = mainMenuHeight + headerHeight + 40;
    } else {
      var headerHeight = $('#header').height(),
        offsetValue = headerHeight;
    }
    $(".main-nav a").mPageScroll2id({
      layout: "vertical",
      highlightClass: "active-item",
      keepHighlightUntilNext: true,
      scrollSpeed: 880,
      scrollEasing: "easeInOutExpo",
      scrollingEasing: "easeInOutCirc",
      clickedClass: "",
      appendHash: false,
      offset: offsetValue,
      forceSingleHighlight: true
    });
    $("a").on("click", function(e) {
      var link = $(this);
      if (link.hasClass("menu-toggle")) {
        mainNav.toggleClass('mobile-menu-hide');
      } else if (link.children(mainNav)) {
        mobileMenuHide();
      }
    });
    $('#count').countdown('2022/06/22', function(event) {
      $(this).html(event.strftime('' +
        '<div class="count-block days">%D<span class="count-label">day%!d</span></div>' +
        '<div class="count-block hours">%H<span class="count-label">%!H:hour,hours;</span></div>' +
        '<div class="count-block minutes">%M<span class="count-label">%!M:minute,minutes;</span></div>' +
        '<div class="count-block seconds">%S<span class="count-label">%!S:second,seconds;</span></div>'));
    });
    $('.gallery-grid').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1]
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });
  });
})(jQuery);
