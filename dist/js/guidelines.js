!function(e){"use strict";var i=e(".main-nav"),a=e(window).width();function n(){a<991&&i.addClass("mobile-menu-hide")}e(window).on("load",(function(){var i={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return i.Android()||i.BlackBerry()||i.iOS()||i.Opera()||i.Windows()}};e(".preloader").fadeOut("slow"),e.stellar({horizontalScrolling:!1,verticalScrolling:!i.any(),verticalOffset:0,horizontalOffset:0,responsive:!0})})).on("resize",(function(){n()})),e(document).on("ready",(function(){if(n(),a>991)var t=i.height()+e("#header").height()+40;else t=e("#header").height();e(".main-nav a").mPageScroll2id({layout:"vertical",highlightClass:"active-item",keepHighlightUntilNext:!0,scrollSpeed:880,scrollEasing:"easeInOutExpo",scrollingEasing:"easeInOutCirc",clickedClass:"",appendHash:!1,offset:t,forceSingleHighlight:!0}),e("a").on("click",(function(a){var t=e(this);t.hasClass("menu-toggle")?i.toggleClass("mobile-menu-hide"):t.children(i)&&n()})),e(".lightbox").magnificPopup({type:"image",removalDelay:300,mainClass:"mfp-fade",image:{titleSrc:"title"},iframe:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',patterns:{youtube:{index:"youtube.com/",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}},srcAction:"iframe_src"},callbacks:{markupParse:function(e,i,a){i.title=a.el.attr("title")}}}),e("#count").countdown("2022/06/22",(function(i){e(this).html(i.strftime('<div class="count-block days">%D<span class="count-label">day%!d</span></div><div class="count-block hours">%H<span class="count-label">%!H:hour,hours;</span></div><div class="count-block minutes">%M<span class="count-label">%!M:minute,minutes;</span></div><div class="count-block seconds">%S<span class="count-label">%!S:second,seconds;</span></div>'))})),e(".gallery-grid").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.',titleSrc:function(e){return e.el.attr("title")}}})}))}(jQuery);
//# sourceMappingURL=guidelines.js.map