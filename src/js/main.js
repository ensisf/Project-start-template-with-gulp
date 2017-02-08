///////////////////////////////////////////////////VENDORS
/*
= vendor/sprite-svg.js
= vendor/fotorama.js
= vendor/jquery.magnific-popup.js
= vendor/jquery.maskedinput.min.js
= vendor/jquery.pickmeup.min.js
= vendor/jquery.smoothscroll.js
= vendor/jquery.sticky.js
= vendor/slick.min.js
= vendor/parallax.min.js
= vendor/wow.min.js
*/

jQuery(document).ready(function($) {
    console.log("ready!");

    //globals vars
    var $window = $(window),
        $doc = $('html'),
        $body = $('body');

        // //get scroll width
        //
        // function scrollWidth(){
        //     var div = $('<div>').css({
        //         position: "absolute",
        //         top: "0px",
        //         left: "0px",
        //         width: "100px",
        //         height: "100px",
        //         visibility: "hidden",
        //         overflow: "scroll"
        //     });
        //     $('body').eq(0).append(div);
        //     var width = div.get(0).offsetWidth - div.get(0).clientWidth;
        //     div.remove();
        //     return width;
        // }
        //
        // var scrollWidth = scrollWidth();

        // close by outer click

        // $doc.mouseup(function (e) {
        //   closeOut(e, elem, closeClass);
        // });

        function closeOut(e, elem, closeClass) {
          // e - event
          // elem - jquery element
          // closeClass - class tat hide element

          if (elem.hasClass(closeClass)) {
            return;
          }
          if (!elem.is(e.target) // click outer element
              && elem.has(e.target).length === 0) { // and not his children
            elem.addClass(closeClass); // hide him
          }
        }


        //scroll to anchor
        var btnAnchor = $('.btnAnchor');
        $doc.on('click', '.btnAnchor', scrollToAnchor);

        function scrollToAnchor(e) {
          e.preventDefault();
          var id  = $(this).data('href'),
              top = $(id).offset().top;

          $('body,html').animate({scrollTop: top}, 500);
        };

    //nav

    //debounce
  //   var scrollTimeout;
  //   window.addEventListener('scroll', function(evt){
  //     clearTimeout(scrollTimeout);
  //     scrollTimeout = setTimeout(function(){
  //
  //     }, 100);
  //  });

    //sticky nav
    // $(window).scroll(function() {
    //
    //
    //     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    //     var nav = $('.nav');
    //     if (nav.length != 0) {
    //       if (scrolled >= 250) {
    //           nav.addClass('fixed');
    //       }
    //       if (scrolled >= 350) {
    //           nav.addClass('shown');
    //       }
    //       if (scrolled <= 300) {
    //           nav.removeClass('shown');
    //           nav.removeClass('fixed');
    //       }
    //     }
    // });

    var btnToggleNav = $('.toggle-nav');

    btnToggleNav.on('click', function (e) {
      e.preventDefault();
      $(this).toggleClass('opened');
      $($(this).data('href')).toggleClass('closed');
    });

    //modals
    var modalLink = $('.modal-link');

  //   modalLink.magnificPopup({
  //     type: 'inline',
  //     preloader: false,
  //     closeBtnInside: true,
  //     removalDelay: 200,
  //     mainClass: 'fade-zoom',
  //     callbacks: {
  //       beforeOpen: function() {
  //
  //       },
  //       afterClose: function() {
  //
  //       }
  //     }
  // });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////MASKEDINPUT jQuery

    // $.mask.definitions['~']='[+-]';
    //  $('#date').mask('99/99/9999',{
    //  	placeholder:"mm/dd/yyyy"
    //  });
    //  $('#phone').mask('(999) 999-9999');
    //  $('#phoneext').mask("(999) 999-9999? x99999");
    //  $("#tin").mask("99-9999999");
    //  $("#ssn").mask("999-99-9999");
    //  $("#product").mask("a*-999-a999",{
    //  	placeholder:" ",
    //  	completed:function(){
    //  		alert("You typed the following: "+this.val());
    //  	}
    //  });
    //  $("#eyescript").mask("~9.99 ~9.99 999");

    ////////////////////////////////////////////////////////////////////////////////////////////////////////Кнопка наверх на jQuery

    $body.append('<style>\
	.scrollTop{\
		display:none; z-index:9999; position:fixed; bottom:8px; padding:5px 10px; right:8px; border-radius:.2em;\
		background:rgba(0,0,0,0.4); color:#fff;\
	}\
	.scrollTop:hover{ background:rgba(41, 58, 114,0.8); color:#fff; text-decoration:none; }\
	.scrollTop:before{ content:"↑" }\
	</style>');
    var
        speed = 500,
        $scrollTop = $('<a href="#" class="scrollTop"></a>').appendTo('body');

    $scrollTop.click(function(e) {
        e.preventDefault();
        $('html:not(:animated),body:not(:animated)').animate({
            scrollTop: 0
        }, speed);
    });
    //появление
    function show_scrollTop() {
        ($(window).scrollTop() > 100) ? $scrollTop.fadeIn(600): $scrollTop.fadeOut(600);
    }
    $(window).scroll(function() {
        show_scrollTop();
    });
    show_scrollTop();

    ///////////////////////////////////////////// site nav widget

    pageWidget(['index','blog','about','contact','single']);

    function pageWidget(pages) {
    	var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
    	widgetWrap.prependTo("body");
    	for (var i = 0; i < pages.length; i++) {
    		$('<li class="widget_item"><a class="widget_link" href="' + pages[i] + '.html' + '">' + pages[i] + '</a></li>').appendTo('.widget_list');
    	}
    	var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:9999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
    	widgetStilization.prependTo(".widget_wrap");
    }
});


////////////////////////////////////////////////////////////////////////////////////////replace span and gaps in href
// function replaceSpan(elem){
//   for (var i = 0; i < elem.length; i++) {
//     var href = elem[i].getAttribute('href');
//     var ww = href.replace(/\s+/g, '');
//     var ss = ww.replace('<span>', '');
//     var dd = ss.replace('</span>', '');
//     elem[i].setAttribute('href', dd);
//   }
// }
// replaceSpan(document.querySelectorAll(''));


/////////////////////////////////////////////////////////////////////////////////////////scroll to top
// (function() {
//     'use strict';
//     var toTopElement = document.createElement('a'); // створюєм ссилку
//     toTopElement.setAttribute('href', '#');
//     toTopElement.className = 'scroll';
//     toTopElement.innerHTML = '↑';
//     document.body.appendChild(toTopElement);
//
//     //обробник скроллу
//     var scrollTimeout; // використаємо прийом throttle, щоб подія скроллу не визивалась при кожному пікселі, а з таймаутом в 100 мілісекунд
//     var SCROLL_TIMEOUT = 100; // Задаємо таймаут
//     var OFFSE_TO_TOP = 300; // Через скільки пікселів прокрутки з'явиться елемент
//
//     window.addEventListener('scroll', function(evt) {
//       clearTimeout(scrollTimeout); // Очищаємо таймаут, якщо не скроллиться
//       scrollTimeout = setTimeout(function(){ // обробляємо скролл кожні 100 мілісекунд
//
//         if (window.pageYOffset > OFFSE_TO_TOP) {
//             toTopElement.classList.add('scroll--visible'); //Додаєм клас
//         } else {
//             toTopElement.classList.remove('scroll--visible'); // Прибираєм клас
//         }
//       }, SCROLL_TIMEOUT)
//
//     });
//
//     //обробник кліку
//     toTopElement.onclick = function(evt) {
//         evt.preventDefault();
//         var start = Date.now(); // зберігаємо час початку
//         var SCROLL_TIME = 500; // загальний час на скролл
//         var INTERVAL = 20; // інтервал
//         var distance = window.pageYOffset; //Дистанція скроллу в момент кліку
//         var timer = setInterval(function() { // Таймер
//           var timePassed = Date.now() - start; // Скільки пройшло часу
//           window.scrollBy(0, - distance / (SCROLL_TIME / INTERVAL)); // Скроллим
//           if (timePassed > SCROLL_TIME) clearInterval(timer); //Якщо пройшло більше часу ніж відведено на анімацію - чистим таймер
//         }, INTERVAL);
//     }
// }());
